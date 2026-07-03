import { motion } from "framer-motion";
import {
    SiJavascript,
    SiTypescript,
    SiReact,
    SiNodedotjs,
   
    SiMongodb,
    SiMysql,
    SiPostgresql,
    SiGit,
    SiGithub,
    SiDocker,
    SiTailwindcss,
    SiHtml5,
    
} from "react-icons/si";
function EducationSectionUI() {
    return (
        <div className='w-screen h-contain bg-gray-200 xl:p-20 overflow-x-hidden '>
            <div className='p-5 md:p-10 xl:p-20 '>
                <div className='xl:ml-20 xl:mr-20 uppercase   flex justify-between'>
                    <motion.div
                        initial={{ opacity: 0, x: -100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className='font-bold text-[5vh] xl:text-[50px]'><h1>Problem-solver <br></br><span className='text-gray-600'>{"<Coder>"}</span></h1></motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className='text-orange-600 font-extrabold tracking-wide text-sm'>Full Stack Developer</motion.div>
                </div>
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: false }}
                    className='flex flex-col lg:grid lg:grid-cols-3 gap-5 mt-10 '>
                    <div className='col-span-1 p-5 bg-black text-white rounded-lg'>
                        <h1 className='uppercase font-bold text-2xl tracking-wide'>Education</h1>
                        <div className='flex flex-col gap-10'>

                            <div className='mt-[100px] text-gray-400 flex gap-[20vh]   justify-between md:gap-10'>

                                <div>
                                    <div className='flex gap-5 w-10 md:w-fit'>
                                        <div className='text-orange-600'>|</div>
                                        <h1 className='font-bold text-sm'>Bachelor of Technology<br></br>Computer Science and Engineering</h1>
                                    </div>
                                </div>
                                <div className="break-words">
                                    <h1 className='uppercase font-bold text-sm text-wrap'>Xim University, Bhubaneswar, Odisha</h1>
                                    <h3 className='text-sm font-bold'>2021-2025</h3>
                                    <h4 className='text-sm'>8.88 CGPA</h4>
                                </div>
                            </div>
                            <div className=' text-gray-400 flex justify-between gap-[15vh]  md:gap-[120px]'>

                                <div className='flex gap-5'>
                                    <div className='text-orange-600'>|</div>
                                    <h1 className='font-bold text-sm'>12th Grade</h1>
                                </div>
                                <div className="">
                                    <h1 className='uppercase font-bold text-sm'>Spicer Higher Secondary School, Pune, Maharashtra</h1>
                                    <h3 className='text-sm font-bold'>2020-2021</h3>
                                    <h4 className='text-sm'>93.5%</h4>
                                </div>
                            </div>
                            <div className=' text-gray-400 flex justify-between gap-[15vh] md:gap-[120px] '>

                                <div className='flex gap-5'>
                                    <div className='text-orange-600'>|</div>
                                    <h1 className='font-bold text-sm'>10th Grade</h1>
                                </div>
                                <div>
                                    <h1 className='uppercase font-bold text-sm'>Spicer Higher Secondary School, Pune, Maharashtra</h1>
                                    <h3 className='text-sm font-bold'>2018-2019</h3>
                                    <h4 className='text-sm'>94.6%</h4>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className='col-span-2  bg-black text-white rounded-lg p-5 '>
                        <h1 className='uppercase font-bold text-2xl tracking-wide'>experience</h1>
                        <div className='p-10 flex flex-col gap-10  text-gray-400'>
                            <div className='flex  gap-[100px] uppercase'>
                                <h1 className='uppercase font-bold tracking-wide'>Software engineer intern</h1>
                                <div className='text-sm'>
                                    <h1>MindFire Solutions</h1>
                                    <h1>Bhubaneswar, Odisha</h1>
                                    <h1 className='text-orange-600 text-xs'>Jan 2025-Feb 2025</h1>
                                </div>
                            </div>
                            <div className='flex gap-[85px] uppercase'>
                                <h1 className='uppercase font-bold tracking-wide'>Full stack developer intern</h1>
                                <div className='text-sm'>
                                    <h1>Startup</h1>
                                    <h1>Bhubaneswar, Odisha</h1>
                                    <h1 className='text-orange-600 text-xs'>Jan 2025-Feb 2025</h1>
                                </div>
                            </div>
                        </div>
                        <div className='mt-2 '>
                            <div className='mb-10'>
                                <h1 className='uppercase font-bold text-2xl tracking-wide'>skills</h1>
                            </div>
                            <div className='flex flex-wrap gap-5 text-sm text-gray-400'>
                                <div className='flex gap-5'>
                                    <div className='text-orange-600'>|</div>
                                    <div>
                                        <div className='flex flex-col gap-1'>
                                            <div>
                                                <SiJavascript className='text-white text-xl' />
                                            </div>
                                            <div className='text-xs font-bold'>
                                                JavaScript
                                            </div>
                                            
                                        </div>
                                    </div>
                                </div>

                                <div className='flex gap-5'>
                                    <div className='text-orange-600'>|</div>
                                    <div>
                                        <div className='flex flex-col gap-1'>
                                            <div>
                                                <SiTypescript className='text-white text-xl' />
                                            </div>
                                            <div className='text-xs font-bold'>
                                                TypeScript
                                            </div>
                                            
                                        </div>
                                    </div>
                                </div>

                                <div className='flex gap-5'>
                                    <div className='text-orange-600'>|</div>
                                    <div>
                                        <div className='flex flex-col gap-1'>
                                            <div>
                                                <SiReact className='text-white text-xl' />
                                            </div>
                                            <div className='text-xs font-bold'>
                                                React.js
                                            </div>
                                           
                                        </div>
                                    </div>
                                </div>

                                <div className='flex gap-5'>
                                    <div className='text-orange-600'>|</div>
                                    <div>
                                        <div className='flex flex-col gap-1'>
                                            <div>
                                                <SiMongodb className='text-white text-xl' />
                                            </div>
                                            <div className='text-xs font-bold'>
                                                MongoDB
                                            </div>
                                            
                                        </div>
                                    </div>
                                </div>

                                <div className='flex gap-5'>
                                    <div className='text-orange-600'>|</div>
                                    <div>
                                        <div className='flex flex-col gap-1'>
                                            <div>
                                                <SiPostgresql className='text-white text-xl' />
                                            </div>
                                            <div className='text-xs font-bold'>
                                                PostgreSQL
                                            </div>
                                           
                                        </div>
                                    </div>
                                </div>

                                <div className='flex gap-5'>
                                    <div className='text-orange-600'>|</div>
                                    <div>
                                        <div className='flex flex-col gap-1'>
                                            <div>
                                                <SiNodedotjs className='text-white text-xl' />
                                            </div>
                                            <div className='text-xs font-bold'>
                                                Node.js
                                            </div>
                                           
                                        </div>
                                    </div>
                                </div>
                                <div className='flex gap-5'>
                                    <div className='text-orange-600'>|</div>
                                    <div>
                                        <div className='flex flex-col gap-1'>
                                            <div>
                                                <SiMysql className='text-white text-xl' />
                                            </div>
                                            <div className='text-xs font-bold'>
                                                MySQL
                                            </div>
                                           
                                        </div>
                                    </div>
                                </div>
                                <div className='flex gap-5'>
                                    <div className='text-orange-600'>|</div>
                                    <div>
                                        <div className='flex flex-col gap-1'>
                                            <div>
                                                <SiHtml5 className='text-white text-xl' />
                                            </div>
                                            <div className='text-xs font-bold'>
                                                HTML
                                            </div>
                                           
                                        </div>
                                    </div>
                                </div>
                                <div className='flex gap-5'>
                                    <div className='text-orange-600'>|</div>
                                    <div>
                                        <div className='flex flex-col gap-1'>
                                            <div>
                                                <SiDocker className='text-white text-xl' />
                                            </div>
                                            <div className='text-xs font-bold'>
                                                Docker
                                            </div>
                                           
                                        </div>
                                    </div>
                                </div>
                                <div className='flex gap-5'>
                                    <div className='text-orange-600'>|</div>
                                    <div>
                                        <div className='flex flex-col gap-1'>
                                            <div>
                                                <SiGithub className='text-white text-xl' />
                                            </div>
                                            <div className='text-xs font-bold'>
                                                GitHub
                                            </div>
                                           
                                        </div>
                                    </div>
                                </div>
                                <div className='flex gap-5'>
                                    <div className='text-orange-600'>|</div>
                                    <div>
                                        <div className='flex flex-col gap-1'>
                                            <div>
                                                <SiGit className='text-white text-xl' />
                                            </div>
                                            <div className='text-xs font-bold'>
                                                Git
                                            </div>
                                           
                                        </div>
                                    </div>
                                </div>
                                <div className='flex gap-5'>
                                    <div className='text-orange-600'>|</div>
                                    <div>
                                        <div className='flex flex-col gap-1'>
                                            <div>
                                                <SiTailwindcss className='text-white text-xl' />
                                            </div>
                                            <div className='text-xs font-bold'>
                                                Tailwind CSS
                                            </div>
                                           
                                        </div>
                                    </div>
                                </div>








                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}

export default EducationSectionUI
