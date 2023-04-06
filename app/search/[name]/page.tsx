
import Header from '../../components/Header'
import HotelList from '../components/HotelList'
import SideBarFilters from '../components/SideBarFilters'
import SidebarSearch from '../components/SidebarSearch'

type PageProps = {
    params: {
      name: string
    }
  }

export default function page({params: {name}}: PageProps) {
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
                            <SideBarFilters slug={name} />
                        {/* Sidebar Filters */}
                    {/* Sidebar */}
                </div>
                <div className='col-span-3'>
                    {/* RightBar */}
                    {/* Hotels List */}
                    <HotelList slug={name}/>
                    {/*  Hotels List */}
                    {/* RightBar */}
                </div>
            </div>
        </div>
    </>
  )
}
