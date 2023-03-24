import React from 'react'

export default function SearchBar() {
  return (
    <>
         <div className='flex pt-10 search-wrapper'>
                   <input type="text" className='search-input-1 focus:outline-none' placeholder='Where are you going?' />
                   <input type="text" className='search-input-2 focus:outline-none' placeholder='Check-in date - Check-out date?' />
                   <button className="search-button-1 bg-white text-white  rounded-sm">Search</button>
        </div>
    </>
  )
}
