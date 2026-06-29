import React from 'react'
import { motion } from "framer-motion";
function CPUI() {
    return (
        <div className='w-full h-contain pl-20 pr-20 bg-gray-200'>
            <div className='w-full pl-20 pr-20 '>
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className='p-20 ml-30 mr-20 pl-20  gap-20'>
                    <div className='font-bold tracking-wide p-1 h-contain bg-gray-300 rounded uppercase w-fit'>why choose me?</div>
                    <h1 className='uppercase text-[50px] font-bold tracking-wide '>Coding Profile</h1>
                </motion.div>
                <div className='flex gap-5'>
                    <div className='text-orange-600'>|</div>
                    <div className='font-bold  text-xs m-2 tracking-wide p-1 bg-gray-300 rounded uppercase w-fit'>Consistency Oriented</div>
                </div>
                <div className='grid grid-flow-col grid-rows-3 gap-7'>

                    <motion.div
                        initial={{ opacity: 0, x: 100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="row-span-2 row-start-2">

                        <img className="rounded" src="src/assets/pic2.png" />
                    </motion.div>
                    <div className="row-start-1 row-end-4">
                        <img className="rounded" src="src/assets/pic1.png" />
                    </div>
                    <motion.div
                        initial={{ opacity: 0, x: -100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="row-start-1 row-end-4">
                        <img className="rounded" src="src/assets/pic3.png" />
                    </motion.div>
                </div>
                <div className='flex gap-5 mt-10'>
                    <div className='text-orange-600'>|</div>
                    <div className='font-bold  text-xs m-2 tracking-wide p-1 bg-gray-300 rounded uppercase w-fit'>2+ Years of consistent hardwork</div>
                </div>
                <div className="grid grid-flow-col grid-rows-2 gap-4 w-full mt-10">
                    <motion.div
                        initial={{ opacity: 0, x: 100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="row-span-2">
                        <img className="rounded" src="src/assets/pic4.png" />
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: -100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="row-start-1 col-span-2">
                        <img className="rounded" src="src/assets/pic5.png" />
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: -100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="row-start-2 col-span-2 row-span-2">
                        <img className="rounded" src="src/assets/pic6.png" />
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

export default CPUI
