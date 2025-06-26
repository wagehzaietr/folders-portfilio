import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import useSound from 'use-sound'
import { socialLinks } from '../projectData/projectData'
import { BsCodeSlash } from 'react-icons/bs'
import { HiOutlineLightBulb } from 'react-icons/hi'
import { FaArrowRight } from 'react-icons/fa'

function Hero ({ handleModal }) {
  const [pop] = useSound('/pop.ogg', { volume: 0.3 })
  return (
    <>
      <section className='py-24 px-6 text-center max-w-6xl mx-auto'>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className='flex justify-center mb-6'
        >
          <div className='w-32 h-32 rounded-full bg-gray-200 dark:bg-gray-700 p-1 shadow-md'>
            <div className='w-full h-full rounded-full bg-white dark:bg-gray-800 flex items-center justify-center overflow-hidden'>
              <BsCodeSlash className='text-5xl text-gray-700 dark:text-gray-300' />
            </div>
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className='text-5xl font-bold mb-4 text-gray-800 dark:text-white'
        >
          Wageh Zaiter
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className='text-2xl font-medium mb-6 text-gray-600 dark:text-gray-400 flex items-center justify-center gap-2'
        >
          <HiOutlineLightBulb className='text-blue-600 dark:text-blue-400' />
          Frontend Developer
          <HiOutlineLightBulb className='text-blue-600 dark:text-blue-400' />
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className='max-w-2xl mx-auto text-lg mb-8 text-gray-700 dark:text-gray-300'
        >
          I create clean, efficient, and accessible web applications using
          modern technologies with a focus on performance and maintainability.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className='flex justify-center gap-4'
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              handleModal()
              pop()
            }}
            className='px-8 py-3 rounded-lg font-medium bg-blue-600 hover:bg-blue-700 text-white shadow-md transition-all flex items-center gap-2'
          >
            Click me <FaArrowRight />
          </motion.button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          className='flex justify-center gap-4 mt-8'
        >
          {socialLinks.map((social, index) => (
            <motion.a
              key={index}
              href={social.url}
              target='_blank'
              rel='noopener noreferrer'
              whileHover={{ y: -3 }}
              className='p-3 rounded-full bg-white dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 shadow-sm transition'
            >
              {social.icon}
            </motion.a>
          ))}
        </motion.div>
      </section>
    </>
  )
}

export default Hero
