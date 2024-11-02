import { CDN_URL } from '../Utils/constants';
const ItemList=({items})=>
{
     
  return(
    <div>
       { items.map((item)=>
        {
          return(
              <div key={item.card.info.id} className="p-2 border-gray-200 border-b-2 text-left">
             
                <div className='flex justify-between'>
                   <div>
                   <span className="block font-bold text-xl py-2">{item.card.info.name}</span>
                    <span className="block font-medium text-base">₹{item.card.info.price?item.card.info.price/100:item.card.info.defaultPrice/100 }</span>
                    <span>{item.card.info.ratings.aggregatedRating.rating}</span>
                   </div>
                   
                    <div >          
                    <img src={CDN_URL+item.card.info.imageId} className='w-28 rounded-md'/>
                    <button className='bg-black text-white p-1 rounded-md'>ADD +</button>
                    </div>
                </div>
                {/* <p>{item.card.info.description}</p> */}
              </div>
          ) 
        })
      }

    </div>
  )
}

export default ItemList;