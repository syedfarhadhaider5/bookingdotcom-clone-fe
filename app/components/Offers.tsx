import React from 'react'

export default function Offers() {
  return (
    <>
    <br></br><br></br><br></br>
          <div className="mt-15  font-bold text-3xl">Offers</div>
          <p className="s">Promotions, deals and special offers for you</p>
    <div className="grid grid-cols-2 pt-10 gap-4">
    <div className="col-span-1">
      <div className="bg-[url('https://q-xx.bstatic.com/xdata/images/xphoto/714x300/203211874.jpeg?k=0429a0e73fac49a3b10af7a4fbad11fa8caa27f0a0934e56a937257bfc6f7ce7&o=')] offers-image rounded-md">
        <div className="flex flex-col pt-4 pl-3 pb-4 text-white">
          <h3 className='font-bold'>The great getaway, your way</h3>
          <p className='paragrap pt-2 pb-2 w-1/2'>Save at least 15% on stays worldwide, from relaxing retreats to off-grid adventures</p>
          <button className="bg-[#5593df] text-white px-4 py-1 rounded-sm w-1/2">Find Getaway Deals</button>
        </div>
      </div>
    </div>
    <div className="col-span-1">
    <div className="bg-[url('https://q-xx.bstatic.com/xdata/images/xphoto/714x300/182431478.jpeg?k=fcbb6d5552a1d4ff338978206c449077ab8ad696050cfd7e4edef1ddc11225cc&o=')] offers-image rounded-md">
        <div className="flex flex-col pt-4 pl-3 pb-4 text-white">
          <h3 className='font-bold'>New year, new adventures</h3>
          <p className='paragrap pt-2 pb-2 w-1/2'>Save 15% or more when you book and stay before 31 March 2023</p>
          <button className="bg-[#5593df] text-white px-4 py-1 rounded-sm w-1/2">Find Early 2023 Deals</button>
        </div>
      </div>
    </div>
  </div>
  </>
  )
}
