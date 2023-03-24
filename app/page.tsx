import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.css'
import Header from './components/Header'
import Title from './components/Title'
import SearchBar from './components/SearchBar'
import Offers from './components/Offers'
import City from './components/City'
import HotelList from './components/HotelList'
import Footer from './components/Footer'
import { type } from 'os'
const inter = Inter({ subsets: ['latin'] })

export type HotelImages = {
  id: number;
  image_path: string;
}
export type HotelPrices = {
  id: number;
  amount: number;
}
export type Hotel = {
  id: number;
  name: string,
  country: string;
  hotelImages: HotelImages[],
  hotelPrices: HotelPrices[]
}
const getHotels = async () =>{
  const response = await fetch('http://localhost/bookingdotcom-clone/api/web/version1/hotel/?expand=hotelImages,hotelMeals,hotelRooms,hotelStars,hotelViews,meals,facilities,hotelPrices');
  const hotel: Hotel[]  = await response.json();
  return hotel;
}
export default async function  Home() {
  const hotels = await getHotels();
  return (
    <>
      <div className="grid grid-cols-5 gap-4">
          <div className='col-span-5'>
            <div className='bg-[#003b95] vertical-height w-full relative'>
                <div className="container mx-auto top-container">
                  <div className='flex flex-col'>
                      {/* NAV */}
                      <Header />
                      {/* NAV */}

                     {/* Title */}
                      <Title />
                     {/* Title */}
                  </div>
                   {/* Search bar */}
                     <SearchBar />
                   {/* <input type="text" class="form-input border-2 border-gray-300 px-4 py-2 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="Enter your name"> */}

                    {/* Search bar  */}
                </div>
            </div>
          </div>    
      </div>
      <div className="container mx-auto top-container">
          {/* Offers */}
           <Offers />
          {/* Offers */}
          {/* City */}
          <City />
           {/* City */}
           {/* Hotels */}
           <div className="grid grid-cols-4 mt-4 gap-4 mb-4">
            {
              hotels.map(hotel => (
                <HotelList hotel={hotel} />
              ))
            }
           </div>
           {/* Hotels */}
           {/* Footer */}
            <Footer />
           {/* Footer */}
      </div>
      </>
  )
}
