import { Link } from 'react-router-dom'
import { Plane, Mail, Phone, MapPin, Linkedin, Shield, Award } from 'lucide-react'
import './Footer.css'

const solutions = [
  { name: 'AeroEBT', path: '/aeroebt' },
  { name: 'AeroBrain', path: '/aerobrain' },
  { name: 'TMS', path: '/tms' },
  { name: 'FSMS', path: '/fsms' },
]

const company = [
  { name: 'About Us', path: '/about' },
  { name: 'Pricing', path: '/plans' },
  { name: 'FAQ', path: '/faq' },
]

const compliance = [
  { name: 'EASA Compliance', path: '/aeroebt' },
  { name: 'ICAO Standards', path: '/aeroebt' },
  { name: 'Data Security', path: '/about' },
]

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          {/* Brand */}
          <div className="footer-brand">
            <Link to="/" className="footer-logo">
              <div className="footer-logo-icon">
                <Plane size={20} />
              </div>
              <span className="footer-logo-text">
                <span className="logo-aero">Aero</span>
                <span className="logo-ebt">EBT</span>
              </span>
            </Link>
            <p className="footer-description">
              Enterprise aviation training platform. Evidence-based training, 
              AI-powered analytics, and complete regulatory compliance for 
              airlines and training organizations worldwide.
            </p>
            <div className="footer-certifications">
              <div className="certification-badge">
                <Shield size={16} />
                <span>ISO 27001</span>
              </div>
              <div className="certification-badge">
                <Award size={16} />
                <span>EASA Certified</span>
              </div>
            </div>
          </div>

          {/* Solutions */}
          <div className="footer-section">
            <h4>Solutions</h4>
            <ul>
              {solutions.map((item) => (
                <li key={item.name}>
                  <Link to={item.path}>{item.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="footer-section">
            <h4>Company</h4>
            <ul>
              {company.map((item) => (
                <li key={item.name}>
                  <Link to={item.path}>{item.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Compliance */}
          <div className="footer-section">
            <h4>Compliance</h4>
            <ul>
              {compliance.map((item) => (
                <li key={item.name}>
                  <Link to={item.path}>{item.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="footer-section footer-contact">
            <h4>Contact</h4>
            <ul>
              <li>
                <Mail size={16} />
                <a href="mailto:info@skydynamics.aero">info@skydynamics.aero</a>
              </li>
              <li>
                <Mail size={16} />
                <a href="mailto:ebt@skydynamics.aero">ebt@skydynamics.aero</a>
              </li>
              <li>
                <Phone size={16} />
                <span>+30 2813 015 538</span>
              </li>
              <li>
                <MapPin size={16} />
                <span>Science & Technology Park of Crete<br />Heraklion, Greece</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="footer-bottom">
          <div className="footer-bottom-left">
            <span>© {new Date().getFullYear()} SkyDynamics G.P. All rights reserved.</span>
          </div>
          <div className="footer-bottom-right">
            <a href="https://linkedin.com/company/sky-dynamics" target="_blank" rel="noopener noreferrer">
              <Linkedin size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
