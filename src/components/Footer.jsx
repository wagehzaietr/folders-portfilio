import { motion } from 'framer-motion'
import React from 'react'
function Footer() {
  return (
    <>
        <section className="py-20 px-6 bg-gray-100 dark:bg-gray-700">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold mb-6 text-gray-800 dark:text-white"
          >
            Let's Work Together
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg mb-8 text-gray-600 dark:text-gray-300"
          >
            I'm currently available for freelance projects or full-time positions. Reach out to discuss how I can contribute to your team or project.
          </motion.p>
        </div>
      </section>
    </>
  )
}

export default Footer