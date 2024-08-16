import React from 'react';
import { motion } from 'framer-motion';
import { CERTIFICATIONS } from '../constants';

const Certifications = () => {
  return (
    <section className='services' id='services'>
      <div className='container mx-auto'>
        <motion.h1 
          className='my-20 text-center text-4xl'
          whileInView={{opacity:1,y:0}}
        initial={{opacity:0,y:-100}}
        transition={{duration:1.5}}
        >
          Certifications
        </motion.h1>
        
        <div className='services-list grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-10'>
          {CERTIFICATIONS.map((certification, index) => (
            <motion.div
              key={index}
              className='relative p-6 bg-transparent rounded-lg shadow-md transition-transform duration-500 hover:bg-neutral-900 hover:transform hover:-translate-y-4'
              whileHover={{ scale: 1.05 }}
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 50 }}
              transition={{ duration: 0.5 }}
            >
              <div className='flex justify-center mb-4'>
                <motion.a 
                  href={certification.link} 
                  target='blank'
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <motion.img
                    src={certification.image}
                    alt={`${certification.title} icon`}
                    className='w-24 h-24 object-contain'
                    whileHover={{ scale: 1.1 }}
                  />
                </motion.a>
              </div>
              <motion.h2 
                className='text-2xl font-semibold mb-4 text-center'
                whileHover={{ color: '#00eeff' }}
              >
                {certification.title}
              </motion.h2>
              <motion.p 
                className='text-sm text-neutral-300 text-center mb-4'
                whileHover={{ color: '#00eeff' }}
              >
                {certification.description}
              </motion.p>
              <div className='flex flex-wrap justify-center mb-4'>
                {certification.technologies.map((tech, index) => (
                  <motion.span
                    key={index}
                    className='mr-2 mb-2 rounded bg-neutral-800 px-2 py-1 text-xs font-medium text-cyan-400'
                    whileHover={{ scale: 1.1 }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
              <motion.a
                href={certification.link}
                target='_blank'
                rel='noopener noreferrer'
                className='absolute bottom-4 left-1/2 transform -translate-x-1/2 inline-block py-2 px-6 bg-cyan-500 text-neutral-800 font-semibold rounded-full transition-all duration-500 opacity-0 hover:opacity-100 hover:shadow-cyan-400/80'
                whileHover={{ scale: 1.1 }}
              >
                
              </motion.a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
