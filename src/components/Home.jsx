import React from 'react'
import ProfilePic from '../assets/photo.png'
import { HOME_CONTENT } from '../constants'
import {motion} from "framer-motion"

const container=(delay)=>({
    hidden:{x:-100,opacity:0},
    visible:{
        x:0,
        opacity:1,
        transition:{duration:0.5,delay:delay},
    },
});

const Home = () => {
    return (
        <div className='border-b border-neutral-900 pb-4 lg:mb-35'>
            <div className='flex flex-wrap'>
                <div className='w-full lg:w-1/2'>
                    <div className='flex flex-col items-center lg:items-start'>
                        <motion.h1
                       variants={container(0)}
                       initial="hidden"
                       animate="visible"

                        className='pb-16 text-3xl font-thin tracking-tight lg:mt-16 lg:text-7xl '>Satwik Mandalemula</motion.h1>
                        <motion.span 
                         variants={container(0.5)}
                         initial="hidden"
                         animate="visible"
                          className=' bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight  text-transparent'>Full Stack Developer</motion.span>
                        <motion.p 
                         variants={container(1)}
                         initial="hidden"
                         animate="visible"
                        className='my-2 max-w-3xl py-6 text-xl mt-4 font-light tracking-tighter'>
                            {HOME_CONTENT}</motion.p>
                    </div>
                </div>

                {/* For profile image */}
                <div className="w-full lg:w-1/2 lg:p-8">
                    <div className="flex justify-center">
                        <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[500px] lg:h-[500px] overflow-hidden rounded-full shadow-lg">
                            <motion.img
                            initial={{x:100,opacity:0}}
                            animate={{x:0,opacity:1}}
                            transition={{duration:1,delay:1.2}}

                                src={ProfilePic}
                                alt="Profile Image"
                                className="w-full h-full object-cover rounded-full"
                                style={{
                                    boxShadow: "0 0 15px 10px rgba(255, 255, 255, 0.5)",
                                    background: "linear-gradient(to bottom, white, transparent)",
                                }}
                            />
                            <div className="absolute inset-0 rounded-full" style={{
                                background: "linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.5))"
                            }}></div>
                        </div>
                    </div>
                </div>



            </div>

        </div>
    )
}

export default Home


