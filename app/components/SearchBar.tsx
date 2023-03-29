"use client";
import { useEffect, useState } from "react";
import { useRouter } from 'next/navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBed, faPlane, faCar, faMagnet, faTaxi, faLocationDot, faHotel } from '@fortawesome/free-solid-svg-icons'
import '@fortawesome/fontawesome-svg-core/styles.css'
interface Hotel {
  id: number,
  country: string,
  name: string
}

export default function SearchBar() {
  const [inputValue, setInputValue] = useState('');
  const [NotFound, setNotFound] = useState('');
  const [HotelId, setHotelId] = useState(0);
  const [Name, setName] = useState('');
  const [Country, setCountry] = useState('');
  const [suggestionsList, setSuggestionsList] = useState<Hotel[]>([]);

  const router = useRouter();
  // const { slug } = router.query
  // console.log(slug);

  const handleChange = async (event: any) => {
    setInputValue(event.target.value);

    if (inputValue.length === 3) {
      const response = await fetch(`http://localhost/bookingdotcom-clone/api/web/version1/hotel/search?q=${inputValue}`);
      const data = await response.json();
      console.log(data)

      if (!data.error) {
        setSuggestionsList(data);
        setNotFound('');
      } else {
        setNotFound(data.error);
        setSuggestionsList([]);  
      }
    }
  };

  const searchedValue = (country: any, name: any, id: any) => {
        setCountry(country);
        setName(name);
        setHotelId(id);
        setInputValue(country + name);
        setSuggestionsList([]);
  }

  const formatSlug = (slug: any) => {
    return slug
      .replace(/-/g, ' ')
      .toLowerCase()
      .split(' ')
      .map((word :any) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };
  // console.log(formatSlug('islamabad-marriott-hotel'))
  const handleRedirect = async () => {
    if (HotelId === 0) {
      return;
    }

    const response = await fetch(`http://localhost/bookingdotcom-clone/api/web/version1/hotels/${HotelId}`);
    const SingleHotel = await response.json();
    console.log(SingleHotel + 22);
    if (Name !== undefined) {
      router.push(`search/${SingleHotel.name_slug}`);
      setName('')
    } else {
      if (Country !== undefined) {
        router.push(`search/${SingleHotel.country_slug}`);
        setCountry('');
      }
    }
  }

  return (
    <>
      <div className='flex pt-10 search-wrapper'>
        <input 
          type="text" 
          className='search-input-1 focus:outline-none'
          placeholder='Where are you going?'
          value={inputValue.replace(/undefined/g, "")}
          onChange={handleChange}
        />
        <input type="text" className='search-input-2 focus:outline-none' placeholder='Check-in date - Check-out date?' />
        <button className="search-button-1 bg-white text-white  rounded-sm" onClick={() => handleRedirect()}>
          Search
        </button>
      </div>
      {
        suggestionsList.length > 0 ?
        <div className="suggestions-container" >
          {suggestionsList.map(hotel => (
            <div
              className="suggestion"
              key={hotel.id}
              onClick={() => searchedValue(hotel.country, hotel.name, hotel.id)}
            >
              {hotel.country !== undefined ? 
                <>
                  <FontAwesomeIcon icon={faLocationDot} size="1x" />
                  &nbsp;&nbsp;{hotel.country}
                </>
              : ''}
              {hotel.name !== undefined ? 
                <>
                  <FontAwesomeIcon icon={faHotel} />
                  &nbsp;&nbsp;{hotel.name}
                </>
              : ''}
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