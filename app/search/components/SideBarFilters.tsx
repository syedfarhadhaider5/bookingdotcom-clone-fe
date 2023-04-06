
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
  export type hotelMeals = {
    hotel_id: number
    meal_id: number
  }
  export type hotelFacilities = {
    hotel_id: number
    facility_id: number
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
    meals: Meals[],
    hotelMeals: hotelMeals[],
    hotelFacilities: hotelFacilities[]
  }
  const getHotels = async (slug :any) =>{
    const response = await fetch(`${process.env.APP_URL}/api/web/version1/hotel/find-by-name-or-country?expand=hotelImages,hotelMeals,hotelRooms,hotelStars,hotelViews,meals,facilities,hotelPrices,hotelMeals,hotelFacilities&q=${slug}`);
    const hotel: Hotel[]  = await response.json();
    return hotel;
  }
export default async function SideBarFilters({ slug }: { slug: string }) {
    const hotels = await getHotels(slug);
    
    const mealNames = ['Coffee','Fruits','Kid-friendly buffet','Kid meals','Special diet menus (on request)','Snack bar','Bar','Restaurant','Tea/Coffee maker']
    const mealCounts = mealNames.map((mealName) => {
      const meals = hotels.flatMap((hotel) => {
        return hotel.meals.filter((meal) => meal.name === mealName);
      });
      const mealIds = meals.map((meal) => meal.id); // get an array of meal IDs for the current meal name
      return {
        count: meals.length,
        mealIds: mealIds // add the meal ID array to the returned object
      };
    });

    const FacilityNames = ['Private bathroom','Toilet paper','Alarm clock',' Dressing room','City view','Sea view','Outdoor furniture','Electric kettle',' Seating Area','Flat-screen TV','TV','Free WiFi',' Parking garage','Currency exchange','24-hour front desk','Daily housekeeping','Laundry','24-hour security','Higher level toilet','Pool is on rooftop',' Kids pool','English','Arabic','Urdu']
    const FacilityCounts = FacilityNames.map((FacilityName) => {
      const facilities = hotels.flatMap((hotel) => {
        return hotel.facilities.filter((facility) => facility.name === FacilityName);
      });
      const facilityIds = facilities.map((facility) => facility.id); // get an array of meal IDs for the current meal name
      return {
        Facilitycount: facilities.length,
        facilityIds: facilityIds // add the meal ID array to the returned object
      };
    });
   

  return (
      <>
        <div className='flex flex-col filters mt-8 rounded-md'>
          <div className='font-bold'>Filter by:</div>
          <div className='filter-heading'></div>
          <div className="text-sm pt-2 font-semibold">Meals</div>
          {
            mealNames.map((mealName, index) => (
              <>
                {
                  mealCounts[index].count !== 0 ? (
                    <div className='flex justify-between mt-2'>
                      <div className='flex items-center'>
                        <input type="checkbox"  className='form-checkbox text-indigo-600 h-5 w-5' name="" id="" value={mealCounts[index].mealIds[0]} />
                        <span className="ml-2 text-sm text-gray-700">{mealName}</span>
                      </div>
                      <div className='text-sm text-gray-700'>{mealCounts[index].count}</div>
                    </div>
                  ) : (
                    ''
                  )
                }
              </>
            ))
          }
        </div>
        {/* facilities filter */}
        <div className='flex flex-col filters mt-8 rounded-md'>
          <div className='font-bold'>Filter by:</div>
          <div className='filter-heading'></div>
          <div className="text-sm pt-2 font-semibold">Facilities</div>
          {
            FacilityNames.map((facilityName, index) => (
              <>
                {
                  FacilityCounts[index].Facilitycount !== 0 ? (
                    <div className='flex justify-between mt-2'>
                      <div className='flex items-center'>
                        <input type="checkbox" className='form-checkbox text-indigo-600 h-5 w-5' name="" id="" value={FacilityCounts[index].facilityIds[0]} />
                        <span className="ml-2 text-sm text-gray-700">{facilityName}</span>
                      </div>
                      <div className='text-sm text-gray-700'>{FacilityCounts[index].Facilitycount}</div>
                    </div>
                  ) : (
                    ''
                  )
                }
              </>
            ))
          }
        </div>
      </>
  )
}
