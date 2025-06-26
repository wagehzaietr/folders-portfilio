import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import useSound from 'use-sound'
import Modal from '../components/Modal'
import pop from '/pop.ogg'
import { skills,socialLinks } from '../projectData/projectData'
import { BsCodeSlash } from 'react-icons/bs'
import { HiOutlineLightBulb } from 'react-icons/hi'
import { 

  FaArrowRight,

} from 'react-icons/fa'
function Skills({skills}) {
  return (
    <>
        <section className="py-20 px-6 bg-white dark:bg-gray-800">
        <div className="max-w-5xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold text-center mb-16 text-gray-800 dark:text-white"
          >
            Technical Expertise
          </motion.h2>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, staggerChildren: 0.1 }}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6"
          >
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="flex flex-col items-center p-6 rounded-lg bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 transition-all shadow-sm"
              >
                <div className="text-4xl mb-4">
                  {skill.icon}
                </div>
                <span className="font-medium text-gray-800 dark:text-gray-200">{skill.name}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    
    </>
  )
}

export default Skills