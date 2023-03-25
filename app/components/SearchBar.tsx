"use client";
import { useEffect, useState } from "react";
import { useRouter } from 'next/navigation'

// export type SearchHotel = {
//   name: string,
//   country: string;
// }
// interface Props {
//   hotel: SearchHotel
// }
interface Hotel {
  id: number,
  country: string,
  name: string
}

export default function SearchBar() {
  const [inputValue, setInputValue] = useState('');
  const [NotFound, setNotFound] = useState('');
  const [HotelId, setHotelId] = useState(0);
  const [suggestionsList, setSuggestionsList] = useState<Hotel[]>([]);
  
  const router = useRouter()
  const handleChange = async (event :any) => {
    setInputValue(event.target.value);
    if(inputValue.length === 3){
    const response = await fetch(`http://localhost/bookingdotcom-clone/api/web/version1/hotel/search?q=${inputValue}`)
    const data = await response.json()
    console.log(data.error)
    if(!data.error){
      setSuggestionsList(data)
      setNotFound('');
    }else{
      setNotFound(data.error)
       setSuggestionsList([])  
    }
    }
  };
  const searchedValue = (country: any, name: any, id: any) =>{
    setHotelId(id)
    if(country != null || name != null)
    
     country === null ? '' : country
     name === null ? '' : name
    setInputValue(country + name);
    setSuggestionsList([]);
  }
  const handleRedirect = () =>{
    if(HotelId === 0){
      return;
    }
    router.push(`search/${HotelId}`);
  }
//   try{
//     useEffect(() => {
//       async function fetchData() {
       
//       }
//       fetchData()
//     }, [])
//   }catch (error) {
// console.error('Fetch failed:', error)
// }
  

  
 
  return (
    <>
         <div className='flex pt-10 search-wrapper'>
                   <input 
                        type="text" 
                        className='search-input-1 focus:outline-none'
                        placeholder='Where are you going?'
                        value={inputValue.replace(/null/g, "")}
                        onChange={handleChange}
                         />
                        <input type="text" className='search-input-2 focus:outline-none' placeholder='Check-in date - Check-out date?' />
                        <button className="search-button-1 bg-white text-white  rounded-sm" onClick={() => handleRedirect()}
                        >Search</button>
        </div>
        {
        suggestionsList.length > 0 ?
        <div className="suggestions-container" >
              {suggestionsList.map(hotel => (
                  <div
                  className="suggestion"
                  onClick={() => searchedValue(hotel.country, hotel.name, hotel.id)}
                >
                  {hotel.country}
                  {hotel.name}
                </div>
              ))}
        </div>
        : ''
      }
      {
         suggestionsList.length  === 0 && inputValue !== '' &&  NotFound !== '' ?
      
         inputValue.length > 3 ?
              <div className="suggestions-container">
              <div
                    className="suggestion"
                    // onClick={() => handleSuggestionClick(suggestion)}
                  >
                      {NotFound}
                </div>
              </div>
              : ''
              :
              ''
      }

    </>
  )
}
