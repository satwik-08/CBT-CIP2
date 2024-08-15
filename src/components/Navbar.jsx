import React from 'react'
import logo from '../assets/logo.png'
import { FaLinkedin } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'
import { FaSquareXTwitter } from 'react-icons/fa6'
import { FaInstagram } from 'react-icons/fa'

const Navbar = () => {
  return (
    <nav className=' mb-20 flex items-center justify-between py-6'>
        <div className='flex flex-shrink-0 items-center'>
        <img className='mx-2 w-20' src={logo} alt="logo" />
        </div>
        <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
            <a href='https://www.linkedin.com/in/msatwik/' target='blank' className='hover:text-blue-600'>
            <FaLinkedin className='cursor-pointer'/>
            </a>
            <a href='https://github.com/satwik-08' target='blank' className='hover:text-blue-600'>
            <FaGithub className='cursor-pointer' />
            </a>
            <a href='https://x.com/Satwikm08' target='blank' className='hover:text-blue-600'>
            <FaSquareXTwitter className='cursor-pointer' />
            </a>
            <a href='https://www.instagram.com/satwik._.m/' target='blank' className='hover:text-blue-600'>
            <FaInstagram className='cursor-pointer'/>
            </a>
        </div>
    </nav>
  )
}

export default Navbar
