import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

function LandingPageUI() {
  return (
    <div className='relative'>
    <div className=' z-10 absolute bg-orange-600 shadow-[inset_0_0_15px_5px_rgba(0,0,0,0.2)] w-full h-screen overflow-hidden select-none '>
      <div className='w-full h-full'>
        
        {/* 2. table-fixed splits columns evenly; border-collapse prevents ugly double lines */}
        <table className='w-full h-full table-fixed border-collapse border border-white/20 z-0 relative'>
          <tbody>
            
            {/* ROW 1 */}
            <tr className='border border-white/20 '>
            <td className='border border-white/20 lg:px-20 w-20'></td>
              <td className='border border-white/20'></td>
              <td className='border border-white/20'></td>
              <td className='border border-white/20'></td>
              <td className='lg:table-cell hidden border border-white/20 w-20 lg:px-20'></td>
            </tr>

            {/* ROW 2 (The Target Row) */}
            <tr className='border border-white/20'>
            <td className='border border-white/20 w-20'></td>
              <td className='border border-white/20'></td>
              <td className='border border-white/20'></td>
              <td className='border border-white/20'></td>
              <td className='lg:table-cell hidden border border-white/20 w-20'></td>
            </tr>

            {/* ROW 3 */}
            <tr className='border border-white/20 '>
            <td className='border border-white/20 w-20'></td>
              <td className='border border-white/20'></td>
              <td className='border border-white/20'></td>
              <td className='border border-white/20'></td>
              <td className='lg:table-cell hidden border border-white/20 w-20'></td>
            </tr>

          </tbody>
        </table>
      </div>
    </div>
    <div className='z-30 absolute lg:w-full lg:h-screen flex justify-center '>
        <img className='object-cover' src="src/assets/CA.png"/>
    </div>
    <div className='z-20 absolute object-top w-full flex justify-center '>
        <h1 className='object-cover tracking-wide text-orange-100/20  font-extrabold text-[190px] uppercase animate-jump-in animate-duration-[1000ms] animate-delay-[400ms] animate-ease-in-out animate-normal'>HEPHZIBAH</h1>
    </div>
    <div className='z-30 absolute w-full h-screen justify-center p-20 flex flex-col overflow-hidden'>
       <div className='mt-10'>
         <div className='flex justify-between mt-[150px] ml-20  text-white'>
          <h1 className='w-1/3 text-sm uppercase tracking-wide font-bold animate-fade-right animate-duration-[2000ms] animate-delay-[400ms] animate-ease-in-out animate-normal'>Computer Science Engineering graduate  hands-on experience in backend and
full-stack development through internships and personal projects. </h1>
          
        </div>
       </div>
       <div className='w-full'>
          <div className='flex justify-between mt-[150px] ml-20 mr-20  text-white'>
            <div className='mt-10'>
              <h2>@2026</h2>
          <h1 className='uppercase w-full text-9xl tracking-wide  font-extrabold animate-fade-up animate-duration-[2000ms] animate-delay-[400ms] animate-ease-in-out animate-normal'>hephzibah</h1>
            </div>
            <div className='mt-20 z-50 tracking-wide animate-fade-left animate-duration-[2000ms] animate-delay-[400ms] animate-ease-in-out animate-normal'>
              <div className='bg-black p-3 grid grid-cols-3 rounded-md  text-gray-400 '>
                <div className='col-span-1'>
                  <img className='object-cover w-20 h-20 rounded' src="src/assets/peak.jpg"/>
                </div>
                <div className='col-span-2'>
                    <div className='text-sm'>
                      <h1>Let's Talk</h1>
                    </div>
                    <div className='flex justify between gap-8 mt-5'>
                        <div className='text-sm'>
                          <h1 className='font-bold text-white'>Hephzibah</h1>
                          <h1>Full Stack Developer</h1>
                        </div>
                        <div className='bg-white p-2 rounded '>
                          <FontAwesomeIcon icon={faArrowUpRightFromSquare} className='text-black text-xl animate-bounce cursor-pointer' />
                        </div>
                    </div>
                </div>
              </div>
            </div>
          
        </div>
       </div>
        <div className="absolute bottom-0 w-full 
                shadow-[0_-60px_120px_60px_rgba(249,115,22,0.6)] ">
</div>
    </div>
   
    
    
    </div>
  )
}

export default LandingPageUI;
