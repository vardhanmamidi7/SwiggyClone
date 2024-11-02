import {useEffect} from 'react';

const Restaurants=()=>
{
    useEffect(()=>
    {
        menulist();
    },[])

    const menulist=async()=>
    {
        const data=await fetch(" ");

        const json=data.json();
        console.log(json);
    }
    return(
        <div className="res-div">
             
        </div>
    )
}

export default Restaurants;






// const fetchData = async () => {
//     try {
//       const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.406498&lng=78.47724389999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
//       if (!data.ok) {
//         throw new Error(`HTTP error! status: ${data.status}`);
//       }
//       const response = await data.json();
//       console.log(response); // Log the entire response to check structure
  
//       const restaurants = response?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
//       if (restaurants) {
//         setListOfRestaurants(restaurants);
//       } else {
//         console.error("Restaurants data not found in response.");
//       }
//     } catch (error) {
//       console.error("Error fetching data:", error);
//     }
//   };