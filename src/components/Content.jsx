import { motion } from "framer-motion"
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope ,FaArrowLeft ,FaPaperPlane } from "react-icons/fa"


function Content({ selectedProject, setSelectedProject, isdark, theme ,currentPage,pageVariants,}) {
  return (
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
  )
}

export default Content