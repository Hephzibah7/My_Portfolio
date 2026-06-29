import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

import { motion } from "framer-motion";
import NavbarComponent from '../Navbar/NavbarComponent';


function HomeUI() {
  return (
    <div className=''>
      <div className='relative  min-h-screen'>
        <motion.div
          initial={{ opacity: 0, y: -80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className='text-white/100 w-full bg-transparent z-40 absolute'>
          <NavbarComponent/>
        </motion.div>
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
            <motion.img
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false }}
            className=' w-[800px] h-[1000px] absolute bottom-0 object-cover' src="src/assets/me-Photoroom.png" />
          
        </div>
        <div className='z-20 absolute object-top w-full flex justify-center '>
          <motion.div
            initial={{ opacity: 0, scale: 1.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className='object-cover tracking-wide text-orange-100/20  font-extrabold text-[190px] uppercase'>HEPHZIBAH</h1>

          </motion.div>
        </div>
        <div className='z-30 absolute w-full h-screen justify-center p-20 flex flex-col overflow-hidden'>
          <div className='mt-10'>
            <div className='flex justify-between mt-[150px] ml-20  text-white'>
              <motion.div
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h1 className='w-1/3 text-sm uppercase tracking-wide font-bold'>Computer Science Engineering graduate  hands-on experience in backend and
                  full-stack development through internships and personal projects. </h1>
              </motion.div>

            </div>
          </div>
          <div className='w-full'>
            <div className='flex justify-between mt-[150px] ml-20 mr-20  text-white'>
              <motion.div
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className='mt-10 '>
                <h2 className=''>@2026</h2>
                <h1 className='uppercase w-full text-9xl tracking-wide  font-extrabold '>hephzibah</h1>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className='mt-20 z-50 tracking-wide'>
                <div className='bg-black p-1 grid grid-cols-3 p-2 rounded-md  text-gray-400 '>
                  <div className='col-span-1 '>
                    <img className='object-cover w-20 h-20  rounded' src="src/assets/pic8.jpeg" />
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
              </motion.div>

            </div>
          </div>
          <div className="absolute bottom-0 w-full 
                shadow-[0_-60px_120px_60px_rgba(249,115,22,0.6)] ">
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default HomeUI;
