import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBed, faPlane, faCar, faMagnet, faTaxi } from '@fortawesome/free-solid-svg-icons'
import '@fortawesome/fontawesome-svg-core/styles.css'
import Header from '@/app/components/Header'
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
    </>
  )
}
