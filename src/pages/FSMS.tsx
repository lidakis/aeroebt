import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
  ArrowRight, Plane, Calendar, Users, FileText, BarChart3,
  Wrench, CheckCircle2
} from 'lucide-react'
import './ProductPage.css'

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
}

const features = [
  {
    icon: Calendar,
    title: 'Planning & Scheduling',
    description: 'Intelligent scheduling for aircraft, instructors, and students. Optimize utilization and minimize conflicts.',
    features: ['Drag & Drop Calendar', 'Conflict Detection', 'Resource Optimization', 'Mobile Access']
  },
  {
    icon: Plane,
    title: 'Fleet Management',
    description: 'Complete aircraft tracking including availability, maintenance status, and flight hours. Real-time fleet overview.',
    features: ['Aircraft Status', 'Maintenance Tracking', 'Flight Hours', 'Availability Calendar']
  },
  {
    icon: Users,
    title: 'Student Management',
    description: 'Comprehensive student profiles with training progress, documents, and certification tracking.',
    features: ['Progress Tracking', 'Document Storage', 'Certification Tracking', 'Payment Management']
  },
  {
    icon: Wrench,
    title: 'Maintenance Integration',
    description: 'Track aircraft maintenance schedules and automatically adjust availability. Integration with MRO systems.',
    features: ['Maintenance Schedules', 'Auto Availability', 'Work Orders', 'Compliance Tracking']
  },
  {
    icon: FileText,
    title: 'Document Management',
    description: 'Centralized storage for all flight school documentation including student records, aircraft logs, and certificates.',
    features: ['Digital Records', 'Version Control', 'Audit Trails', 'Easy Retrieval']
  },
  {
    icon: BarChart3,
    title: 'Reports & Analytics',
    description: 'Comprehensive reporting on utilization, revenue, instructor performance, and student progress.',
    features: ['Utilization Reports', 'Financial Analytics', 'Performance Metrics', 'Custom Reports']
  }
]

const stats = [
  { value: '35%', label: 'Increased Utilization' },
  { value: '50%', label: 'Less Admin Time' },
  { value: '25%', label: 'Revenue Growth' },
  { value: '99%', label: 'Scheduling Accuracy' }
]

export default function FSMS() {
  return (
    <div className="product-page fsms-page">
      {/* Hero */}
      <section className="product-hero">
        <div className="product-hero-bg">
          <div className="product-hero-grid" />
          <div className="product-hero-glow" style={{ background: '#8b5cf6' }} />
        </div>
        <div className="container">
          <motion.div
            className="product-hero-content"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.div className="product-icon" style={{ background: 'linear-gradient(135deg, #8b5cf6, #7c3aed)' }} variants={fadeInUp}>
              <Plane size={32} />
            </motion.div>
            <motion.h1 variants={fadeInUp}>
              Flight School<br /><span style={{ color: '#8b5cf6' }}>Management System</span>
            </motion.h1>
            <motion.p className="product-tagline" style={{ color: '#a78bfa' }} variants={fadeInUp}>
              Run Your Flight School Efficiently
            </motion.p>
            <motion.p className="product-description" variants={fadeInUp}>
              The complete solution for flight schools, ATOs, and training organizations. 
              Scheduling, fleet management, student tracking, and more—all in one platform.
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

      {/* Stats */}
      <section className="fsms-stats section">
        <div className="container">
          <motion.div
            className="fsms-stats-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {stats.map((stat) => (
              <motion.div key={stat.label} className="fsms-stat" variants={fadeInUp}>
                <span className="fsms-stat-value">{stat.value}</span>
                <span className="fsms-stat-label">{stat.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="product-features section">
        <div className="container">
          <motion.div
            className="section-header"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.span className="section-label" variants={fadeInUp}>Features</motion.span>
            <motion.h2 variants={fadeInUp}>
              Everything Your<br />
              <span className="text-gradient">Flight School Needs</span>
            </motion.h2>
          </motion.div>

          <motion.div
            className="fsms-features-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {features.map((feature) => (
              <motion.div key={feature.title} className="fsms-feature-card" variants={fadeInUp}>
                <div className="fsms-feature-icon" style={{ background: 'rgba(139, 92, 246, 0.1)', color: '#8b5cf6' }}>
                  <feature.icon size={24} />
                </div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
                <ul className="fsms-feature-list">
                  {feature.features.map((f) => (
                    <li key={f}>
                      <CheckCircle2 size={14} />
                      {f}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Workflow */}
      <section className="workflow-section section">
        <div className="container">
          <motion.div
            className="section-header"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.span className="section-label" variants={fadeInUp}>Workflow</motion.span>
            <motion.h2 variants={fadeInUp}>
              Streamlined<br />
              <span className="text-gradient">Operations</span>
            </motion.h2>
          </motion.div>

          <motion.div
            className="workflow-steps"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div className="workflow-step" variants={fadeInUp}>
              <div className="workflow-number">01</div>
              <h3>Schedule</h3>
              <p>Students book lessons through the portal or staff schedules on their behalf</p>
            </motion.div>
            <motion.div className="workflow-step" variants={fadeInUp}>
              <div className="workflow-number">02</div>
              <h3>Prepare</h3>
              <p>System checks aircraft availability, instructor qualifications, and weather</p>
            </motion.div>
            <motion.div className="workflow-step" variants={fadeInUp}>
              <div className="workflow-number">03</div>
              <h3>Fly</h3>
              <p>Mobile app provides pre-flight info and records post-flight data</p>
            </motion.div>
            <motion.div className="workflow-step" variants={fadeInUp}>
              <div className="workflow-number">04</div>
              <h3>Track</h3>
              <p>All data automatically logged for progress tracking and billing</p>
            </motion.div>
          </motion.div>
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
              <h2>Ready to Modernize Your Flight School?</h2>
              <p>
                Join flight schools worldwide using FSMS to streamline operations 
                and deliver better training experiences.
              </p>
              <div className="cta-actions">
                <Link to="/contact" className="btn btn-primary btn-lg">
                  Get Started <ArrowRight size={18} />
                </Link>
                <Link to="/tms" className="btn btn-secondary btn-lg">
                  Explore TMS
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
