import React, { useLayoutEffect } from 'react'
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom'
import Header from './components/header'
import Footer from './components/Footer'
import ServicesPage from './pages/servicesPage'
import ServiceDetailPage from './pages/serviceDetailPage'
import PortfolioPage from './pages/portfolioPage'
import AboutPage from './pages/aboutPage'
import ContactPage from './pages/contactPage'

function AnimatedRoutes() {
  const location = useLocation()

  return (
    <main key={location.pathname} className="page-transition">
      <Routes location={location}>
        <Route path='/' element={<ServicesPage />} />
        <Route path='/portfolio' element={<PortfolioPage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/contact' element={<ContactPage />} />
        <Route path='/:serviceId' element={<ServiceDetailPage />} />
        <Route path='*' element={<ServicesPage />} />
      </Routes>
    </main>
  )
}

function ScrollToTop() {
  const { pathname } = useLocation()

  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <Header />
      <AnimatedRoutes />
      <Footer />
    </Router>
  )
}

export default App;
