import { Routes, Route } from 'react-router-dom'
import MainLayout from './pages/MainLayout'
import Navbar from './components/Navbar'

import { useState } from 'react'
import { useEffect } from 'react'
import { useCallback } from 'react'


function App () {
  const [isdark, setIsdark] = useState(() => {
    const saved = localStorage.getItem('darkMode')
    return saved === 'true' ? true : false
  })

  const [showModal, setShowModal] = useState(false)

  // Apply dark mode class to body and save to localStorage when isdark changes
  useEffect(() => {
    if (isdark) {
      document.body.classList.add('dark')
    } else {
      document.body.classList.remove('dark')
    }
    // Save preference to localStorage
    localStorage.setItem('darkMode', isdark)
  }, [isdark])

  // Load saved preference on initial render
  useEffect(() => {
    const savedMode = localStorage.getItem('darkMode')
    if (savedMode) {
      setIsdark(savedMode === 'true')
    }
  }, [])

  const handleClick = useCallback(() => {
    setIsdark(!isdark)
  })

  const handleModal = useCallback(() => {
    setShowModal(!showModal)
  })

  return (
    <div className={isdark ? 'dark' : ''}>
      <Navbar dark={isdark} handleClick={handleClick} handleModal={handleModal} />
      <section>
        <Routes>
          <Route path='/' element={<MainLayout showModal={showModal}  handleClick={handleClick}  handleModal={handleModal} isdark={isdark} />} />
        </Routes>
      </section>
    </div>
  )
}

export default App
