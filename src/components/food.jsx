import React, { useState } from 'react'
import {data} from "./data/data.js"

function Food() {
   

    const [foods,setfoods]=useState(data);



    const filter =(category)=>{
setfoods(
    data.filter((item)=>{
        return item.category === category
    })
)
    }

const pricefilter =(price)=>{
    setfoods(
        data.filter((item)=>(item.price === price)
           
        )
    )
}


  return (
    <div className='max-w-[1640px] m-auto px-4 py-12'>
<h1 className='text-orange-600 font-bold text-4xl text-center'>Top Rated Menu Items</h1>
{/* filter row */}
<div className='flex flex-col lg:flex-row justify-between'>
{/* filter type */}
    <div  >
        <p className='font-bold text-gray-700'>Filter Type</p>
        <div className='flex justify-between flex-wrap'>
            <button onClick={()=>setfoods(data)} className='border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>All</button>
            <button onClick={()=>filter("burger")}  className='border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>Burger</button>
            <button onClick={()=>filter("pizza")} className='border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>Pizza</button>
            <button onClick={()=>filter("salad")} className='border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>Salads</button>
            <button onClick={()=>filter("chicken")} className='border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>Chicken</button>
        
        
        
        </div>
    </div>


{/* filter price  */}
    <div>

        <p className='font-bold text-gray-700'>Filter Price</p>



        <div className='flex justify-between max-w-[390px] w-full'>

            <button onClick={()=>pricefilter("$")} className='border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>$</button>
            <button onClick={()=>pricefilter("$$")} className='border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>$$</button>
            <button onClick={()=>pricefilter("$$$")} className='border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>$$$</button>
            <button onClick={()=>pricefilter("$$$")} className='border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>$$$$</button>
        </div>
    </div>
</div>


{/* display images */}
<div className='grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4'>
    {
        foods.map(({name,image,price},index)=>(
            <div className='border shadow-2xl rounded-lg hover:scale-105 duration-200' key={index}>
                <img className='w-full object-cover h-[200px] rounded-t-lg' src={image} alt={name}/>
                <div className='flex justify-between px-2 py-4 '>
                    <p className='font-bold'>{name}</p>
                    <p><span className='bg-orange-500 text-white p-1 rounded-full'>{price}</span></p>
                </div>
            </div>
        ))
  }
</div>
    </div>
  )
}

export default Food