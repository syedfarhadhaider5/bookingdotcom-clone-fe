import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faBed, faPlane, faCar, faMagnet, faTaxi, faSearch, faCalendarDays,faStar} from '@fortawesome/free-solid-svg-icons'
import '@fortawesome/fontawesome-svg-core/styles.css'
import Header from '../components/Header'
export default function page() {
  return (
    <>
        <div className="grid grid-cols-1">
            <div className='col-span-1'>
                <div className='bg-[#003b95] vertical-height-search w-full'>
                    <div className="container mx-auto top-container">
                        {/* NAV */}
                        <Header />
                     {/* NAV */}
                    </div>
                </div>
            </div>
        </div>
        <div className="container mx-auto top-container">
            <div className="grid grid-cols-4 gap-4">
                <div className='col-span-1'>
                    {/* Sidebar */}
                        {/* SideSearch */}
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
                        {/* SideSearch */}
                        {/* Sidebar Filters */}
                            <div className='flex flex-col filters mt-8 rounded-md'>
                                <div className='font-bold'>Filter by:</div>
                                <div className='filter-heading'></div>
                                <div className="text-sm pt-2 font-semibold">Popular filters</div>
                                <div className='flex justify-between mt-2'>
                                    <div className='flex items-center'>
                                        <input type="checkbox" className='form-checkbox text-indigo-600 h-5 w-5' name="" id="" />
                                        <span className="ml-2 text-sm text-gray-700">Breakfast</span>
                                    </div>
                                    <div className='text-sm text-gray-700'>8</div>
                                </div>
                                <div className='flex justify-between mt-2'>
                                    <div className='flex items-center'>
                                        <input type="checkbox" className='form-checkbox text-indigo-600 h-5 w-5' name="" id="" />
                                        <span className="ml-2 text-sm text-gray-700">Lunch</span>
                                    </div>
                                    <div className='text-sm text-gray-700'>5</div>
                                </div>
                                <div className='flex justify-between mt-2'>
                                    <div className='flex items-center'>
                                        <input type="checkbox" className='form-checkbox text-indigo-600 h-5 w-5' name="" id="" />
                                        <span className="ml-2 text-sm text-gray-700">Dinner</span>
                                    </div>
                                    <div className='text-sm text-gray-700'>2</div>
                                </div>
                                <div className='flex justify-between mt-2'>
                                    <div className='flex items-center'>
                                        <input type="checkbox" className='form-checkbox text-indigo-600 h-5 w-5' name="" id="" />
                                        <span className="ml-2 text-sm text-gray-700">Internet</span>
                                    </div>
                                    <div className='text-sm text-gray-700'>1</div>
                                </div>
                            </div>
                        {/* Sidebar Filters */}
                    {/* Sidebar */}
                </div>
                <div className='col-span-3'>
                    {/* RightBar */}
                    {/* Hotels List */}
                    <div className='mt-8 mb-8 w-full border-solid border-2 border-inherit rounded-md hotel-list'>
                       <div className='flex justify-between'>
                            <div className='flex'>
                                    <img className='rounded-md' src="https://cf.bstatic.com/xdata/images/hotel/square600/353436691.webp?k=cd040cc0d337aeb532f50e9bd61805b139104a26d9eab06e46a143d12df5950a&o=&s=1" alt="" width={200} height={200} />
                                    <div className='d-flex flex-col pl-4'>
                                        <div className="flex items-center">
                                                <a href="" className='text-[#006de4] text-2xl font-bold'>ibis Styles Dubai Deira</a>
                                                <div className='pl-2'>
                                                    <FontAwesomeIcon icon={faStar} className="text-[#ffb700]" />
                                                    <FontAwesomeIcon icon={faStar} className="text-[#ffb700]" />
                                                    <FontAwesomeIcon icon={faStar} className="text-[#ffb700]" />
                                                    <FontAwesomeIcon icon={faStar} className="text-[#ffb700]" />
                                                </div>
                                        </div>
                                        <div className='flex'>
                                            <a href="" className='text-[#006de4] text-sm underline'>Dubai</a>
                                            <a href="" className='text-[#006de4] text-sm underline pl-2'>Show on map</a>
                                        </div>
                                        <div className='pt-2'>
                                            <p className='text-xs'>Total Rooms - 22</p>
                                        </div>
                                        <div className='pt-2'>
                                            <p className='text-xs'>Total Meals - 1</p>
                                        </div>
                                        <div className='pt-2'>
                                            <p className='text-xs'>Total Facilities - 23</p>
                                        </div>
                                        <div className='pt-2'>
                                            <p className='text-xs'>Ramada by Wyndham Lahore Gulberg II, Block N Gulberg ll، Lahore, Pakistan</p>
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
                                    <div className='text-1xl not-italic'>PKR 105,129</div>
                                    <button className="bg-[#003b95] text-white pt-0 pb-0 w-full h-8 py-1 rounded-md text-sm mt-2">See availability</button>

                                </div>
                            </div>
                       </div>
                    </div>
                    <div className='mt-8 mb-8 w-full border-solid border-2 border-inherit rounded-md hotel-list'>
                       <div className='flex justify-between'>
                            <div className='flex'>
                                    <img className='rounded-md' src="https://cf.bstatic.com/xdata/images/hotel/square600/353436691.webp?k=cd040cc0d337aeb532f50e9bd61805b139104a26d9eab06e46a143d12df5950a&o=&s=1" alt="" width={200} height={200} />
                                    <div className='d-flex flex-col pl-4'>
                                        <div className="flex items-center">
                                                <a href="" className='text-[#006de4] text-2xl font-bold'>ibis Styles Dubai Deira</a>
                                                <div className='pl-2'>
                                                    <FontAwesomeIcon icon={faStar} className="text-[#ffb700]" />
                                                    <FontAwesomeIcon icon={faStar} className="text-[#ffb700]" />
                                                    <FontAwesomeIcon icon={faStar} className="text-[#ffb700]" />
                                                    <FontAwesomeIcon icon={faStar} className="text-[#ffb700]" />
                                                </div>
                                        </div>
                                        <div className='flex'>
                                            <a href="" className='text-[#006de4] text-sm underline'>Dubai</a>
                                            <a href="" className='text-[#006de4] text-sm underline pl-2'>Show on map</a>
                                        </div>
                                        <div className='pt-2'>
                                            <p className='text-xs'>Total Rooms - 22</p>
                                        </div>
                                        <div className='pt-2'>
                                            <p className='text-xs'>Total Meals - 1</p>
                                        </div>
                                        <div className='pt-2'>
                                            <p className='text-xs'>Total Facilities - 23</p>
                                        </div>
                                        <div className='pt-2'>
                                            <p className='text-xs'>Ramada by Wyndham Lahore Gulberg II, Block N Gulberg ll، Lahore, Pakistan</p>
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
                                    <div className='text-1xl not-italic'>PKR 105,129</div>
                                    <button className="bg-[#003b95] text-white pt-0 pb-0 w-full h-8 py-1 rounded-md text-sm mt-2">See availability</button>

                                </div>
                            </div>
                       </div>
                    </div>
                    <div className='mt-8 mb-8 w-full border-solid border-2 border-inherit rounded-md hotel-list'>
                       <div className='flex justify-between'>
                            <div className='flex'>
                                    <img className='rounded-md' src="https://cf.bstatic.com/xdata/images/hotel/square600/353436691.webp?k=cd040cc0d337aeb532f50e9bd61805b139104a26d9eab06e46a143d12df5950a&o=&s=1" alt="" width={200} height={200} />
                                    <div className='d-flex flex-col pl-4'>
                                        <div className="flex items-center">
                                                <a href="" className='text-[#006de4] text-2xl font-bold'>ibis Styles Dubai Deira</a>
                                                <div className='pl-2'>
                                                    <FontAwesomeIcon icon={faStar} className="text-[#ffb700]" />
                                                    <FontAwesomeIcon icon={faStar} className="text-[#ffb700]" />
                                                    <FontAwesomeIcon icon={faStar} className="text-[#ffb700]" />
                                                    <FontAwesomeIcon icon={faStar} className="text-[#ffb700]" />
                                                </div>
                                        </div>
                                        <div className='flex'>
                                            <a href="" className='text-[#006de4] text-sm underline'>Dubai</a>
                                            <a href="" className='text-[#006de4] text-sm underline pl-2'>Show on map</a>
                                        </div>
                                        <div className='pt-2'>
                                            <p className='text-xs'>Total Rooms - 22</p>
                                        </div>
                                        <div className='pt-2'>
                                            <p className='text-xs'>Total Meals - 1</p>
                                        </div>
                                        <div className='pt-2'>
                                            <p className='text-xs'>Total Facilities - 23</p>
                                        </div>
                                        <div className='pt-2'>
                                            <p className='text-xs'>Ramada by Wyndham Lahore Gulberg II, Block N Gulberg ll، Lahore, Pakistan</p>
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
                                    <div className='text-1xl not-italic'>PKR 105,129</div>
                                    <button className="bg-[#003b95] text-white pt-0 pb-0 w-full h-8 py-1 rounded-md text-sm mt-2">See availability</button>

                                </div>
                            </div>
                       </div>
                    </div>
                    <div className='mt-8 mb-8 w-full border-solid border-2 border-inherit rounded-md hotel-list'>
                       <div className='flex justify-between'>
                            <div className='flex'>
                                    <img className='rounded-md' src="https://cf.bstatic.com/xdata/images/hotel/square600/353436691.webp?k=cd040cc0d337aeb532f50e9bd61805b139104a26d9eab06e46a143d12df5950a&o=&s=1" alt="" width={200} height={200} />
                                    <div className='d-flex flex-col pl-4'>
                                        <div className="flex items-center">
                                                <a href="" className='text-[#006de4] text-2xl font-bold'>ibis Styles Dubai Deira</a>
                                                <div className='pl-2'>
                                                    <FontAwesomeIcon icon={faStar} className="text-[#ffb700]" />
                                                    <FontAwesomeIcon icon={faStar} className="text-[#ffb700]" />
                                                    <FontAwesomeIcon icon={faStar} className="text-[#ffb700]" />
                                                    <FontAwesomeIcon icon={faStar} className="text-[#ffb700]" />
                                                </div>
                                        </div>
                                        <div className='flex'>
                                            <a href="" className='text-[#006de4] text-sm underline'>Dubai</a>
                                            <a href="" className='text-[#006de4] text-sm underline pl-2'>Show on map</a>
                                        </div>
                                        <div className='pt-2'>
                                            <p className='text-xs'>Total Rooms - 22</p>
                                        </div>
                                        <div className='pt-2'>
                                            <p className='text-xs'>Total Meals - 1</p>
                                        </div>
                                        <div className='pt-2'>
                                            <p className='text-xs'>Total Facilities - 23</p>
                                        </div>
                                        <div className='pt-2'>
                                            <p className='text-xs'>Ramada by Wyndham Lahore Gulberg II, Block N Gulberg ll، Lahore, Pakistan</p>
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
                                    <div className='text-1xl not-italic'>PKR 105,129</div>
                                    <button className="bg-[#003b95] text-white pt-0 pb-0 w-full h-8 py-1 rounded-md text-sm mt-2">See availability</button>

                                </div>
                            </div>
                       </div>
                    </div>
                    {/*  Hotels List */}
                    {/* RightBar */}
                </div>
            </div>
        </div>
    </>
  )
}
