import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

function ContactUI() {
  return (
     <div className='w-full h-contain   bg-gray-200 pt-20 text-gray-400'>
     <motion.div
     initial={{ opacity: 0, y: 80 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: false }}
     >
         <div className='p-10'>
        <div className='w-full pl-20 pr-20  mr-20'>
        <div className=''>
            <div>
                <h1 className='text-sm text-gray-400'>+91 9890723589</h1>
                <h2 className='text-black font-bold'>hephzibahranjan@gmail.com</h2>
            </div>
        </div>
        <div className='flex justify-between mt-20'>
            <div className=' grid grid-cols-2 gap-10 '>
                <div className=''>
                    <h1 className='text-sm mb-2'>Navigation</h1>
                    <div className='flex flex-col gap-1 text-black'>
                    <h1>Home</h1>
                    <h1>Profile</h1>
                    <h1>Projects</h1>
                    <h1>Coding Profile</h1>
                    <h1>Contact</h1>
                    <h1>404</h1>
                </div>
                
                </div>
                 <div className=''>
                    <h1 className='text-sm mb-2'>Navigation</h1>
                    <div className='flex flex-col gap-1 text-black'>
                    <a href="https://www.linkedin.com/in/hephzibahranjan/"><h1>LinkedIn <span><FontAwesomeIcon icon={faArrowUpRightFromSquare} className='text-orange-600' /></span></h1></a>
                    <a href="https://github.com/Hephzibah7"><h1>GitHub <span><FontAwesomeIcon icon={faArrowUpRightFromSquare} className='text-orange-600' /></span></h1></a>
                    <a href="https://leetcode.com/u/Hermione7"><h1>LeetCode <span><FontAwesomeIcon icon={faArrowUpRightFromSquare} className='text-orange-600' /></span></h1></a>
                    <a href="https://medium.com/@hephzibahranjan"><h1>Medium <span><FontAwesomeIcon icon={faArrowUpRightFromSquare} className='text-orange-600' /></span></h1></a>
                </div>
                
                </div>
            </div>
            <div className=''>
                <div className='uppercase  hidden lg:block lg:text-[150px] font-bold text-black overflow-x-hidden'>Hephzibah</div>
                
            </div>
            
        </div>
        <div>

        </div>
        
      </div>
      </div>
      <div className='bg-black flex justify-center p-1'>
        <div className='text-white text-xs'>Designed with love, all rights reserved for Hephzibah Ranjan</div>
      </div>
     </motion.div>
    </div>
  )
}

export default ContactUI;
