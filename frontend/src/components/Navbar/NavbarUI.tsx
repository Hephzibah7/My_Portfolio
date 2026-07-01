

function NavbarUI() {
  return (
    <div className='sticky '>
      <div className='hidden  lg:flex w-full p-7 gap-2 justify-between font-bold tracking-wide overflow-hidden '>
            <div className='text-2xl'>Portfolio</div>
            <div className='flex justify-between gap-10 underline'>
                <div className='cursor-pointer'>
                    <a href='#home'>Home</a>
                </div>
                <div className='cursor-pointer'>
                    <a href='#profile'>Profile</a>
                </div>
                <div className='cursor-pointer'>
                   <a href='#project'> Projects</a>
                </div>
                <div className='cursor-pointer'>
                    <a href='#coding'>Coding Profile</a>
                </div>
                {/* <div className='cursor-pointer'>
                    <a href='#message'>Message</a>
                </div> */}
                <div className='cursor-pointer'>
                    <a href='#contact'>Contact Me</a>
                </div>
            </div>
           
      </div>
    </div>
  )
}

export default NavbarUI
