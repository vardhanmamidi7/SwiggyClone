import { useState ,useEffect} from 'react';
// import mockData from '../Utils/mockData.js';
import '../App.css';
import CardsContainer,{WithPromptedLabel} from '../Food/CardsContainer.js';
import Shimmer from './Shimmer.js';
import { Link } from 'react-router-dom';
import useOnlineStatus from './useOnlineStatus.js';


const Body = () => {
     // const [searchQuery,SetSearchQuery]=useState('');
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [searchtext,setsearchtext]=useState("");
  const online=useOnlineStatus();
  // const [FilteredRestaurant,setFilteredRestaurant]=useState([]);
  //  if(listOfRestaurants.length===0)
  //  {
  //   return <h1>cards</h1>
  //  }
  // console.log(listOfRestaurants);
  const RestaurantPrompted=WithPromptedLabel(CardsContainer);

   useEffect(()=>
  {
    fetchData();
  },[]);
  const fetchData = async () => {
    try {
      const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.406498&lng=78.47724389999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
      if (!data.ok) {
        throw new Error(`HTTP error! status: ${data.status}`);
      }
      const response = await data.json();
      // console.log(response); // Log to confirm structure

      const cards = response?.data?.cards || [];
      let restaurants = null;

      // Loop through cards to find the one with restaurant data
      for (const card of cards) {
        restaurants = card?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        if (restaurants) {
          break; // Exit loop once we find the correct data
        }
      }

      if (restaurants) {
        setListOfRestaurants(restaurants);
      } else {
        console.error("Restaurants data not found in any card.");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  if(online===false)
  {
    return (<h1>No Internet Connection</h1>)
  }
  return listOfRestaurants.length===0?(<Shimmer />): (
    <div>
        <div className="filter ">
          <div className='search'>
          <input className="border border-solid border-black ml-2 " type="text" value={searchtext} onChange={(e)=>
            {
              setsearchtext(e.target.value);
            }
          } />
          <button className="px-4 py-2 bg-green-100 m-4 rounded-lg " onClick={()=>
          {
            const filterlist=listOfRestaurants.filter((res)=>res.info.name.toLowerCase().includes(searchtext.toLowerCase()));
          //  setFilteredRestaurant(filterlist);
          setListOfRestaurants(filterlist);
          }
          }> search</button>

        <button  className='px-4 py-2 bg-green-100 m-4  rounded-lg' onClick={() => {
          const filteredList = listOfRestaurants.filter(
            (res) => res.info.avgRating > 4.4
          );
          setListOfRestaurants(filteredList);
        } }
         >filter by click</button>
        </div>
      </div> 
      {/* <h1>Hare Krishna</h1> */}
      <div className="flex flex-wrap">
        {
        listOfRestaurants.map((resdata) =>
        (
           <Link key={resdata.info.id} to={"/restaurant/"+resdata.info.id}> 
           {resdata.info.avgRatingString>4.3?(<RestaurantPrompted resData={resdata}/>):(<CardsContainer resData={resdata} />)} </Link>  
        )
        )}
      </div>
    </div>
  )
}

export default Body;
