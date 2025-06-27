import useSound from 'use-sound'
import Modal from '../components/Modal'
import pop from '/pop.ogg'
import { skills } from '../projectData/projectData'
import Hero from '../components/Hero'
import Skills from '../components/Skills'
import Footer from '../components/Footer'

function MainLayout ({ showModal, handleModal,isdark ,setisdark, handleClick }) {
  const [play] = useSound(pop, { volume: 0.6 })

  return (
    <div className='min-h-screen bg-gray-50 text-gray-900 dark:bg-gray-900 dark:text-white transition-colors duration-300'>
      {/* Hero Section */}
      <Hero handleModal={handleModal} />

      {/* Skills Section */}
      <Skills skills={skills} />

      {/* footer Section */}
      <Footer />

      <Modal isOpen={showModal}  onClose={handleModal}  handleClick={handleClick} setIsdark={setisdark} isdark={isdark}  />
    </div>
  )
}

export default MainLayout
