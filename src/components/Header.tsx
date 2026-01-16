import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Menu, X, ChevronDown, Plane, Brain, GraduationCap, Building2, 
  Mail, Shield, Award, FileCheck, Lock, CheckCircle2, ArrowRight,
  Sun, Moon
} from 'lucide-react'
import { useAppDispatch, useAppSelector } from '../store/hooks'
import { toggleTheme, setTheme } from '../store/slices/uiSlice'
import './Header.css'

const solutions = [
  { 
    name: 'AeroEBT', 
    description: 'Mixed to Full EBT', 
    fullDesc: 'From instructors, for instructors. The only platform for Mixed to Full EBT implementation.',
    icon: GraduationCap, 
    path: '/aeroebt',
    features: ['World\'s Only Scenario Builder', 'EBT Instructor', 'Mixed to Full EBT'],
    color: '#0066b3'
  },
  { 
    name: 'AeroBrain.ai', 
    description: 'Most Advanced AI for Airlines', 
    fullDesc: 'The most sophisticated AI system for aviation training, exclusively integrated with AeroEBT',
    icon: Brain, 
    path: '/aerobrain',
    features: ['Deep Learning Analytics', 'AeroEBT Integration', 'Predictive Insights'],
    color: '#f59e0b'
  },
  { 
    name: 'TMS', 
    description: 'Training Management System', 
    fullDesc: 'Complete training lifecycle management with LMS integration',
    icon: Building2, 
    path: '/tms',
    features: ['LMS Integration', 'Qualification Tracking', 'Compliance Reports'],
    color: '#10b981'
  },
  { 
    name: 'FSMS', 
    description: 'Flight School Management', 
    fullDesc: 'End-to-end solution for flight schools and training organizations',
    icon: Plane, 
    path: '/fsms',
    features: ['Scheduling', 'Fleet Management', 'Student Tracking'],
    color: '#8b5cf6'
  },
]

const complianceItems = [
  { icon: Shield, text: 'EASA Certified' },
  { icon: FileCheck, text: 'ICAO Compliant' },
  { icon: Lock, text: 'ISO 27001' },
  { icon: Award, text: 'Data Security' },
]

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const location = useLocation()
  const dispatch = useAppDispatch()
  const theme = useAppSelector((state) => state.ui.theme)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMobileMenuOpen(false)
    setActiveDropdown(null)
  }, [location])

  // Initialize theme on mount
  useEffect(() => {
    const stored = localStorage.getItem('theme')
    if (stored === 'light' || stored === 'dark') {
      document.documentElement.setAttribute('data-theme', stored)
      dispatch(setTheme(stored))
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      document.documentElement.setAttribute('data-theme', 'dark')
      dispatch(setTheme('dark'))
    }
  }, [dispatch])

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="header-container">
        <Link to="/" className="logo">
          <div className="logo-icon">
            <Plane size={22} />
          </div>
          <span className="logo-text">
            <span className="logo-aero">Aero</span>
            <span className="logo-ebt">EBT</span>
          </span>
        </Link>

        <nav className="nav-desktop">
          <div
            className="nav-item has-dropdown"
            onMouseEnter={() => setActiveDropdown('solutions')}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button className="nav-link">
              Solutions <ChevronDown size={16} />
            </button>
            <AnimatePresence>
              {activeDropdown === 'solutions' && (
                <motion.div
                  className="mega-menu"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="mega-menu-content">
                    <div className="mega-menu-main">
                      <div className="mega-menu-section-title">Our Solutions</div>
                      <div className="mega-menu-grid">
                        {solutions.map((item) => (
                          <Link key={item.name} to={item.path} className="mega-menu-item">
                            <div className="mega-menu-icon" style={{ background: `${item.color}15`, color: item.color }}>
                              <item.icon size={22} />
                            </div>
                            <div className="mega-menu-item-content">
                              <span className="mega-menu-item-title">{item.name}</span>
                              <span className="mega-menu-item-desc">{item.description}</span>
                              <div className="mega-menu-item-features">
                                {item.features.map((feature, idx) => (
                                  <span key={idx} className="mega-menu-feature">
                                    <CheckCircle2 size={12} />
                                    {feature}
                                  </span>
                                ))}
                              </div>
                            </div>
                            <ArrowRight size={16} className="mega-menu-arrow" />
                          </Link>
                        ))}
                      </div>
                    </div>
                    <div className="mega-menu-sidebar">
                      <div className="mega-menu-section-title">Compliance & Security</div>
                      <div className="mega-menu-compliance">
                        {complianceItems.map((item, idx) => (
                          <div key={idx} className="compliance-item">
                            <item.icon size={18} />
                            <span>{item.text}</span>
                          </div>
                        ))}
                      </div>
                      <div className="mega-menu-cta">
                        <p>Ready to transform your training?</p>
                        <a href="mailto:ebt@skydynamics.aero" className="btn btn-primary btn-sm">
                          <Mail size={14} />
                          Request Demo
                        </a>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link to="/plans" className="nav-link">Pricing</Link>
          <Link to="/about" className="nav-link">About</Link>
          <Link to="/faq" className="nav-link">FAQ</Link>
        </nav>

        <div className="header-actions">
          <button
            className="theme-toggle"
            onClick={() => dispatch(toggleTheme())}
            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
          >
            <motion.div
              key={theme}
              initial={{ rotate: -30, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 30, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
            </motion.div>
          </button>
          <a href="mailto:ebt@skydynamics.aero" className="btn btn-primary">
            <Mail size={16} />
            Request Demo
          </a>
          <button
            className="mobile-menu-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="mobile-menu-content">
              <div className="mobile-section">
                <span className="mobile-section-title">Solutions</span>
                {solutions.map((item) => (
                  <Link key={item.name} to={item.path} className="mobile-link">
                    <item.icon size={18} style={{ color: item.color }} />
                    <div>
                      <span className="mobile-link-title">{item.name}</span>
                      <span className="mobile-link-desc">{item.description}</span>
                    </div>
                  </Link>
                ))}
              </div>
              <div className="mobile-section">
                <Link to="/plans" className="mobile-link">Pricing</Link>
                <Link to="/about" className="mobile-link">About</Link>
                <Link to="/faq" className="mobile-link">FAQ</Link>
              </div>
              <div className="mobile-section mobile-cta">
                <a href="mailto:ebt@skydynamics.aero" className="btn btn-primary btn-block">
                  <Mail size={16} />
                  Request Demo
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
