import React from 'react'
import { FaSearch } from 'react-icons/fa'
export default function Input() {
  return (
    <div className=' flex flex-row justify-center items-center w-full '>
      <input type="text" placeholder='Search Plant' className='outline-none w-4/5 md:w-1/2 lg:w-1/2 xl:w-1/2 p-3 bg-green-300' />
      <button className='bg-blue-500 p-4'><FaSearch/></button>
    </div>
  )
}
