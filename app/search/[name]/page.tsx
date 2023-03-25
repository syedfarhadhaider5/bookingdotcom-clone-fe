
import Header from '../../components/Header'
import HotelList from '../components/HotelList'
import SideBarFilters from '../components/SideBarFilters'
import SidebarSearch from '../components/SidebarSearch'
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
                            <SidebarSearch />
                        {/* SideSearch */}
                        {/* Sidebar Filters */}
                            <SideBarFilters />
                        {/* Sidebar Filters */}
                    {/* Sidebar */}
                </div>
                <div className='col-span-3'>
                    {/* RightBar */}
                    {/* Hotels List */}
                    <HotelList />
                    {/*  Hotels List */}
                    {/* RightBar */}
                </div>
            </div>
        </div>
    </>
  )
}
