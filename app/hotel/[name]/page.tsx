import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBed, faPlane, faCar, faMagnet, faTaxi } from '@fortawesome/free-solid-svg-icons'
import '@fortawesome/fontawesome-svg-core/styles.css'
export default function page() {
  return (
    <>
         <div className="grid grid-cols-1">
            <div className='col-span-1'>
                <div className='bg-[#003b95] vertical-height-search w-full'>
                    <div className="container mx-auto top-container">
                        {/* NAV */}
                     <div className="flex justify-between items-center pt-4">
                        <div className='text-white font-bold text-2xl'>Booking.com</div>
                        <div className=' flex text-white items-center gap-6 top-nav-0'>
                          <a href=''><span className='font-semibold'>PKR</span></a>
                          <a href=""><img className='rounded-md' width={"20px"} height={"20px"} src="https://t-cf.bstatic.com/design-assets/assets/v3.66.0/images-flags/Gb@3x.png" alt="" /></a>
                          <a href=""><div className='font-semibold'>List your property</div></a>
                          <button className="bg-white text-[#003b95] px-4 py-1 rounded-sm">Register</button>
                          <button className="bg-white text-[#003b95] px-4 py-1 rounded-sm">Sign in</button>
                        </div>
                    </div>
                    <div className="flex justify-between w-3/5 text-white pt-4 top-nav">
                      <a href='' className='link-icon'>
                         <FontAwesomeIcon icon={faBed} />
                         <div className='pl-1'>Stays</div>
                      </a>
                      <a href='' className='link-icon'>
                          <FontAwesomeIcon icon={faPlane} />
                         <div className='pl-1'>Flights</div>
                      </a>
                      <a href='' className='link-icon'>
                        <FontAwesomeIcon icon={faCar} />
                         <div className='pl-1'>Car rentals</div>
                        </a>
                      <a href='' className='link-icon'>
                          <FontAwesomeIcon icon={faMagnet} />
                         <div className='pl-1'>Attractions</div>
                      </a>
                      <a href='' className='link-icon'>
                        <FontAwesomeIcon icon={faTaxi} />
                         <div className='pl-1'> Airport taxis</div>
                        </a>
                    </div>
                     {/* NAV */}
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
