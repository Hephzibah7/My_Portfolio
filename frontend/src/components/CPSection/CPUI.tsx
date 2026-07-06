import { motion } from "framer-motion";
function CPUI() {
    return (
        <div className='w-full h-contain lg:pl-20 lg:pr-20 bg-gray-200'>
            <div className='w-full lg:pl-20 lg:pr-20 p-10'>
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className='lg:p-20 lg:ml-30 lg:mr-20 lg:pl-20  gap-20'>
                    <div className='font-bold tracking-wide p-1 h-contain bg-gray-300 rounded uppercase w-fit'>why choose me?</div>
                    <h1 className='uppercase text-[50px] font-bold tracking-wide '>Coding Profile</h1>
                </motion.div>
                <div className='flex gap-5'>
                    <div className='text-orange-600'>|</div>
                    <div className='font-bold  text-xs m-2 tracking-wide p-1 bg-gray-300 rounded uppercase w-fit'>Consistency Oriented</div>
                </div>
                <div className='flex flex-col  lg:w-fit gap-10 lg:grid lg:grid-flow-col lg:grid-rows-3 lg:gap-7'>

                    <motion.div
                        initial={{ opacity: 0, x: 100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="row-span-2 row-start-2">

                        <img className="rounded" src="/pic2.png" />
                    </motion.div>
                    <div className="row-start-1 row-end-4">
                        <img className="rounded" src="/pic1.png" />
                    </div>
                    <motion.div
                        initial={{ opacity: 0, x: -100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="row-start-1 row-end-4">
                        <img className="rounded" src="/pic3.png" />
                    </motion.div>
                </div>
                <div className='flex gap-5 mt-10'>
                    <div className='text-orange-600'>|</div>
                    <div className='font-bold  text-xs m-2 tracking-wide p-1 bg-gray-300 rounded uppercase w-fit'>2+ Years of consistent hardwork</div>
                </div>
                <div className="flex flex-col gap-10 lg:grid lg:grid-flow-col lg:grid-rows-2 lg:gap-4 w-full mt-10">
                    <motion.div
                        initial={{ opacity: 0, x: 100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="row-span-2">
                        <img className="rounded" src="/pic12.png" />
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: -100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="row-start-1 col-span-2">
                        <img className="rounded" src="/pic5.png" />
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: -100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="row-start-2 col-span-2 row-span-2">
                        <img className="rounded" src="/pic6.png" />
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

export default CPUI
