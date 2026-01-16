import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
  ArrowRight, Plane, Brain, GraduationCap, Building2, Shield, Lock,
  CheckCircle2, FileCheck, Award, Mail, Server, Cpu, BarChart3
} from 'lucide-react'
import './Home.css'

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 }
  }
}

const solutions = [
  {
    icon: GraduationCap,
    title: 'AeroEBT',
    subtitle: 'Evidence-Based Training',
    description: 'From instructors, for instructors. The only complete EBT solution for Mixed to Full EBT implementation with an intuitive interface.',
    features: ['World\'s Only Scenario Builder', 'EBT Instructor', 'Mixed to Full EBT', 'EASA/ICAO Compliant'],
    path: '/aeroebt',
    color: '#0066b3'
  },
  {
    icon: Brain,
    title: 'AeroBrain',
    subtitle: 'The Most Advanced AI for Aviation',
    description: 'The most advanced AI system for airlines. Deep learning analytics integrated with AeroEBT for unprecedented training insights.',
    features: ['AeroEBT Integration', 'Predictive Analytics', 'Deep Learning', 'Training Optimization'],
    path: '/aerobrain',
    color: '#f59e0b'
  },
  {
    icon: Building2,
    title: 'TMS',
    subtitle: 'Training Management',
    description: 'Complete training lifecycle management with LMS integration and regulatory compliance tracking.',
    features: ['LMS Integration', 'Qualification Tracking', 'Compliance Reports', 'Document Management'],
    path: '/tms',
    color: '#10b981'
  },
  {
    icon: Plane,
    title: 'FSMS',
    subtitle: 'Flight School Management',
    description: 'End-to-end solution for ATOs and flight schools with scheduling, fleet management, and student tracking.',
    features: ['Resource Scheduling', 'Fleet Management', 'Student Profiles', 'Financial Tracking'],
    path: '/fsms',
    color: '#8b5cf6'
  }
]

const stats = [
  { value: '16+', label: 'Years of Aviation Excellence' },
  { value: '50+', label: 'Airlines & Training Centers' },
  { value: '100%', label: 'Regulatory Compliance' },
  { value: '99.9%', label: 'System Availability' }
]

const complianceFeatures = [
  { icon: Shield, title: 'EASA Compliant', desc: 'Full compliance with European Aviation Safety Agency standards for EBT and CBTA training' },
  { icon: FileCheck, title: 'ICAO Standards', desc: 'Aligned with International Civil Aviation Organization competency frameworks' },
  { icon: Lock, title: 'ISO 27001 Certified', desc: 'Enterprise-grade data security with certified information security management' },
  { icon: Server, title: 'GDPR Compliant', desc: 'Full compliance with European data protection regulations' }
]

const uniqueFeatures = [
  { 
    icon: Cpu, 
    title: 'Powered by AeroBrain.ai', 
    desc: 'The most advanced AI system for airlines. AeroBrain.ai integrates seamlessly with AeroEBT, providing predictive analytics and training optimization that no other platform can match.' 
  },
  { 
    icon: BarChart3, 
    title: 'Mixed to Full EBT Implementation', 
    desc: 'The world\'s only Scenario Builder enables smooth transition from Mixed to Full EBT. Create EASA/ICAO compliant training scenarios with one intuitive tool.' 
  },
  { 
    icon: Award, 
    title: 'From Instructors, For Instructors', 
    desc: 'Built by pilots and instructors with 16+ years of aviation training expertise. We understand your challenges because we\'ve lived them.' 
  }
]

const trainingTypes = ['EBT', 'CBTA', 'AQP', 'MPL', 'Type Rating', 'Recurrent', 'Line Training', 'Ab Initio']

export default function Home() {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-bg">
          <div className="hero-pattern" />
        </div>

        <div className="container">
          <motion.div
            className="hero-content"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.div className="hero-badges" variants={fadeInUp}>
              <span className="compliance-badge">
                <Shield size={14} />
                EASA & ICAO Compliant
              </span>
              <span className="security-badge">
                <Lock size={14} />
                ISO 27001 Certified
              </span>
            </motion.div>

            <motion.h1 variants={fadeInUp}>
              Enterprise Aviation<br />
              <span className="text-gradient">Training Platform</span>
            </motion.h1>

            <motion.p className="hero-subtitle" variants={fadeInUp}>
              <strong>From instructors, for instructors.</strong> The only platform enabling 
              <strong> Mixed to Full EBT implementation</strong> with the world's only 
              Scenario Builder, powered by <strong>AeroBrain.ai</strong> – the most advanced 
              AI system for airlines.
            </motion.p>

            <motion.div className="hero-actions" variants={fadeInUp}>
              <a href="mailto:ebt@skydynamics.aero?subject=AeroEBT Demo Request" className="btn btn-primary btn-lg">
                <Mail size={18} />
                Request Demo
              </a>
              <Link to="/aeroebt" className="btn btn-secondary btn-lg">
                Explore AeroEBT
                <ArrowRight size={18} />
              </Link>
            </motion.div>

            <motion.div className="hero-training-types" variants={fadeInUp}>
              <span className="training-label">Regulatory-compliant training methodologies:</span>
              <div className="training-tags">
                {trainingTypes.map((type) => (
                  <span key={type} className="training-tag">{type}</span>
                ))}
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            className="hero-visual"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <div className="hero-devices">
              <div className="device-main">
                <img 
                  src="https://i0.wp.com/skydynamics.aero/wp-content/uploads/2020/05/EBT-Builder2-SkyDynamics-JetLogic-imac.png?w=600&ssl=1" 
                  alt="AeroEBT Scenario Builder Dashboard"
                />
              </div>
              <div className="device-secondary">
                <img 
                  src="https://i0.wp.com/skydynamics.aero/wp-content/uploads/2020/05/EBT-SkyDynamics-JetLogic-ipad1.png?w=400&ssl=1" 
                  alt="EBT Instructor on iPad"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="container">
          <motion.div
            className="stats-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {stats.map((stat) => (
              <motion.div key={stat.label} className="stat-item" variants={fadeInUp}>
                <span className="stat-value">{stat.value}</span>
                <span className="stat-label">{stat.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Unique Features - AI Integration */}
      <section className="unique-section section-lg">
        <div className="container">
          <motion.div
            className="section-header text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.span className="section-label" variants={fadeInUp}>Unique Capabilities</motion.span>
            <motion.h2 variants={fadeInUp}>
              What Sets Us <span className="text-gradient">Apart</span>
            </motion.h2>
            <motion.p variants={fadeInUp}>
              AeroEBT is the only aviation training platform that combines the world's 
              only Scenario Builder with advanced AI-powered analytics.
            </motion.p>
          </motion.div>

          <motion.div 
            className="unique-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {uniqueFeatures.map((feature, idx) => (
              <motion.div key={idx} className="unique-card" variants={fadeInUp}>
                <div className="unique-icon">
                  <feature.icon size={28} />
                </div>
                <h3>{feature.title}</h3>
                <p>{feature.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Solutions */}
      <section className="solutions-section section-lg">
        <div className="container">
          <motion.div
            className="section-header"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.span className="section-label" variants={fadeInUp}>Our Solutions</motion.span>
            <motion.h2 variants={fadeInUp}>
              Complete Training <span className="text-gradient">Ecosystem</span>
            </motion.h2>
            <motion.p variants={fadeInUp}>
              Integrated solutions designed for airlines, ATOs, and training organizations 
              requiring the highest standards of regulatory compliance.
            </motion.p>
          </motion.div>

          <motion.div 
            className="solutions-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {solutions.map((solution) => (
              <motion.div key={solution.title} variants={fadeInUp}>
                <Link to={solution.path} className="solution-card">
                  <div className="solution-icon" style={{ background: `${solution.color}15`, color: solution.color }}>
                    <solution.icon size={28} />
                  </div>
                  <div className="solution-content">
                    <h3>{solution.title}</h3>
                    <span className="solution-subtitle">{solution.subtitle}</span>
                    <p>{solution.description}</p>
                    <ul className="solution-features">
                      {solution.features.map((feature, idx) => (
                        <li key={idx}>
                          <CheckCircle2 size={14} />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <ArrowRight size={20} className="solution-arrow" />
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Compliance & Security */}
      <section className="compliance-section section-lg">
        <div className="container">
          <div className="compliance-grid">
            <motion.div
              className="compliance-content"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.span className="section-label" variants={fadeInUp}>Compliance & Security</motion.span>
              <motion.h2 variants={fadeInUp}>
                Built for <span className="text-gradient">Regulatory Excellence</span>
              </motion.h2>
              <motion.p variants={fadeInUp}>
                Our platform is designed from the ground up to meet the strictest 
                aviation regulatory requirements and data security standards. 
                Every feature is developed with compliance in mind.
              </motion.p>
              <motion.div className="compliance-features" variants={fadeInUp}>
                {complianceFeatures.map((feature, idx) => (
                  <div key={idx} className="compliance-feature">
                    <div className="compliance-feature-icon">
                      <feature.icon size={22} />
                    </div>
                    <div>
                      <h4>{feature.title}</h4>
                      <p>{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </motion.div>
            </motion.div>
            <motion.div
              className="compliance-visual"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img 
                src="https://i0.wp.com/skydynamics.aero/wp-content/uploads/2020/05/EBT-Desktop-Profiles-SkyDynamics-JetLogic.png?w=600&ssl=1" 
                alt="AeroEBT Compliance Dashboard"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <motion.div
            className="cta-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="cta-content">
              <h2>Ready to Transform Your Training?</h2>
              <p>
                Join leading airlines and training organizations using AeroEBT for 
                regulatory-compliant, evidence-based training management.
              </p>
            </div>
            <div className="cta-actions">
              <a href="mailto:ebt@skydynamics.aero?subject=AeroEBT Demo Request" className="btn btn-primary btn-lg">
                <Mail size={18} />
                Schedule a Demo
              </a>
              <a href="mailto:info@skydynamics.aero?subject=AeroEBT Inquiry" className="btn btn-outline btn-lg">
                Contact Sales
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
