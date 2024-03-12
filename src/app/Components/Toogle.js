import React from 'react'

export default function Toogle() {
  return (
    <div className='flex flex-col gap-2 w-1/2 justify-around items-center lg:hidden xl:hidden '>
          <div className='hover:bg-green-300 w-full p-2 '>Home</div>
          <div className='hover:bg-green-300 w-full p-2'>About</div>
          <div>
            <button className='hover:bg-green-300 w-full p-2'>
              Login/Signup
            </button>
          </div>
        </div>
  )
}
