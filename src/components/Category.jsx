import React from 'react'
import {categories} from "./data/data.js"

function Category() {
  return (
    <div className='m-auto px-4 max-w-[1640px] p-12'>
        <h1 className='text-orange-500 font-bold text-4xl text-center'>Top Rated Menu Items</h1>
        <div className='grid grid-cols-2 md:grid-cols-4 gap-6 py-6'>
{
  categories.map((item,index)=>(
    <div className='bg-gray-100 rounded p-4 flex justify-between items-center' key={index}>
      <h2 className='font-bold md:text-xl'>{item.name}</h2>
      <img className='w-20' src={item.image} alt={item.name} />
    </div>
  
  ))
}
        </div>
    </div>
  )
}

export default Category