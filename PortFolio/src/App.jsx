import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import AboutPage from './Pages/AboutPage'
import WorkPage from './Pages/WorkPage'
import Contact from './Pages/Contact'
import Achievement from './Pages/Achievement'
import Header from './Components/Header'
import SketchyFilters from './Components/SketchyFilters'
import { MenuProvider } from './Components/MenuProvider'
import MobileMenu from './Components/MobileMenu'


function App() {
  return (
    <MenuProvider>
      <SketchyFilters />
      <Header />
      {/* Mobile slide-in navigation — only rendered/visible on small screens */}
      <MobileMenu />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about-me' element={<AboutPage />} />
        <Route path='/works' element={<WorkPage />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/achievement' element={<Achievement />} />
      </Routes>
    </MenuProvider>
  )
}

export default App
