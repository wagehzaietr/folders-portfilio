import React from 'react'
import { motion } from 'framer-motion'
import { FaHeart } from 'react-icons/fa'
import { Tilt } from 'react-tilt'
import { projectData } from '../projectData/projectData'



function Projects ({
  setSelectedProject,
  clickSound,
  projectData,
  theme,
  isdark,
}) {
  return (
    <div>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
        {projectData.map(project => (
          <div
            key={project.id}
          >
            <motion.div
              whileHover={{ opacity: 1 }}
              whileTap={{ scale: 0.95 }}
              className={`relative border rounded-xl drop-shadow-lg backdrop-blur-md p-4 cursor-pointer transition-all ${theme.card} ${theme.border}`}
              onClick={() => {
                setSelectedProject(project)
                clickSound()
              }}
            >
              <div
                className={`text-3xl mb-3 p-2 flex items-center justify-center backdrop-blur-lg drop-shadow-lg ${
                  isdark ? 'bg-gray-750' : 'bg-white'
                }`}
              >
                <img
                  className='rounded-lg h-full'
                  src={project.image}
                  alt={project.title}
                  loading='lazy'
                />
              </div>
              <h3 className='text-lg font-semibold mb-1'>{project.title}</h3>
              <p className={`text-sm mb-3 line-clamp-2 ${theme.secondaryText}`}>
                {project.description}
              </p>
              <div className='flex flex-wrap gap-1'>
                {project.tags.slice(0, 3).map((tech, index) => (
                  <motion.span
                    key={index}
                    whileHover={{ scale: 1.1 }}
                    className={`text-xs px-2 py-1 rounded ${
                      isdark
                        ? 'bg-gray-700 text-blue-400'
                        : 'bg-blue-50 text-blue-600'
                    }`}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Projects
