import React from 'react'

function NavbarUI() {
  return (
    <div>
      <div className='flex w-full p-7 gap-2 justify-between font-bold tracking-wide'>
            <div className='text-2xl'>Portfolio</div>
            <div className='flex justify-between gap-10 underline'>
                <div className='cursor-pointer'>
                    Home
                </div>
                <div className='cursor-pointer'>
                    Education
                </div>
                <div className='cursor-pointer'>
                    Skills
                </div>
                <div className='cursor-pointer'>
                    Projects
                </div>
                <div className='cursor-pointer'>
                    Coding Profile
                </div>
                <div className='cursor-pointer'>
                    Contact Me
                </div>
            </div>
            <div>
                Menu
            </div>
      </div>
    </div>
  )
}

export default NavbarUI
