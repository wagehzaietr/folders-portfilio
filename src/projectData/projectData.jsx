import { 
  FaReact, 
  FaJs, 
  FaNodeJs, 
  FaFigma, 
  FaGithub, 
  FaLinkedin, 
  FaTwitter,
  FaArrowRight,
  FaEnvelope
} from 'react-icons/fa'
import { 
  SiTypescript, 
  SiTailwindcss, 
  SiSupabase, 
  SiFramer 
} from 'react-icons/si'



export const projectData = [
  {
    id: 1,
    title: 'RapidQr',
    category: 'web',
    image: '/project1.jpg',
    tags: ['React', 'Tailwind CSS'],
    description: 'QR code generator built with React and Tailwind CSS',
    link: 'https://rapidqcode.netlify.app',
    icon: '🔗'
  },
  {
    id: 2,
    title: 'Pixelgramm Social Platform',
    category: 'Full Stack',
    image: '/project2.jpg',
    tags: ['React', 'Supabase', 'Clerk', 'Tailwind'],
    description: 'Instagram-like social platform with authentication and real-time feeds',
    link: 'https://pixelgramm.netlify.app',
    icon: '📸'
  },
  {
    id: 3,
    title: 'Almahairi Fragrances',
    category: 'eCommerce',
    image: '/project3.jpg',
    tags: ['React', 'Supabase', 'i18n'],
    description: 'Multilingual perfume eCommerce site with lazy loading',
    link: 'https://almahairi.netlify.app',
    icon: '🧴'
  },
  {
    id: 4,
    title: 'Joblife Website',
    category: 'web',
    image: '/project4.jpg',
    tags: ['React', 'Framer Motion', 'Tailwind'],
    description: 'Job search landing page with animations',
    link: 'https://job-life.netlify.app',
    icon: '💼'
  },
  {
    id: 5,
    title: 'Game Store',
    category: 'eCommerce',
    image: '/project5.jpg',
    tags: ['React', 'Tailwind', 'UI/UX'],
    description: 'Responsive game store concept with lazy loading',
    link: 'https://enebac.netlify.app',
    icon: '🎮'
  },
  {
    id: 6,
    title: 'BG Remover AI',
    category: 'AI Tool',
    image: './project6.jpg',
    tags: ['React', 'Clerk', 'IMG.LYs'],
    description: 'AI-powered background removal tool',
    link: 'https://bgremoverwz.netlify.app',
    icon: '🖼️'
  }
];


 export const skills = [
    { name: 'React', icon: <FaReact className="text-blue-600" /> },
    { name: 'JavaScript', icon: <FaJs className="text-yellow-500" /> },
    { name: 'TypeScript', icon: <SiTypescript className="text-blue-700" /> },
    { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-cyan-600" /> },
    { name: 'Node.js', icon: <FaNodeJs className="text-green-600" /> },
    { name: 'Supabase', icon: <SiSupabase className="text-emerald-600" /> },
    { name: 'Framer Motion', icon: <SiFramer className="text-gray-800 dark:text-gray-200" /> },
    { name: 'UI/UX Design', icon: <FaFigma className="text-purple-600" /> },
  ]

 export const socialLinks = [
    { name: 'GitHub', url: 'https://github.com', icon: <FaGithub /> },
    { name: 'LinkedIn', url: 'https://linkedin.com', icon: <FaLinkedin /> },
    { name: 'Twitter', url: 'https://twitter.com', icon: <FaTwitter /> },
    { name: 'Email', url: 'mailto:contact@example.com', icon: <FaEnvelope /> }
  ]

export  const skillsData = [
  { name: "React", icon: <FaReact className="text-blue-600" /> },
  { name: "TypeScript", icon: <SiTypescript className="text-blue-700" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-600" /> },
  { name: "Framer Motion", icon: <SiFramer className="text-gray-800 dark:text-gray-200" /> },
];