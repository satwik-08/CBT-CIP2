import React from 'react';
import { FaHtml5, FaReact,FaCss3, FaNode, FaJava, FaAws } from 'react-icons/fa';
import { SiMongodb } from 'react-icons/si';
import { DiMysql, DiJavascript1 } from 'react-icons/di';
import { BiLogoDjango } from 'react-icons/bi';
import { motion } from 'framer-motion';

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: 'linear',
      repeat: Infinity,
      repeatType: 'reverse',
    },
  },
});

const technologies = [
  { icon: <FaJava className='text-7xl text-red-500' />, name: 'Java' },
  { icon: <FaHtml5 className='text-7xl text-orange-500' />, name: 'HTML5' },
  { icon: <FaCss3 className='text-7xl text-blue-500' />, name: 'CSS3' },
  { icon: <DiJavascript1 className='text-7xl text-yellow-500' />, name: 'JavaScript' },
  { icon: <FaReact className='text-7xl text-cyan-500' />, name: 'React' },
  { icon: <FaNode className='text-7xl text-green-500' />, name: 'Node.js' },
  { icon: <SiMongodb className='text-7xl text-green-500' />, name: 'MongoDB' },
  { icon: <BiLogoDjango className='text-7xl text-teal-500' />, name: 'Django' },
  { icon: <DiMysql className='text-7xl text-blue-500' />, name: 'MySQL' },
  { icon: <FaAws className='text-7xl text-yellow-500' />, name: 'AWS' }
];

const Technologies = () => {
  return (
    <div className='border-b border-neutral-800 pb-24'>
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className='my-20 text-center text-4xl'
      >
        Technologies
      </motion.h1>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className='flex flex-wrap items-center justify-center gap-4'
      >
        {technologies.map((tech, index) => (
          <motion.div
            key={index}
            variants={iconVariants(2 + index * 0.1)}
            initial='initial'
            animate='animate'
            className='flex flex-col items-center rounded-2xl border-4 border-neutral-800 p-4'
          >
            <div className='text-xl mb-2'>{tech.name}</div>
            <div className='flex items-center justify-center'>
              {tech.icon}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Technologies;
