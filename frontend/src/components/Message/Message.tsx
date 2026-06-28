import React from 'react'
import { motion } from "framer-motion";
function Message() {
  return (
    <div className='w-full h-contain pl-20 pr-20 text-white bg-gray-200'>
      <div className='ml-20 mr-20'>
        <div className='w-full pl-20 pr-20  mr-20'>
        <div className=' ml-20 mr-20  bg-black h-contain p-20 rounded-2xl shadow-[0_20px_60px_rgba(255,140,0,0.25),0_20px_80px_rgba(0,0,0,0.6)]'>
            <div className='grid grid-cols-2 gap-[100px]'>
                <motion.div
                 initial={{ opacity: 0, y: 80 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: false }}
                 className='bg-white text-black rounded p-2'>
                    <div className='bg-black text-white'>
                        <h1 className='uppercase font-bold tracking-wider text-xl flex justify-center p-10'>hephzibah</h1>
                    </div>
                    <div className='flex justify-center m-5 font-bold text-xl'>Reach Out to Me</div>
                    <div className='mt-5 grid grid-rows-3 gap-4 p-5 text-sm'>
                        <div
                         className=''>
                            <h1 className='font-bold'>Name</h1>
                            <input className='bg-gray-200 mt-2 p-2 rounded w-full' placeholder='Jane Smith'/>
                        </div>
                        <div className=''>
                            <h1 className='font-bold'>Email</h1>
                            <input className='bg-gray-200 mt-2 p-2 rounded w-full' placeholder='jane@gmail.com' />
                        </div>
                        <div className=''>
                            <h1 className='font-bold'>Message</h1>
                            <input className='bg-gray-200 mt-2 p-2 rounded w-full' placeholder='Your Message'/>
                        </div>
                        
                        <div className='bg-orange-700 text-white p-2 rounded text-center '>
                            <h1 className='font-bold'>Submit</h1>
                        </div>
                    </div>
                </motion.div>
                <motion.div
                 initial={{ opacity: 0, y: -80 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
                 className='pt-20'>
                    <h1 className='font-bold text-[60px] uppercase tracking-tighter'>Let's <span className='text-orange-700'>Build </span>Together</h1>
                </motion.div>
            </div>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Message
