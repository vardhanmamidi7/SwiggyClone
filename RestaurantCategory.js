
import React,{useState} from 'react';
import ItemList from './ItemList';
    
const RestaurantCategory = ({ data }) => {

  const [showItems,setShowItems]=useState(false);
  const handleClick = () => {
   showItems===false?setShowItems(true):setShowItems(false)
  };
  return (
    <div  >
      <div className='w-6/12 mx-auto my-3 bg-gray-50 shadow-lg p-3  ' onClick={handleClick} >
        <div className='flex justify-between'  >
          <span className='font-bold text-lg'>{data.title} ({data.itemCards.length})</span>
          <span>{"🔻️"}</span>
        </div>
       { showItems && <ItemList items={data.itemCards} />}
      </div>

      {/* <CategoryList/> */}


    </div>
  )
}

export default RestaurantCategory;
