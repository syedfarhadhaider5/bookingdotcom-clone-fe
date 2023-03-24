import React from 'react'

export default function HotelList() {
  return (
    <>
        <div className="grid grid-cols-4 mt-4 gap-4 mb-4">
              <div className='col-span-1'>
                <div className='flex items-start flex-col'>
                    <img src="https://cf.bstatic.com/xdata/images/hotel/square600/421853145.webp?k=140bfc6c54ee753d4a748ee7b5a86c00c988e6fc9bb340c87172ead66a3ea9d5&o=&s=1" className='rounded-md hotels' alt="" />
                    <h2 className='font-bold pt-2'>6 Continents Apartments by Prague Residences</h2>
                    <p className='pt-2'>Prague 1, Czech Republic, Prague
Starting from

                    <span className='font-bold pl-2'>PKR 21,437</span>
                    </p>
                    <div className='flex items-center mt-2'>
                          <span className='text-white bg-[#003b95] rating-num '>9.0</span>
                          <p className='text-sm	pl-2'>Very Good . 999 reviews</p>
                    </div>
                </div>
              </div>
              <div className='col-span-1'>
              <div className='flex items-start flex-col'>
                    <img src="https://cf.bstatic.com/xdata/images/hotel/square600/87428762.webp?k=9a065fcd92168145d8c8358701662c76793535597b678efc8f6921c8e3c188e6&o=&s=1" className='rounded-md hotels' alt="" />
                    <h2 className='font-bold pt-2'>7Seasons Apartments Budapest</h2>
                    <p className='pt-2'>06. Terézváros, Hungary, Budapest
                    Starting from
                    <span className='font-bold pl-2'>PKR 29,937</span>
                    </p>
                    <div className='flex items-center mt-2'>
                          <span className='text-white bg-[#003b95] rating-num '>9.0</span>
                          <p className='text-sm	pl-2'>Good . 7,121 reviews</p>
                    </div>
                </div>
              </div>
              <div className='col-span-1'>
                <div className='flex items-start flex-col'>
                    <img src="https://cf.bstatic.com/xdata/images/hotel/square600/352170812.webp?k=75ffc5f9eb3f3cc394b901714c1544757b05849dbbdf30e4fc8c6df53931c131&o=&s=1" className='rounded-md hotels' alt="" />
                    <h2 className='font-bold pt-2'>numa I Vita Apartments</h2>
                    <p className='pt-2'>Fortezza da Basso, Italy, Florence
Starting from

                    <span className='font-bold pl-2'>PKR 41,539</span>
                    </p>
                    <div className='flex items-center mt-2'>
                          <span className='text-white bg-[#003b95] rating-num '>9.3</span>
                          <p className='text-sm	pl-2'>Superb . 7,121 reviews</p>
                    </div>
                </div>
              </div>
              <div className='col-span-1'>
              <div className='flex items-start flex-col'>
                    <img src="https://cf.bstatic.com/xdata/images/hotel/square600/95058973.webp?k=979587fd2ac8f7777a34758264d557eef57d0e98e58bdaeb121f5b968a20f810&o=&s=1" className='rounded-md hotels' alt="" />
                    <h2 className='font-bold pt-2'>Oriente Palace Apartments</h2>
                    <p className='pt-2'>Centro, Spain, Madrid
Starting from

                    <span className='font-bold pl-2'>PKR 30,664</span>
                    </p>
                    <div className='flex items-center mt-2'>
                          <span className='text-white bg-[#003b95] rating-num '>8.9</span>
                          <p className='text-sm	pl-2'>Good . 7,121 reviews</p>
                    </div>
                </div>
              </div>
           </div>
    </>
  )
}
