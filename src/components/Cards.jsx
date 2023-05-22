import React from 'react'

function Cards() {
  return (
    <div className='max-w-[1640] mx-auto p-4 py-12 grid  md:grid-cols-3 gap-6 '>
        {/* card */}
        <div className='rounded-xl relative'>
            
            <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
<p className='font-bold text-2xl px-2 pt-4 '>Sun's Out ,BOGO's Out</p>
<p className='px-2'>through 8/26</p>
<button className='border-white bg-white text-black mx-2 absolute bottom-4 '>Order Now</button>
            </div>
            <img className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl' src="https://images.pexels.com/photos/1624487/pexels-photo-1624487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
        </div>
        <div className='rounded-xl relative'>
            
            <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
<p className='font-bold text-2xl px-2 pt-4 '>Our New Masterpiece</p>
<p className='px-2'>Added Daily</p>
<button className='border-white bg-white text-black mx-2 absolute bottom-4 '>Order Now</button>
            </div>
            <img className='max-h-[160px] md:max-h-[200px] w-full h-full object-cover rounded-xl' src="https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
        </div>



        <div className='rounded-xl relative'>
            
            <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
<p className='font-bold text-2xl px-2 pt-4 '>Finest Desert</p>
<p className='px-2'>Tasty Treats</p>
<button className='border-white bg-white text-black mx-2 absolute bottom-4 '>Order Now</button>
            </div>
            <img className='max-h-[160px] md:max-h-[200px] w-full h-full object-cover rounded-xl' src="https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
        </div>






    </div>
  )
}

export default Cards