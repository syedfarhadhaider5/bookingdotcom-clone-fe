import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBed, faPlane, faCar, faMagnet, faTaxi, faSearch, faCalendarDays,faStar} from '@fortawesome/free-solid-svg-icons'
import '@fortawesome/fontawesome-svg-core/styles.css'

export default function SidebarSearch() {
  return (
    <div className="side-search rounded-md bg-[#ffb700] mt-8">
                                <h2 className='text-xl'>Search</h2>
                                <div>
                                    <label className='text-xs'>Destination/property name:</label>
                                    <div className='flex items-center'>
                                        <FontAwesomeIcon icon={faSearch} className="side-search-input-icon" />
                                        <input type="text" className='side-search-input focus:outline-none' />
                                    </div>
                                </div>
                                <div className='pt-2'>
                                    <label className='text-xs'>Check-in date</label>
                                    <div className='flex items-center '>
                                        <FontAwesomeIcon icon={faCalendarDays} className="side-search-input-icon " />
                                        <input type="text" className='side-search-input focus:outline-none' />
                                    </div>
                                </div>
                                <div  className='pt-2'>
                                    <label className='text-xs'>Check-out date</label>
                                    <div className='flex items-center'>
                                        <FontAwesomeIcon icon={faCalendarDays} className="side-search-input-icon" />
                                        <input type="text" className='side-search-input focus:outline-none' />
                                    </div>
                                </div>
                                <div className='pt-4'>
                                <button className="bg-[#003b95] text-white px-4 w-full h-10 py-1 rounded-sm">Search</button>

                                </div>
                            </div>
  )
}
