import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import useSound from 'use-sound'
import {Tilt} from 'react-tilt'
import { projectData } from '../projectData/projectData'
import { skillsData } from '../projectData/projectData'
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaEnvelope,
  FaExternalLinkAlt,
  FaArrowLeft,
  FaCode,
  FaUser,
  FaPaperPlane,
  FaHeart
} from 'react-icons/fa'
import {
  SiReact,
  SiJavascript,
  SiTypescript,
  SiTailwindcss,
  SiNodedotjs,
  SiSupabase,
  SiFramer
} from 'react-icons/si'
import { lazy } from 'react'

const Projects = lazy (() => import('./Projects'))

const Modal = ({ isdark, isOpen, onClose, initialPage = 'projects' }) => {
  const [popClose] = useSound('/closed.wav', { volume: 0.5 })
  const [popOpen] = useSound('/clicksound.mp3', { volume: 0.5 })
  const [clickSound] = useSound('/pop.ogg', { volume: 0.3 })
  const [selectedProject, setSelectedProject] = useState(null)
  const [currentPage, setCurrentPage] = useState(initialPage)
  const [likes, setLikes] = useState({})
  const isMobile = window.innerWidth < 768;

  // Page transition animations
  const pageVariants = {
    initial: {
      opacity: 0,
      x: currentPage === 'projects' ? -50 : 50
    },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 30
      }
    },
    exit: {
      opacity: 0,
      x: currentPage === 'projects' ? -50 : 50,
      transition: { duration: 0.2 }
    }
  }

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
      popOpen()
    } else {
      document.body.style.overflow = 'auto'
    }
  }, [isOpen, popOpen])

  const handleNavigation = page => {
    setCurrentPage(page)
    clickSound()
    setSelectedProject(null)
  }

  const handleClose = () => {
    popClose()
    onClose()
  }

  const toggleisdark = () => {
    setisdark(!isdark)
    clickSound()
  }

  // Theme configuration
  const theme = {
    background: isdark ? 'bg-gray-900' : 'bg-white',
    text: isdark ? 'text-gray-100' : 'text-gray-900',
    border: isdark ? 'border-gray-700' : 'border-gray-200',
    card: isdark
      ? 'bg-gray-800 hover:bg-gray-750'
      : 'bg-gray-50 hover:bg-gray-100',
    button: isdark
      ? 'bg-gray-700 hover:bg-gray-650'
      : 'bg-gray-100 hover:bg-gray-200',
    primaryButton: isdark
      ? 'bg-blue-600 hover:bg-blue-700'
      : 'bg-blue-500 hover:bg-blue-600',
    secondaryText: isdark ? 'text-gray-400' : 'text-gray-600',
    mutedText: isdark ? 'text-gray-500' : 'text-gray-400'
  }

  // Enhanced skill icons with proper React Icons
  const enhancedSkillsData = skillsData.map(skill => {
    const icons = {
      React: <SiReact className='text-blue-500' />,
      JavaScript: <SiJavascript className='text-yellow-400' />,
      TypeScript: <SiTypescript className='text-blue-600' />,
      'Tailwind CSS': <SiTailwindcss className='text-cyan-500' />,
      'Node.js': <SiNodedotjs className='text-green-500' />,
      Supabase: <SiSupabase className='text-emerald-500' />,
      'Framer Motion': <SiFramer className='text-pink-500' />,
      'UI/UX Design': <FaCode className='text-purple-500' />
    }
    return {
      ...skill,
      icon: icons[skill.name] || <FaCode className='text-gray-500' />
    }
  })

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className={`fixed inset-0 z-50 flex items-center justify-center p-4 backdrop-blur-sm ${
            isdark ? 'bg-black/70' : 'bg-black/40'
          }`}
          onClick={handleClose}
        >
          <motion.div
            initial={{ y: 50, opacity: 0, scale: 0.95 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 50, opacity: 0, scale: 0.95 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className={`relative w-full max-w-4xl rounded-xl shadow-2xl overflow-hidden ${theme.background} ${theme.text} border ${theme.border}`}
            onClick={e => e.stopPropagation()}
            style={{
              boxShadow: isdark
                ? '0 30px 60px rgba(0, 0, 0, 0.4)'
                : '0 30px 60px rgba(0, 0, 0, 0.15)'
            }}
          >
            {/* Title bar */}
            <div
              className={`flex items-center justify-between p-4 ${
                isdark ? 'bg-gray-800' : 'bg-gray-100'
              } border-b ${theme.border}`}
            >
              <div className='flex space-x-2'>
                <motion.button
                  onClick={handleClose}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className='w-3 h-3 rounded-full bg-red-500 flex items-center justify-center hover:bg-red-600 transition-colors'
                  aria-label='Close modal'
                >
                  <span className='text-red-100 text-xs opacity-0 hover:opacity-100'>
                    ×
                  </span>
                </motion.button>
                <motion.button
                  onClick={toggleisdark}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className='w-3 h-3 rounded-full bg-yellow-500 hover:bg-yellow-600 transition-colors'
                  aria-label='Toggle dark mode'
                />
                <div className='w-3 h-3 rounded-full bg-green-500 opacity-50' />
              </div>

              <div className='text-sm font-medium'>
                {selectedProject
                  ? selectedProject.title
                  : currentPage === 'projects'
                  ? 'Projects'
                  : currentPage === 'about'
                  ? 'About Me'
                  : 'Contact'}
              </div>

              <div className='w-12' />
            </div>

            {/* Navigation */}
            <div className={`flex border-b ${theme.border}`}>
              <motion.button
                onClick={() => handleNavigation('projects')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`flex-1 py-3 text-sm font-medium transition-colors ${
                  currentPage === 'projects'
                    ? isdark
                      ? 'text-blue-400 border-b-2 border-blue-400'
                      : 'text-blue-600 border-b-2 border-blue-600'
                    : theme.secondaryText
                }`}
              >
                <FaCode className='inline mr-2' /> Projects
              </motion.button>
              <motion.button
                onClick={() => handleNavigation('about')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`flex-1 py-3 text-sm font-medium transition-colors ${
                  currentPage === 'about'
                    ? isdark
                      ? 'text-blue-400 border-b-2 border-blue-400'
                      : 'text-blue-600 border-b-2 border-blue-600'
                    : theme.secondaryText
                }`}
              >
                <FaUser className='inline mr-2' /> About
              </motion.button>
              <motion.button
                onClick={() => handleNavigation('contact')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`flex-1 py-3 text-sm font-medium transition-colors ${
                  currentPage === 'contact'
                    ? isdark
                      ? 'text-blue-400 border-b-2 border-blue-400'
                      : 'text-blue-600 border-b-2 border-blue-600'
                    : theme.secondaryText
                }`}
              >
                <FaEnvelope className='inline mr-2' /> Contact
              </motion.button>
            </div>

            {/* Content Area */}
            <div
              className={`p-6 min-h-[400px] max-h-[70vh] overflow-y-auto ${theme.background}`}
            >
              {selectedProject ? (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className='h-full flex flex-col'
                >
                  <div className='flex flex-col md:flex-row gap-6 mb-8'>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 }}
                      className={`rounded-xl overflow-hidden ${
                        isdark ? 'bg-gray-800' : 'bg-gray-100'
                      } flex-shrink-0`}
                    >
                      <img
                        className='w-full md:w-64 h-48 object-cover'
                        src={selectedProject.image}
                        alt={selectedProject.title}
                      />
                    </motion.div>
                    <div>
                      <motion.h2 
                        className='text-2xl font-bold mb-2'
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                      >
                        {selectedProject.title}
                      </motion.h2>
                      <motion.p 
                        className={`mb-4 ${theme.secondaryText}`}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                      >
                        {selectedProject.description}
                      </motion.p>

                      <div className='mb-6'>
                        <motion.h3
                          className={`text-sm font-medium uppercase mb-3 ${theme.mutedText}`}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.4 }}
                        >
                          Technologies Used
                        </motion.h3>
                        <motion.div 
                          className='flex flex-wrap gap-2'
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.5 }}
                        >
                          {selectedProject.tags.map((tech, index) => (
                            <motion.span
                              key={index}
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                              className={`px-3 py-1 rounded-full text-sm font-medium ${
                                isdark
                                  ? 'bg-gray-700 text-blue-400'
                                  : 'bg-blue-50 text-blue-600'
                              }`}
                            >
                              {tech}
                            </motion.span>
                          ))}
                        </motion.div>
                      </div>
                    </div>
                  </div>

                  <div className='mt-auto border-t border-gray-100 flex justify-between items-center py-3'>
                    <motion.button
                      onClick={() => {
                        setSelectedProject(null)
                        popClose()
                      }}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`px-3 py-1.5 sm:px-4 sm:py-2 text-sm sm:text-base rounded-lg flex items-center gap-2 ${theme.button} ${theme.text}`}
                    >
                      <FaArrowLeft /> <span>Back</span>
                    </motion.button>
                    <motion.a
                      href={selectedProject.link}
                      target='_blank'
                      rel='noopener noreferrer'
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`px-3 py-1.5 sm:px-4 sm:py-2 text-sm sm:text-base rounded-lg flex items-center gap-2 ${theme.primaryButton} text-white`}
                    >
                      <span>View</span> <FaExternalLinkAlt />
                    </motion.a>
                  </div>
                </motion.div>
              ) : currentPage === 'projects' ? (
                <motion.div
                  key="projects"
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  variants={pageVariants}
                  className="h-full"
                >
                  <Projects theme={theme} selectedProject={selectedProject} setSelectedProject={setSelectedProject} clickSound={clickSound}  isdark={isdark} projectData={projectData} />
                </motion.div>
              ) : currentPage === 'about' ? (
                <motion.div
                  key="about"
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  variants={pageVariants}
                  className='h-full flex flex-col'
                >
                  <div className='mb-8'>
                    <motion.h2 
                      className='text-2xl font-bold mb-4'
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 }}
                    >
                      About Me
                    </motion.h2>
                    <motion.p 
                      className={`mb-6 ${theme.secondaryText}`}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      Frontend developer specializing in React and modern web
                      technologies. Passionate about creating intuitive user
                      experiences with clean, efficient code.
                    </motion.p>

                    <motion.h3
                      className={`text-sm font-medium uppercase mb-3 ${theme.mutedText}`}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                    >
                      Technical Skills
                    </motion.h3>
                    <motion.div 
                      className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3'
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.4 }}
                    >
                      {enhancedSkillsData.map((skill, index) => (
                        <motion.div
                          key={index}
                          whileHover={{ y: -3, boxShadow: isdark ? '0 4px 8px rgba(0,0,0,0.2)' : '0 4px 8px rgba(0,0,0,0.1)' }}
                          transition={{ type: 'spring', stiffness: 300 }}
                          className={`flex items-center p-3 rounded-lg ${theme.button}`}
                        >
                          <div className='text-xl mr-3'>{skill.icon}</div>
                          <span className='font-medium'>{skill.name}</span>
                        </motion.div>
                      ))}
                    </motion.div>
                  </div>

                  <div className='mt-auto pt-4 border-t border-gray-100'>
                    <h3
                      className={`text-sm font-medium uppercase mb-3 ${theme.mutedText}`}
                    >
                      Connect With Me
                    </h3>
                    <div className='flex gap-3'>
                      {[
                        { icon: <FaGithub />, url: 'https://github.com' },
                        { icon: <FaLinkedin />, url: 'https://linkedin.com' },
                        { icon: <FaTwitter />, url: 'https://twitter.com' }
                      ].map((social, index) => (
                        <motion.a
                          key={index}
                          href={social.url}
                          target='_blank'
                          rel='noopener noreferrer'
                          whileHover={{ y: -3, scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          className={`p-3 rounded-full ${theme.button}`}
                        >
                          {social.icon}
                        </motion.a>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="contact"
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  variants={pageVariants}
                  className='h-full flex flex-col'
                >
                  <div className='mb-8'>
                    <motion.h2 
                      className='text-2xl font-bold mb-1'
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 }}
                    >
                      Get In Touch
                    </motion.h2>
                    <motion.p 
                      className={`mb-6 ${theme.secondaryText}`}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      Have a project in mind or want to collaborate? I'd love to
                      hear from you!
                    </motion.p>

                    <div className='space-y-4'>
                      {['Name', 'Email', 'Message'].map((field, index) => (
                        <motion.div
                          key={field}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.1 + index * 0.1 }}
                        >
                          <label
                            className={`block text-sm font-medium mb-1 ${theme.secondaryText}`}
                          >
                            {field}
                          </label>
                          {field === 'Message' ? (
                            <textarea
                              className={`w-full px-4 py-2 rounded-lg border ${
                                theme.border
                              } ${isdark ? 'bg-gray-800' : 'bg-white'}`}
                              rows='4'
                              placeholder={`Your ${field.toLowerCase()} here...`}
                            />
                          ) : (
                            <input
                              type={field === 'Email' ? 'email' : 'text'}
                              className={`w-full px-4 py-2 rounded-lg border ${
                                theme.border
                              } ${isdark ? 'bg-gray-800' : 'bg-white'}`}
                              placeholder={
                                field === 'Email' ? 'your@email.com' : `Your ${field.toLowerCase()}`
                              }
                            />
                          )}
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  <div className='mt-auto pt-4 border-t border-gray-100 flex justify-between'>
                    <motion.button
                      onClick={() => handleNavigation('about')}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`px-4 py-2 rounded-lg flex items-center gap-2 ${theme.button} ${theme.text}`}
                    >
                      <FaArrowLeft /> Back
                    </motion.button>
                    <motion.button
                      onClick={() => {
                        clickSound()
                        alert('Message sent! (This is a demo)')
                      }}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`px-4 py-2 rounded-lg flex items-center gap-2 ${theme.primaryButton} text-white`}
                    >
                      Send <FaPaperPlane />
                    </motion.button>
                  </div>
                </motion.div>
              )}
            </div>

            {/* Status bar */}
            <div
              className={`px-4 py-2 text-xs ${
                isdark
                  ? 'bg-gray-800 text-gray-400'
                  : 'bg-gray-100 text-gray-500'
              } border-t ${theme.border} flex justify-between items-center`}
            >
              <div>
                {currentPage === 'projects' &&
                  !selectedProject &&
                  `${projectData.length} projects`}
                {currentPage === 'about' &&
                  `${enhancedSkillsData.length} skills`}
              </div>
              <div>© {new Date().getFullYear()} Wageh Zaiter</div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default Modal