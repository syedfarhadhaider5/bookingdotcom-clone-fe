import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.css'
const inter = Inter({ subsets: ['latin'] })
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBed, faPlane, faCar, faMagnet, faTaxi } from '@fortawesome/free-solid-svg-icons'
import '@fortawesome/fontawesome-svg-core/styles.css'

export default function Home() {
  return (
    <>
      <div className="grid grid-cols-5 gap-4">
          <div className='col-span-5'>
            <div className='bg-[#003b95] vertical-height w-full relative'>
                <div className="container mx-auto top-container">
                  <div className='flex flex-col'>
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
                     {/* Title */}
                     <div className=' text-white pt-20'>
                        <h1 className="font-bold text-5xl">
                          Find your next stay
                        </h1>
                        <p className="pt-4 font-light text-2xl">Search low prices on hotels, homes and much more...</p>
                     </div>
                     {/* Title */}
                  </div>
                   {/* Search bar */}
                   <div className='flex pt-10 search-wrapper'>
                   <input type="text" className='search-input-1 focus:outline-none' placeholder='Where are you going?' />
                   <input type="text" className='search-input-2 focus:outline-none' placeholder='Check-in date - Check-out date?' />
                   <button className="search-button-1 bg-white text-white  rounded-sm">Sign in</button>

                   </div>
                   {/* <input type="text" class="form-input border-2 border-gray-300 px-4 py-2 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="Enter your name"> */}

                    {/* Search bar  */}
                </div>
            </div>

          </div>    
      </div>
      <div className="container mx-auto top-container">
          <br></br><br></br><br></br>
          <div className="mt-15  font-bold text-3xl">Offers</div>
          <p className="s">Promotions, deals and special offers for you</p>
          {/* Offers */}
            <div className="grid grid-cols-2 pt-10 gap-4">
              <div className="col-span-1">
                <div className="bg-[url('https://q-xx.bstatic.com/xdata/images/xphoto/714x300/203211874.jpeg?k=0429a0e73fac49a3b10af7a4fbad11fa8caa27f0a0934e56a937257bfc6f7ce7&o=')] offers-image rounded-md">
                  <div className="flex flex-col pt-4 pl-3 pb-4 text-white">
                    <h3 className='font-bold'>The great getaway, your way</h3>
                    <p className='paragrap pt-2 pb-2 w-1/2'>Save at least 15% on stays worldwide, from relaxing retreats to off-grid adventures</p>
                    <button className="bg-[#5593df] text-white px-4 py-1 rounded-sm w-1/2">Find Getaway Deals</button>
                  </div>
                </div>
              </div>
              <div className="col-span-1">
              <div className="bg-[url('https://q-xx.bstatic.com/xdata/images/xphoto/714x300/182431478.jpeg?k=fcbb6d5552a1d4ff338978206c449077ab8ad696050cfd7e4edef1ddc11225cc&o=')] offers-image rounded-md">
                  <div className="flex flex-col pt-4 pl-3 pb-4 text-white">
                    <h3 className='font-bold'>New year, new adventures</h3>
                    <p className='paragrap pt-2 pb-2 w-1/2'>Save 15% or more when you book and stay before 31 March 2023</p>
                    <button className="bg-[#5593df] text-white px-4 py-1 rounded-sm w-1/2">Find Early 2023 Deals</button>
                  </div>
                </div>
              </div>
            </div>
          {/* Offers */}
          {/* City */}
          <div className="grid grid-cols-2 pt-10 gap-4 mb-3">
              <div className="col-span-1">
                  <div className="city-image-1 rounded-md">
                    <div className='flex items-center pt-2 pl-4'>
                    <h1 className='font-extrabold text-white  drop-shadow-sm	text-2xl'>Lahore</h1>
                    <img className='pl-2' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAMAAADXqc3KAAAAtFBMVEX///8AAAAAAAAAAAAAAAD////3+Pfw9PHv7+/m7Obi6uPU39bK2MvI18vD08W8zb6yx7WwxLKtw6+kvKidt6GYs5uZs5uJp4yEpIiBooaAoIR4nH5ylXRrknBnjWpli2hchmFbhF5VgFtbf1tQfVRNe1NHdUpCckhBcEU/bUI6az46a0AyZjgwYjErYDEhWCgeWCUbVyMXUx4VUhwSUBkQTBcJSRAPSBALRBAPRA8GQQgGPQaUDIdTAAAABXRSTlMAESIzRJTdRHwAAADUSURBVBgZrcHNTsJgEIbR552ZGn9SuhGjceX935FegLJQQgKp8BXG+tUNyMbEc+DfCHFOSsHoiRMvIb6tONYpqBqO7CGojJGKnCqFUZmbNf2mcS/rYmYiUAINqF/dXSSbz6FNnKBypdZ2o1SXnWcmQRVK7Qigaz3BCKpLpTTsZ3tQQkkMMRKKK17NJVwjjInBXJvnbYQtexO4PIEHlNe53r4vPxZ5S2oRiB/DY/vWF+b3A4JgEgMMs67QUEBGUB1KAjvElkmAA8EpycRveRDinOTPvgBVx0dTBQSpBgAAAABJRU5ErkJggg==" alt="" />
                    </div>
                  </div>
              </div>
              <div className="col-span-1">
                <div className="city-image-2 rounded-md">
                    <div className='flex items-center pt-2 pl-4'>
                    <h1 className='font-extrabold text-white  drop-shadow-sm	text-2xl'>Islamabad</h1>
                    <img className='pl-2' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAMAAADXqc3KAAAAtFBMVEX///8AAAAAAAAAAAAAAAD////3+Pfw9PHv7+/m7Obi6uPU39bK2MvI18vD08W8zb6yx7WwxLKtw6+kvKidt6GYs5uZs5uJp4yEpIiBooaAoIR4nH5ylXRrknBnjWpli2hchmFbhF5VgFtbf1tQfVRNe1NHdUpCckhBcEU/bUI6az46a0AyZjgwYjErYDEhWCgeWCUbVyMXUx4VUhwSUBkQTBcJSRAPSBALRBAPRA8GQQgGPQaUDIdTAAAABXRSTlMAESIzRJTdRHwAAADUSURBVBgZrcHNTsJgEIbR552ZGn9SuhGjceX935FegLJQQgKp8BXG+tUNyMbEc+DfCHFOSsHoiRMvIb6tONYpqBqO7CGojJGKnCqFUZmbNf2mcS/rYmYiUAINqF/dXSSbz6FNnKBypdZ2o1SXnWcmQRVK7Qigaz3BCKpLpTTsZ3tQQkkMMRKKK17NJVwjjInBXJvnbYQtexO4PIEHlNe53r4vPxZ5S2oRiB/DY/vWF+b3A4JgEgMMs67QUEBGUB1KAjvElkmAA8EpycRveRDinOTPvgBVx0dTBQSpBgAAAABJRU5ErkJggg==" alt="" />
                    </div>
                  </div>
              </div>
          </div>
          <div className="grid grid-cols-3 pt-10 gap-4 mb-3">
              <div className="col-span-1">
              <div className="col-span-1">
                  <div className="city-image-5 rounded-md">
                    <div className='flex items-center pt-2 pl-4'>
                    <h1 className='font-extrabold text-white  drop-shadow-sm	text-2xl'>Karachi</h1>
                    <img className='pl-2' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAMAAADXqc3KAAAAtFBMVEX///8AAAAAAAAAAAAAAAD////3+Pfw9PHv7+/m7Obi6uPU39bK2MvI18vD08W8zb6yx7WwxLKtw6+kvKidt6GYs5uZs5uJp4yEpIiBooaAoIR4nH5ylXRrknBnjWpli2hchmFbhF5VgFtbf1tQfVRNe1NHdUpCckhBcEU/bUI6az46a0AyZjgwYjErYDEhWCgeWCUbVyMXUx4VUhwSUBkQTBcJSRAPSBALRBAPRA8GQQgGPQaUDIdTAAAABXRSTlMAESIzRJTdRHwAAADUSURBVBgZrcHNTsJgEIbR552ZGn9SuhGjceX935FegLJQQgKp8BXG+tUNyMbEc+DfCHFOSsHoiRMvIb6tONYpqBqO7CGojJGKnCqFUZmbNf2mcS/rYmYiUAINqF/dXSSbz6FNnKBypdZ2o1SXnWcmQRVK7Qigaz3BCKpLpTTsZ3tQQkkMMRKKK17NJVwjjInBXJvnbYQtexO4PIEHlNe53r4vPxZ5S2oRiB/DY/vWF+b3A4JgEgMMs67QUEBGUB1KAjvElkmAA8EpycRveRDinOTPvgBVx0dTBQSpBgAAAABJRU5ErkJggg==" alt="" />
                    </div>
                  </div>
              </div>
              </div>
              <div className="col-span-1">
              <div className="col-span-1">
                  <div className="city-image-4 rounded-md">
                    <div className='flex items-center pt-2 pl-4'>
                    <h1 className='font-extrabold text-white  drop-shadow-sm	text-2xl'>Dubai</h1>
                    <img className='pl-2' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAMAAADXqc3KAAAAjVBMVEX///8AAAAAAAAAAAAAAAD////29vaRzq+Jy6qAxqN6xJ90wJtxv5jwkZVlupDvio5VsoTugIRKrHzte4Dten/rdHnscXbqaG3pZWroWl/oWF7nUljnUFXmS1DjR03hQ0neQkLlPUPeOUDcNjziMTfZMTfgJy7WKC7gISjUJCrfGCDPGCAXFxcREREICAjEBKG3AAAABXRSTlMAESIzRJTdRHwAAAB7SURBVBgZrcHRCcJAFETRO5MBsQYrsP9e7ENBhED2uZ+bZH8Ez4G/EWKmpFvRvdl7RvWiW9m5KshRaWPUIMgLYEZlgmLAjAqCbODDzkqQF05EcMJE0CVMGDMVsJkILro7o8bDmKmAOREEbw0oDgILnTiQLM6qCTFT/OwLnkMXZQ19cIQAAAAASUVORK5CYII=" alt="" />
                    </div>
                  </div>
              </div>
              </div>
              <div className="col-span-1">
              <div className="col-span-1">
                  <div className="city-image-3 rounded-md">
                    <div className='flex items-center pt-2 pl-4'>
                    <h1 className='font-extrabold text-white  drop-shadow-sm	text-2xl'>Makkah</h1>
                    <img className='pl-2' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAMAAADXqc3KAAAAdVBMVEX///8AAAAAAAAAAAAAAADJ2Mm4yrivxa+tva2lvaWhuaCbtpuUsJSNrI2JqImDpIN7nXt0mnRyl3Jqk2pjjGNeil5YhFhTgVNQf1BKekpCdUI5bDkyaTIzZjMpYiklXyUoXighWSEZVxkZUhkRURESSxIJSgkrFIpeAAAABXRSTlMAESIzRJTdRHwAAADASURBVBgZrcHNTsIAEIXR796ZApUY4473fzq3Jib8tJ0RYUEi3Zh4DvwbIda0dGDNR4ovnu2VoOC3RSSyuWvEXYsEm/lcW9VSJmoedjQY2bFMZVdHR1WHbUiIYPT5tMmasjwcHSASh9REapqGzaQaSgQkytSJ3Bz3l11suyt3PTcJoseRfhWFodQIEiEaRCNVh1tgEiPgs8VVLXo3GBLx442buhRXahI1D36BAkzipXgobkxCsEayeNYlxJrmz74Bp2NHxzVJza0AAAAASUVORK5CYII=" alt="" />
                    </div>
                  </div>
              </div>
              </div>
          </div>
           {/* City */}
           {/* Hotels */}
           <div className="grid grid-cols-4 mt-4 gap-4 mb-4">
              <div className='col-span-1'>
                <div className='flex items-start flex-col'>
                    <img src="https://cf.bstatic.com/xdata/images/hotel/square600/421853145.webp?k=140bfc6c54ee753d4a748ee7b5a86c00c988e6fc9bb340c87172ead66a3ea9d5&o=&s=1" className='rounded-md hotels' alt="" />
                    <h2 className='font-bold pt-2'>6 Continents Apartments by Prague Residences</h2>
                    <p className='pt-2'>Prague 1, Czech Republic, Prague
Starting from

                    <span className='font-bold pl-2'>PKR 21,437</span>
                    </p>
                    <div className='flex items-center mt-2'>
                          <span className='text-white bg-[#003b95] rating-num '>9.0</span>
                          <p className='text-sm	pl-2'>Very Good . 999 reviews</p>
                    </div>
                </div>
              </div>
              <div className='col-span-1'>
              <div className='flex items-start flex-col'>
                    <img src="https://cf.bstatic.com/xdata/images/hotel/square600/87428762.webp?k=9a065fcd92168145d8c8358701662c76793535597b678efc8f6921c8e3c188e6&o=&s=1" className='rounded-md hotels' alt="" />
                    <h2 className='font-bold pt-2'>7Seasons Apartments Budapest</h2>
                    <p className='pt-2'>06. Terézváros, Hungary, Budapest
                    Starting from
                    <span className='font-bold pl-2'>PKR 29,937</span>
                    </p>
                    <div className='flex items-center mt-2'>
                          <span className='text-white bg-[#003b95] rating-num '>9.0</span>
                          <p className='text-sm	pl-2'>Good . 7,121 reviews</p>
                    </div>
                </div>
              </div>
              <div className='col-span-1'>
                <div className='flex items-start flex-col'>
                    <img src="https://cf.bstatic.com/xdata/images/hotel/square600/352170812.webp?k=75ffc5f9eb3f3cc394b901714c1544757b05849dbbdf30e4fc8c6df53931c131&o=&s=1" className='rounded-md hotels' alt="" />
                    <h2 className='font-bold pt-2'>numa I Vita Apartments</h2>
                    <p className='pt-2'>Fortezza da Basso, Italy, Florence
Starting from

                    <span className='font-bold pl-2'>PKR 41,539</span>
                    </p>
                    <div className='flex items-center mt-2'>
                          <span className='text-white bg-[#003b95] rating-num '>9.3</span>
                          <p className='text-sm	pl-2'>Superb . 7,121 reviews</p>
                    </div>
                </div>
              </div>
              <div className='col-span-1'>
              <div className='flex items-start flex-col'>
                    <img src="https://cf.bstatic.com/xdata/images/hotel/square600/95058973.webp?k=979587fd2ac8f7777a34758264d557eef57d0e98e58bdaeb121f5b968a20f810&o=&s=1" className='rounded-md hotels' alt="" />
                    <h2 className='font-bold pt-2'>Oriente Palace Apartments</h2>
                    <p className='pt-2'>Centro, Spain, Madrid
Starting from

                    <span className='font-bold pl-2'>PKR 30,664</span>
                    </p>
                    <div className='flex items-center mt-2'>
                          <span className='text-white bg-[#003b95] rating-num '>8.9</span>
                          <p className='text-sm	pl-2'>Good . 7,121 reviews</p>
                    </div>
                </div>
              </div>
           </div>
           {/* Hotels */}
           {/* Footer */}
           <div className='flex items-center flex-col mt-8 mb-4'>
              <div className='text-xs'>Copyright © 1996–2023 Booking.com™. All rights reserved.</div>
              <div className="mt-2 mb-2 text-xs">
                Booking.com is part of Booking Holdings Inc., the world leader in online travel and related services.
              </div>
              <div className='flex justify-between w-3/4'>
                <img src="https://cf.bstatic.com/static/img/tfl/group_logos/logo_booking/27c8d1832de6a3123b6ee45b59ae2f81b0d9d0d0.png" alt="" />
                <img src="https://cf.bstatic.com/static/img/tfl/group_logos/logo_priceline/f80e129541f2a952d470df2447373390f3dd4e44.png" alt="" />
                <img src="https://cf.bstatic.com/static/img/tfl/group_logos/logo_kayak/83ef7122074473a6566094e957ff834badb58ce6.png" alt="" />
                <img src="https://cf.bstatic.com/static/img/tfl/group_logos/logo_agoda/1c9191b6a3651bf030e41e99a153b64f449845ed.png" alt="" />
                <img src="https://cf.bstatic.com/static/img/tfl/group_logos/logo_rentalcars/6bc5ec89d870111592a378bbe7a2086f0b01abc4.png" alt="" />
                <img src="https://cf.bstatic.com/static/img/tfl/group_logos/logo_opentable/a4b50503eda6c15773d6e61c238230eb42fb050d.png" alt="" />

              </div>
           </div>
           {/* Footer */}
      </div>
      </>
  )
}
