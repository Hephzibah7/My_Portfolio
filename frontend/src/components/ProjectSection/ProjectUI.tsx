import React from 'react'
import { motion } from "framer-motion";

function ProjectUI() {
    return (
        <div className="w-full h-contain bg-gray-200 pl-20 pr-20">
            <div className='pl-20 w-full pr-20'>
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className='ml-30 mr-20 pl-20'>
                    <h1 className='uppercase text-[50px] font-bold tracking-wide '>My Projects</h1>
                </motion.div>
                <div className='flex flex-col gap-10 w-full '>
                    <div className=' mt-10 w-full '>
                        <hr className="border-t-3 border-red-500 " />
                        <div className='flex grid grid-cols-4 w-full mt-10'>
                            <div className='col-span-1'>001</div>
                            <div className='col-span-2 flex flex-col gap-4'>
                                <div className='uppercase font-bold text-2xl tracking-wide'>
                                    online art marketplace
                                </div>
                                <div className='text-sm text-gray-400'>Engineered a modular architecture with Controller-Service-Repository layers, centralizing validation and error handling to
                                    boost code extensibility and reduce debugging time by 15%.– Built inventory reservation and order management systems </div>
                                <div className='flex flex-wrap font-bold gap-4'>
                                    <div className=' bg-gray-300 w-fit p-1 rounded'>React.js</div>
                                    <div className=' bg-gray-300 w-fit p-1 rounded'>React.js</div>
                                    <div className=' bg-gray-300 w-fit p-1 rounded'>React.js</div>
                                    <div className=' bg-gray-300 w-fit p-1 rounded'>React.js</div>
                                    <div className=' bg-gray-300 w-fit p-1 rounded'>React.js</div>
                                </div>

                            </div>
                            <div className='cols-span-1'>
                                <motion.div
                                    initial={{ opacity: 0, scale: 1.5 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.8 }}
                                >
                                    <img className="p-3 rounded" src="https://s3-figma-hubfile-images-production.figma.com/hub/file/carousel/img/8730f8b4204608f801497ad2a980b4aecdc43b94" />

                                </motion.div>
                            </div>
                        </div>
                    </div>

                    <div className=' mt-10 w-full '>
                        <hr className="border-t-3 border-red-500 " />
                        <div className='flex grid grid-cols-4 w-full mt-10'>
                            <div className='col-span-1'>001</div>
                            <div className='col-span-2 flex flex-col gap-4'>
                                <div className='uppercase font-bold text-2xl tracking-wide'>
                                    online art marketplace
                                </div>
                                <div className='text-sm text-gray-400'>Engineered a modular architecture with Controller-Service-Repository layers, centralizing validation and error handling to
                                    boost code extensibility and reduce debugging time by 15%.– Built inventory reservation and order management systems </div>
                                <div className='flex flex-wrap font-bold gap-4'>
                                    <div className=' bg-gray-300 w-fit p-1 rounded'>React.js</div>
                                    <div className=' bg-gray-300 w-fit p-1 rounded'>React.js</div>
                                    <div className=' bg-gray-300 w-fit p-1 rounded'>React.js</div>
                                    <div className=' bg-gray-300 w-fit p-1 rounded'>React.js</div>
                                    <div className=' bg-gray-300 w-fit p-1 rounded'>React.js</div>
                                </div>

                            </div>
                             <div className='cols-span-1'>
                                <motion.div
                                    initial={{ opacity: 0, scale: 1.5 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.8 }}
                                >
                                    <img className="p-3 rounded" src="https://s3-figma-hubfile-images-production.figma.com/hub/file/carousel/img/8730f8b4204608f801497ad2a980b4aecdc43b94" />

                                </motion.div>
                            </div>
                        </div>
                    </div>

                    <div className=' mt-10 w-full '>
                        <hr className="border-t-3 border-red-500 " />
                        <div className='flex grid grid-cols-4 w-full mt-10'>
                            <div className='col-span-1'>001</div>
                            <div className='col-span-2 flex flex-col gap-4'>
                                <div className='uppercase font-bold text-2xl tracking-wide'>
                                    online art marketplace
                                </div>
                                <div className='text-sm text-gray-400'>Engineered a modular architecture with Controller-Service-Repository layers, centralizing validation and error handling to
                                    boost code extensibility and reduce debugging time by 15%.– Built inventory reservation and order management systems </div>
                                <div className='flex flex-wrap font-bold gap-4'>
                                    <div className=' bg-gray-300 w-fit p-1 rounded'>React.js</div>
                                    <div className=' bg-gray-300 w-fit p-1 rounded'>React.js</div>
                                    <div className=' bg-gray-300 w-fit p-1 rounded'>React.js</div>
                                    <div className=' bg-gray-300 w-fit p-1 rounded'>React.js</div>
                                    <div className=' bg-gray-300 w-fit p-1 rounded'>React.js</div>
                                </div>

                            </div>
                             <div className='cols-span-1'>
                                <motion.div
                                    initial={{ opacity: 0, scale: 1.5 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.8 }}
                                >
                                    <img className="p-3 rounded" src="https://s3-figma-hubfile-images-production.figma.com/hub/file/carousel/img/8730f8b4204608f801497ad2a980b4aecdc43b94" />

                                </motion.div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default ProjectUI
