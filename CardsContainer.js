import React from 'react';
import { CDN_URL } from '../Utils/constants';

const CardsContainer = (props) => {
  const { resData } = props;



  // If the search query is empty, display all restaurants, otherwise filter based on the query
  // If searchQuery is empty, return all restaurants
  

  return (

    <div className="m-4 p-4 w-[215px] bg-gray-100 hover:bg-gray-200">

      <img
        className="rounded-lg w-72 h-[170px] object-cover"
        src={CDN_URL + resData.info.cloudinaryImageId}
        alt="res-img"
      />


      <h1 className="font-bold py-3 text-lg">{resData.info.name}</h1>
      <h3> {resData.info.cuisines.join(', ')}</h3>
      <h3>{resData.info.costForTwo}</h3>
      <h3>{resData.info.avgRating} ⭐</h3>
      <h3>{resData.info.areaName}</h3>
      <h3>{resData.info.DeliveryTime}</h3>
     


    </div>

  );
};


export const WithPromptedLabel=(CardsContainer)=>{   //it is a function 
  return (props)=>                                                     //it returns a component
  {
    return (                                              //component returns a piece of jsx code
      <div>
        <label className='absolute bg-black text-white rounded-md m-3 p-1' >promoted</label>
        <CardsContainer {...props}/>
      </div>
    )
  }
}

export default CardsContainer;