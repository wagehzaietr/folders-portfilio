import { FaArrowLeft, FaExternalLinkAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';

export const ProjectDetail = ({ selectedProject, setSelectedProject, popClose, clickSound, theme }) => (
  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className='h-full flex flex-col'>
    {/* Project detail content */}
    <div className='mt-auto pt-4 border-t border-gray-100 flex justify-between items-center'>
      <button
        onClick={() => {
          setSelectedProject(null);
          popClose();
        }}
        className={`px-4 py-2 rounded-lg flex items-center gap-2 ${theme.button} ${theme.text}`}
      >
        <FaArrowLeft /> Back to Projects
      </button>
      {/* View project button */}
    </div>
  </motion.div>
);