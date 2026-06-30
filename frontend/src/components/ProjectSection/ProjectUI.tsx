
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
                    <h1 className='uppercase text-[50px] font-bold tracking-wide '>Projects</h1>
                </motion.div>
                <div className='flex flex-col gap-10 w-full '>
                    <div className=' mt-10 w-full '>
                        <hr className="border-t-3 border-red-500 " />
                        <div className='flex grid grid-cols-4 w-full mt-10'>
                            <div className='col-span-1'>001</div>
                            <div className='col-span-2 flex flex-col gap-4'>
                                <div className='uppercase font-bold text-2xl tracking-wide underline'>
                                    <a href="https://github.com/Hephzibah7/ArtSpace">Online Art MarketPlace (ArtSpace)</a>
                                </div>
                                <div className='text-sm text-gray-400'>ArtSpace is a scalable distributed e-commerce platform where:
	<br></br>• Artists can upload and manage artwork
	<br></br>• Users can search and purchase artwork
	<br></br>• System handles concurrent checkout safely
	<br></br>• Search remains highly available and fast
	<br></br>• Services scale independently
	<br></br>• Payments and inventory remain strongly consistent
 </div>
                                <div className='flex flex-wrap font-bold gap-4'>
                                    <div className=' bg-gray-300 w-fit p-1 rounded'>React.js</div>
                                    <div className=' bg-gray-300 w-fit p-1 rounded'>Node.js.js</div>
                                    <div className=' bg-gray-300 w-fit p-1 rounded'>MongoDB.js</div>
                                    <div className=' bg-gray-300 w-fit p-1 rounded'>PostgreSQL</div>
                                    <div className=' bg-gray-300 w-fit p-1 rounded'>TypeScript</div>
                                </div>

                            </div>
                            <div className='cols-span-1'>
                                <motion.div
                                    initial={{ opacity: 0, scale: 1.5 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.8 }}
                                >
                                    <img className=" rounded object-contain" src="/pic9.png" />

                                </motion.div>
                            </div>
                        </div>
                    </div>

                    <div className=' mt-10 w-full '>
                        <hr className="border-t-3 border-red-500 " />
                        <div className=' grid grid-cols-4 w-full mt-10'>
                            <div className='col-span-1'>001</div>
                            <div className='col-span-2 flex flex-col gap-4'>
                                <div className='uppercase font-bold text-2xl tracking-wide underline'>
                                   <a href="https://github.com/Hephzibah7/Finance_DashBoard_System"> Finance DashBoard System</a>
                                </div>
                                <div className='text-sm text-gray-400'>Developed a secure backend system for financial record management with authentication, role-based authorization, user
administration, and analytics dashboards. </div>
                                <div className='flex flex-wrap font-bold gap-4'>
                                    <div className=' bg-gray-300 w-fit p-1 rounded'>TypeScript</div>
                                    <div className=' bg-gray-300 w-fit p-1 rounded'>Node.js</div>
                                    <div className=' bg-gray-300 w-fit p-1 rounded'>Express.js</div>
                                    <div className=' bg-gray-300 w-fit p-1 rounded'>MongoDB</div>
                                    <div className=' bg-gray-300 w-fit p-1 rounded'>Redis</div>
                                </div>

                            </div>
                             <div className='cols-span-1'>
                                <motion.div
                                    initial={{ opacity: 0, scale: 1.5 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.8 }}
                                >
                                    <img className="p-3 rounded object-cover " src="/pic10.png" />

                                </motion.div>
                            </div>
                        </div>
                    </div>

                    <div className=' mt-10 w-full '>
                        <hr className="border-t-3 border-red-500 " />
                        <div className=' grid grid-cols-4 w-full mt-10'>
                            <div className='col-span-1'>001</div>
                            <div className='col-span-2 flex flex-col gap-4'>
                                <div className='uppercase font-bold text-2xl tracking-wide underline'>
                                    <a href="https://github.com/Hephzibah7/Personal-Finance-Tracker">Personal Finance tracker</a>
                                </div>
                                <div className='text-sm text-gray-400'>Developed a tracker that helps users to track their monthly and yearly expenditures. </div>
                                <div className='flex flex-wrap font-bold gap-4'>
                                    <div className=' bg-gray-300 w-fit p-1 rounded'>React.js</div>
                                    <div className=' bg-gray-300 w-fit p-1 rounded'>TypeScript</div>
                                    <div className=' bg-gray-300 w-fit p-1 rounded'>Node.js</div>
                                    <div className=' bg-gray-300 w-fit p-1 rounded'>MySQL</div>
                                    <div className=' bg-gray-300 w-fit p-1 rounded'>Docker</div>
                                </div>

                            </div>
                             <div className='cols-span-1'>
                                <motion.div
                                    initial={{ opacity: 0, scale: 1.5 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.8 }}
                                >
                                    <img className="p-3 rounded" src="/pic11.png"/>
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
