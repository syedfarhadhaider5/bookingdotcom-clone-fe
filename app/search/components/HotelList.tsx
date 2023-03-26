import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBed, faPlane, faCar, faMagnet, faTaxi, faSearch, faCalendarDays, faStar } from '@fortawesome/free-solid-svg-icons'
import '@fortawesome/fontawesome-svg-core/styles.css'

export type HotelImages = {
    id: number;
    image_path: string;
  }
  export type Facilities = {
    id: number;
    name: string;
  }
  export type Meals = {
    id: number;
    name: string;
  }
  export type hotelStars = {
    id: number;
    rank: number;
  }
  export type hotelRooms = {
    id: number;
    total: number;
  }
  export type HotelPrices = {
    id: number;
    amount: number;
  }
  export type Hotel = {
    id: number;
    name: string,
    country: string;
    address: string
    hotelImages: HotelImages[],
    hotelPrices: HotelPrices[],
    hotelRooms: hotelRooms[],
    hotelStars: hotelStars[],
    facilities: Facilities[],
    meals: Meals[]
  }
  const getHotels = async (slug :any) =>{
    const response = await fetch(`${process.env.APP_URL}/api/web/version1/hotel/find-by-name-or-country?expand=hotelImages,hotelMeals,hotelRooms,hotelStars,hotelViews,meals,facilities,hotelPrices&q=${slug}`);
    const hotel: Hotel[]  = await response.json();
    return hotel;
  }
  
export default async function HotelList({ slug }: { slug: string }) {
    const hotels = await getHotels(slug);

  return (
    <>
    {
        hotels.map(hotel => (
            <div className='mt-8 mb-8 w-full border-solid border-2 border-inherit rounded-md hotel-list'>
            <div className='flex justify-between'>
              <div className='flex'>
                <img className='rounded-md' src={hotel.hotelImages[0]?.image_path} alt="" width="200px" height="200px" />
                <div className='d-flex flex-col pl-4'>
                  <div className="flex items-center">
                    <a href="" className='text-[#006de4] text-xl font-bold'>{hotel.name}</a>
                    <div className='pl-2'>
                        {
                            hotel.hotelStars[0]?.rank === 1 ?
                            <>
                                <FontAwesomeIcon icon={faStar} className="text-[#ffb700]" />
                            </>
                            : ''
                        }
                        {
                             hotel.hotelStars[0]?.rank === 2 ?
                             <>
                                 <FontAwesomeIcon icon={faStar} className="text-[#ffb700]" />
                                 <FontAwesomeIcon icon={faStar} className="text-[#ffb700]" />
                             </>
                             : ''
                        }
                        {
                             hotel.hotelStars[0]?.rank === 3 ?
                             <>
                                 <FontAwesomeIcon icon={faStar} className="text-[#ffb700]" />
                                 <FontAwesomeIcon icon={faStar} className="text-[#ffb700]" />
                                 <FontAwesomeIcon icon={faStar} className="text-[#ffb700]" />
                             </>
                             : ''
                        }
                        {
                             hotel.hotelStars[0]?.rank === 4 ?
                             <>
                                 <FontAwesomeIcon icon={faStar} className="text-[#ffb700]" />
                                 <FontAwesomeIcon icon={faStar} className="text-[#ffb700]" />
                                 <FontAwesomeIcon icon={faStar} className="text-[#ffb700]" />
                                 <FontAwesomeIcon icon={faStar} className="text-[#ffb700]" />
                             </>
                             : ''
                        }
                          {
                             hotel.hotelStars[0]?.rank === 5 ?
                             <>
                                 <FontAwesomeIcon icon={faStar} className="text-[#ffb700]" />
                                 <FontAwesomeIcon icon={faStar} className="text-[#ffb700]" />
                                 <FontAwesomeIcon icon={faStar} className="text-[#ffb700]" />
                                 <FontAwesomeIcon icon={faStar} className="text-[#ffb700]" />
                                 <FontAwesomeIcon icon={faStar} className="text-[#ffb700]" />
                             </>
                             : ''
                        }
                    </div>
                  </div>
                  <div className='flex'>
                    <a href="" className='text-[#006de4] text-sm underline'>{hotel?.country}</a>
                    <a href="" className='text-[#006de4] text-sm underline pl-2'>Show on map</a>
                  </div>
                  <div className='pt-2'>
                    <p className='text-xs'>Total Rooms - {hotel.hotelRooms[0]?.total}</p>
                  </div>
                  <div className='pt-2'>
                    <p className='text-xs'>Total Meals - {hotel.meals.length}</p>
                  </div>
                  <div className='pt-2'>
                    <p className='text-xs'>Total Facilities - {hotel.facilities.length}</p>
                  </div>
                  <div className='pt-2'>
                    <p className='text-xs'>{hotel.address}</p>
                  </div>
                </div>
              </div>
              <div className='flex flex-col justify-between'>
                <div className='flex flex-col items-end'>
                  <div className='flex items-center'>
                    <div className='flex flex-col pr-2'>
                      <span className='text-sm'>Exceptional</span>
                      <span className='text-sm'>Good</span>
                    </div>
                    <div className='text-white bg-[#003b95] rating-num rounded-md '>9.0</div>
                  </div>
                  <span className="text-[#006de4] text-md font-semibold">Comformt 8.5</span>
                </div>
                <div className='flex flex-col items-end'>
                  <div className='text-1xl not-italic'>PKR {hotel.hotelPrices[0]?.amount !== 0 ? hotel.hotelPrices[0]?.amount : 'N/A'}</div>
                  <button className="bg-[#003b95] text-white pt-0 pb-0 w-full h-8 py-1 rounded-md text-sm mt-2">See availability</button>
                </div>
              </div>
            </div>
        </div>
        ))
    }
    </>
    )
}
