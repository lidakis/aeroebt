import { motion } from 'framer-motion'
import { Shield, Lock, Award, Target, CheckCircle2, Mail } from 'lucide-react'
import './About.css'

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
}

const values = [
  {
    icon: Shield,
    title: 'Regulatory Excellence',
    description: 'We build every feature with EASA, ICAO, and FAA compliance at its core. Our solutions meet the highest regulatory standards.'
  },
  {
    icon: Lock,
    title: 'Data Security',
    description: 'ISO 27001 certified and GDPR compliant. Your training data is protected with enterprise-grade security measures.'
  },
  {
    icon: Target,
    title: 'Aviation Expertise',
    description: '16+ years of aviation training experience. Our team includes pilots, instructors, and training managers who understand your challenges.'
  }
]

const timeline = [
  { year: '2008', title: 'Company Founded', desc: 'SkyDynamics established in Crete, Greece with a vision to modernize aviation training.' },
  { year: '2012', title: 'First EBT Solution', desc: 'Launched the first version of AeroEBT, pioneering digital evidence-based training.' },
  { year: '2018', title: 'AI Integration', desc: 'Introduced AeroBrain, our advanced AI analytics platform for training optimization.' },
  { year: '2024', title: 'Global Expansion', desc: 'Now serving 50+ airlines and training organizations across the globe.' }
]

const certifications = [
  { icon: Shield, title: 'ISO 27001', desc: 'Certified ISMS' },
  { icon: Award, title: 'EASA Approved', desc: 'EBT Compliance' },
  { icon: CheckCircle2, title: 'ICAO Standards', desc: 'Full Compliance' },
  { icon: Lock, title: 'GDPR', desc: 'Data Protection' }
]

export default function About() {
  return (
    <div className="about-page">
      {/* Hero */}
      <section className="about-hero">
        <div className="container">
          <motion.div
            className="about-hero-content"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.span className="section-label" variants={fadeInUp}>About SkyDynamics</motion.span>
            <motion.h1 variants={fadeInUp}>
              Pioneering the Future of<br /><span className="text-gradient">Aviation Training</span>
            </motion.h1>
            <motion.p variants={fadeInUp}>
              For over 16 years, we've been developing innovative solutions that help 
              airlines and training organizations deliver regulatory-compliant, 
              evidence-based training programs.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Mission */}
      <section className="mission-section section">
        <div className="container">
          <div className="mission-grid">
            <motion.div
              className="mission-content"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.span className="section-label" variants={fadeInUp}>Our Mission</motion.span>
              <motion.h2 variants={fadeInUp}>
                Transforming Aviation<br /><span className="text-gradient">Training Worldwide</span>
              </motion.h2>
              <motion.p variants={fadeInUp}>
                Our mission is to provide aviation training organizations with innovative, 
                secure, and compliant technology solutions that enhance training effectiveness 
                while reducing operational costs.
              </motion.p>
              <motion.p variants={fadeInUp}>
                We believe that evidence-based training, powered by advanced analytics and 
                artificial intelligence, is the future of aviation safety. Our platform 
                enables training organizations to make data-driven decisions that improve 
                pilot competency and operational excellence.
              </motion.p>
            </motion.div>
            <motion.div
              className="mission-visual"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <img 
                src="https://i0.wp.com/skydynamics.aero/wp-content/uploads/2020/05/EBT-Builder2-SkyDynamics-JetLogic-imac.png?w=600&ssl=1" 
                alt="AeroEBT Platform"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="values-section section">
        <div className="container">
          <motion.div
            className="section-header"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.span className="section-label" variants={fadeInUp}>Our Values</motion.span>
            <motion.h2 variants={fadeInUp}>
              What Drives <span className="text-gradient">Our Work</span>
            </motion.h2>
            <motion.p variants={fadeInUp}>
              Every decision we make is guided by our commitment to regulatory 
              excellence, data security, and aviation expertise.
            </motion.p>
          </motion.div>

          <motion.div
            className="values-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {values.map((value) => (
              <motion.div key={value.title} className="value-card" variants={fadeInUp}>
                <div className="value-icon">
                  <value.icon size={28} />
                </div>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Timeline */}
      <section className="timeline-section section">
        <div className="container">
          <motion.div
            className="section-header"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.span className="section-label" variants={fadeInUp}>Our Journey</motion.span>
            <motion.h2 variants={fadeInUp}>
              16+ Years of <span className="text-gradient">Innovation</span>
            </motion.h2>
          </motion.div>

          <motion.div
            className="timeline"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {timeline.map((item) => (
              <motion.div key={item.year} className="timeline-item" variants={fadeInUp}>
                <div className="timeline-year">{item.year}</div>
                <div className="timeline-content">
                  <h4>{item.title}</h4>
                  <p>{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Certifications */}
      <section className="certifications-section section">
        <div className="container">
          <motion.div
            className="section-header"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.span className="section-label" variants={fadeInUp}>Trust & Security</motion.span>
            <motion.h2 variants={fadeInUp}>
              Certified for <span className="text-gradient">Excellence</span>
            </motion.h2>
            <motion.p variants={fadeInUp}>
              Our platform meets the highest standards for data security and regulatory compliance.
            </motion.p>
          </motion.div>

          <motion.div
            className="certifications-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {certifications.map((cert) => (
              <motion.div key={cert.title} className="cert-card" variants={fadeInUp}>
                <div className="cert-icon">
                  <cert.icon size={24} />
                </div>
                <h4>{cert.title}</h4>
                <p>{cert.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="about-cta">
        <div className="container">
          <motion.div
            className="about-cta-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2>Ready to Partner With Us?</h2>
            <p>
              Join leading airlines and training organizations using SkyDynamics 
              solutions for regulatory-compliant aviation training.
            </p>
            <a href="mailto:info@skydynamics.aero?subject=Partnership Inquiry" className="btn btn-primary btn-lg">
              <Mail size={18} />
              Contact Us
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
