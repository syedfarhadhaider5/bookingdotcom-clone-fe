import React from 'react'

export default function SideBarFilters() {
  return (
    <>
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
    </>
  )
}
