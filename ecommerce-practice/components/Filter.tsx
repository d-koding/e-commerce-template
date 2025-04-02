import React from 'react'

const Filter = () => {
  return (
    <div className='mt-12 flex justify-between'>
        <div className='flex gap-6 flex-wrap'>
            <select name='type' className='py-2 px-4 rounded-2xl text-xs font-medium bg-gray-200'>
                <option>Type</option>
                <option value="physical">Physical</option>
                <option value="digital">Digital</option>
            </select>
            <input 
            type="text" 
            name="min" 
            placeholder="min price" 
            className='text-xs rounded-2xl pl-2 w-24 ring-1 ring-gray-400'>
            </input>

            <input 
            type="text" 
            name="max" 
            placeholder="max price" 
            className='text-xs rounded-2xl pl-2 w-24 ring-1 ring-gray-400'>
            </input>

            <select name='type' className='py-2 px-4 rounded-2xl text-xs font-medium bg-gray-200'>
                <option>Size</option>
                <option value="physical">Small</option>
                <option value="digital">Medium</option>
                <option value="digital">Large</option>
            </select>

            <select name='type' className='py-2 px-4 rounded-2xl text-xs font-medium bg-gray-200'>
                <option>Color</option>
                <option value="physical">Physical</option>
                <option value="digital">Digital</option>
            </select>

            <select name='type' className='py-2 px-4 rounded-2xl text-xs font-medium bg-gray-200'>
                <option>Company</option>
                <option value="physical">Company 1</option>
                <option value="digital">Company 2</option>
                <option value="digital">Company 3</option>
            </select>

            <select name='type' className='py-2 px-4 rounded-2xl text-xs font-medium bg-gray-200'>
                <option>All Filters</option>
                <option value="physical">Physical</option>
                <option value="digital">Digital</option>
            </select>
        </div>
        <div className=''>
            <select 
            name="" 
            id="" 
            className='py-2 px-4 rounded-2xl text-xs font-medium bg-white ring-1 ring-gray-400'
            >

            <option>Sort By</option>
            <option value="">Price (low to high)</option>
            <option value="">Price (high to low)</option>
            <option value="">Newest</option>
            <option value="">Oldest</option>

            </select>
        </div>
    </div>
  )
}

export default Filter