import { Hotel } from "../page";
import { HotelImages } from "../page";
import Link from 'next/link';

interface Props {
      hotel: Hotel
    }
export default function HotelList({hotel}: Props) {
     // console.log(hotel.hotelImages[0]?.id)
  return (
    <>
              <div className='col-span-1'>
                  <Link href={`hotel/${hotel.id}`}>
                        <div className='flex items-start flex-col mt-4 mbb-4'>
                              <img src={hotel.hotelImages[0]?.image_path} className='rounded-md hotels' alt="" />
                              <h2 className='font-bold pt-2'>{hotel.name}</h2>
                              <p className='pt-2'>{hotel?.country.toUpperCase()}
                              <br></br>
                              Starting from
                              <span className='font-bold pl-2'>PKR {hotel.hotelPrices[0]?.amount !== 0 ? hotel.hotelPrices[0]?.amount : "N/A"}</span>
                              </p>
                              <div className='flex items-center mt-2'>
                                    <span className='text-white bg-[#003b95] rating-num '>9.0</span>
                                    <p className='text-sm	pl-2'>Very Good . 999 reviews</p>
                              </div>
                        </div>
                </Link>
              </div>
              
             
    </>
  )
}
