import { Routes, Route } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Layout from './components/Layout'
import Home from './pages/Home'
import AeroEBT from './pages/AeroEBT'
import AeroBrain from './pages/AeroBrain'
import TMS from './pages/TMS'
import FSMS from './pages/FSMS'
import About from './pages/About'
import Plans from './pages/Plans'
import Contact from './pages/Contact'
import FAQ from './pages/FAQ'

function App() {
  return (
    <AnimatePresence mode="wait">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="aeroebt" element={<AeroEBT />} />
          <Route path="aerobrain" element={<AeroBrain />} />
          <Route path="tms" element={<TMS />} />
          <Route path="fsms" element={<FSMS />} />
          <Route path="about" element={<About />} />
          <Route path="plans" element={<Plans />} />
          <Route path="contact" element={<Contact />} />
          <Route path="faq" element={<FAQ />} />
        </Route>
      </Routes>
    </AnimatePresence>
  )
}

export default App
