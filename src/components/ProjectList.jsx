import { motion } from 'framer-motion';
import { projectData } from '../projectData/projectData';

export const ProjectList = ({ setSelectedProject, clickSound, theme }) => (
  <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
    {projectData.map(project => (
      <motion.div
        key={project.id}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className={`border rounded-xl p-4 cursor-pointer transition-all ${theme.card} ${theme.border}`}
        onClick={() => {
          setSelectedProject(project);
          clickSound();
        }}
      >
        {/* Project card content */}
      </motion.div>
    ))}
  </div>
);