import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
  ArrowRight, Building2, BookOpen, Award, FileText, BarChart3,
  Users, Clock, CheckCircle2, Settings, Calendar, Shield
} from 'lucide-react'
import SEO from '../components/SEO'
import './ProductPage.css'

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
}

const modules = [
  {
    icon: BookOpen,
    title: 'LMS e-Learning',
    description: 'Complete learning management system with course creation, delivery, and tracking. SCORM compliant with multimedia support.',
    features: ['Course Builder', 'Progress Tracking', 'Assessments', 'Certificates']
  },
  {
    icon: Award,
    title: 'QMS Qualifications',
    description: 'Track and manage all crew qualifications, certifications, and currencies. Automated expiry notifications and renewal workflows.',
    features: ['Qualification Tracking', 'Expiry Alerts', 'Renewal Workflows', 'Compliance Reports']
  },
  {
    icon: FileText,
    title: 'DMS Documents',
    description: 'Centralized document management with version control, access permissions, and audit trails. All training materials in one place.',
    features: ['Version Control', 'Access Control', 'Audit Trails', 'Search & Filter']
  },
  {
    icon: BarChart3,
    title: 'Advanced Analytics',
    description: 'Comprehensive reporting and analytics dashboards. Track KPIs, identify trends, and make data-driven decisions.',
    features: ['Custom Reports', 'Real-Time Dashboards', 'Trend Analysis', 'Export Options']
  }
]

const benefits = [
  { icon: Clock, title: 'Save Time', desc: 'Automate administrative tasks and reduce manual work by up to 70%' },
  { icon: Shield, title: 'Stay Compliant', desc: 'Always audit-ready with complete training records and documentation' },
  { icon: Users, title: 'Empower Teams', desc: 'Self-service portals for trainees and instructors' },
  { icon: Settings, title: 'Customize', desc: 'Flexible configuration to match your processes and requirements' }
]

export default function TMS() {
  return (
    <div className="product-page tms-page">
      <SEO
        title="TMS - Training Management System for EBT & CBTA | LMS Integration"
        description="Complete training lifecycle management system for EBT and CBTA programs. TMS with LMS integration, EBT tracking, CBTA qualification management, compliance reports, and document management. EASA & ICAO compliant EBT training management."
        keywords="TMS, training management system, EBT TMS, CBTA TMS, EBT training management, CBTA training management, LMS integration, EBT qualification tracking, CBTA qualification tracking, EBT compliance reports, CBTA compliance reports, training management software, EBT training system, CBTA training system"
        canonical="/#/tms"
      />
      {/* Hero */}
      <section className="product-hero">
        <div className="product-hero-bg">
          <div className="product-hero-grid" />
          <div className="product-hero-glow" style={{ background: '#10b981' }} />
        </div>
        <div className="container">
          <motion.div
            className="product-hero-content"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.div className="product-icon" style={{ background: 'linear-gradient(135deg, #10b981, #059669)' }} variants={fadeInUp}>
              <Building2 size={32} />
            </motion.div>
            <motion.h1 variants={fadeInUp}>
              Training Management<br /><span style={{ color: '#10b981' }}>System</span>
            </motion.h1>
            <motion.p className="product-tagline" style={{ color: '#10b981' }} variants={fadeInUp}>
              Complete Training Lifecycle Management
            </motion.p>
            <motion.p className="product-description" variants={fadeInUp}>
              Manage your entire training operation from a single platform. <strong>Integrated LMS, 
              qualification tracking, document management, and advanced analytics</strong>—all seamlessly 
              connected with AeroEBT. Reduce training administration time by up to <strong>70%</strong> while 
              ensuring complete regulatory compliance.
            </motion.p>
            <motion.div className="product-hero-actions" variants={fadeInUp}>
              <Link to="/contact" className="btn btn-primary btn-lg">
                Request Demo <ArrowRight size={18} />
              </Link>
              <Link to="/plans" className="btn btn-secondary btn-lg">
                View Plans
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Modules */}
      <section className="product-features section">
        <div className="container">
          <motion.div
            className="section-header"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.span className="section-label" variants={fadeInUp}>Modules</motion.span>
            <motion.h2 variants={fadeInUp}>
              Everything You Need<br />
              <span className="text-gradient">In One Platform</span>
            </motion.h2>
          </motion.div>

          <motion.div
            className="modules-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {modules.map((module) => (
              <motion.div key={module.title} className="module-card" variants={fadeInUp}>
                <div className="module-icon" style={{ background: 'rgba(16, 185, 129, 0.1)', color: '#10b981' }}>
                  <module.icon size={28} />
                </div>
                <div className="module-content">
                  <h3>{module.title}</h3>
                  <p>{module.description}</p>
                  <ul className="module-features">
                    {module.features.map((feature, idx) => (
                      <motion.li 
                        key={feature}
                        variants={fadeInUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.05 }}
                      >
                        <CheckCircle2 size={14} />
                        <span className="feature-chip">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Benefits */}
      <section className="benefits-section section">
        <div className="container">
          <motion.div
            className="section-header"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.span className="section-label" variants={fadeInUp}>Benefits</motion.span>
            <motion.h2 variants={fadeInUp}>
              Why Training Managers<br />
              <span className="text-gradient">Choose Us</span>
            </motion.h2>
          </motion.div>

          <motion.div
            className="benefits-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {benefits.map((benefit) => (
              <motion.div key={benefit.title} className="benefit-card" variants={fadeInUp}>
                <div className="benefit-icon">
                  <benefit.icon size={24} />
                </div>
                <h3>{benefit.title}</h3>
                <p>{benefit.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Integration */}
      <section className="integration-section section">
        <div className="container">
          <div className="integration-card">
            <div className="integration-content">
              <Calendar size={48} style={{ color: '#10b981' }} />
              <h2>Seamless Integration</h2>
              <p>
                TMS integrates perfectly with <strong>AeroEBT, AeroBrain, and leading third-party systems</strong> including 
                scheduling software, HR systems, crew management tools, and enterprise platforms. 
                <strong> RESTful APIs</strong> and <strong>webhooks</strong> ensure smooth data flow across your entire ecosystem.
              </p>
              <div className="integration-logos">
                <span>WebAIMS</span>
                <span>Microsoft 365</span>
                <span>Google Workspace</span>
                <span>Custom API</span>
                <span>AeroEBT</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="product-cta section">
        <div className="container">
          <motion.div
            className="cta-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="cta-glow" />
            <div className="cta-content">
              <h2>Streamline Your Training Operations</h2>
              <p>
                Join organizations saving hundreds of hours annually with 
                automated training management.
              </p>
              <div className="cta-actions">
                <Link to="/contact" className="btn btn-primary btn-lg">
                  Schedule Demo <ArrowRight size={18} />
                </Link>
                <Link to="/fsms" className="btn btn-secondary btn-lg">
                  Explore FSMS
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
