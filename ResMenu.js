// import React,{useEffect,useState}from 'react'
import Shimmer from './Shimmer';
import { useParams } from 'react-router-dom';
import useMenu from '../Utils/useMenu';
import RestaurantCategory from './RestaurantCategory';

const ResMenu = () => {
  const {resid}=useParams();
  const menu=useMenu(resid);
   
    if(menu===null)
    {
      return  <Shimmer/>;
    }
    const{name,cuisines,
      costForTwoMessage
      }=menu?.cards[2]?.card.card.info||{};
    const itemCards=menu?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards||[];

    // console.log(menu?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards);

    const categories=menu?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c)=>
    { return c.card?.card?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"} //["card"] same as .card
  );
  // console.log(categories);
    
  return (
    <div className='text-center'>
        <h1 className='font-bold my-4 text-2xl'>{name} </h1>

        <h4 className='font-bold text-md'>{cuisines.join(",")}-{costForTwoMessage}</h4>

        {categories.map((res)=>
        {
          return(
            <RestaurantCategory key={res?.card?.card.title} data={res?.card?.card} />
          )
        })
      }
     
    </div>
  )
}

export default ResMenu;
