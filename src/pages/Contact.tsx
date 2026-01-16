import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Clock, ArrowRight, Shield, Lock, Award } from 'lucide-react'
import './Contact.css'

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
}

const contactOptions = [
  {
    title: 'Schedule a Demo',
    description: 'See AeroEBT in action. Our team will show you how our platform can transform your training operations.',
    email: 'ebt@skydynamics.aero',
    subject: 'AeroEBT Demo Request',
    icon: Mail,
    color: '#0066b3'
  },
  {
    title: 'Sales Inquiries',
    description: 'Get pricing information and learn about our enterprise licensing options for airlines and ATOs.',
    email: 'sales@skydynamics.aero',
    subject: 'AeroEBT Sales Inquiry',
    icon: Mail,
    color: '#10b981'
  },
  {
    title: 'Technical Support',
    description: 'Existing customers can reach our technical support team for assistance with our platform.',
    email: 'support@skydynamics.aero',
    subject: 'AeroEBT Technical Support',
    icon: Mail,
    color: '#f59e0b'
  },
  {
    title: 'General Inquiries',
    description: 'For partnership opportunities, press inquiries, or general questions about SkyDynamics.',
    email: 'info@skydynamics.aero',
    subject: 'AeroEBT General Inquiry',
    icon: Mail,
    color: '#8b5cf6'
  }
]

const certifications = [
  { icon: Shield, text: 'ISO 27001 Certified', desc: 'Enterprise data security' },
  { icon: Lock, text: 'GDPR Compliant', desc: 'EU data protection' },
  { icon: Award, text: 'EASA Certified', desc: 'Aviation compliance' }
]

export default function Contact() {
  return (
    <div className="contact-page">
      {/* Hero */}
      <section className="contact-hero">
        <div className="container">
          <motion.div
            className="contact-hero-content"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.span className="section-label" variants={fadeInUp}>Contact Us</motion.span>
            <motion.h1 variants={fadeInUp}>
              Get in <span className="text-gradient">Touch</span>
            </motion.h1>
            <motion.p variants={fadeInUp}>
              Ready to transform your aviation training operations? Our team is here 
              to help you get started with AeroEBT.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Contact Options */}
      <section className="contact-options section">
        <div className="container">
          <motion.div 
            className="contact-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {contactOptions.map((option) => (
              <motion.a
                key={option.title}
                href={`mailto:${option.email}?subject=${encodeURIComponent(option.subject)}`}
                className="contact-card"
                variants={fadeInUp}
              >
                <div className="contact-card-icon" style={{ background: `${option.color}15`, color: option.color }}>
                  <option.icon size={24} />
                </div>
                <h3>{option.title}</h3>
                <p>{option.description}</p>
                <div className="contact-card-email">
                  <span>{option.email}</span>
                  <ArrowRight size={16} />
                </div>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Info & Certifications */}
      <section className="contact-info-section section">
        <div className="container">
          <div className="contact-info-grid">
            {/* Office Info */}
            <motion.div
              className="office-info"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.h2 variants={fadeInUp}>Our Office</motion.h2>
              <motion.div className="office-details" variants={fadeInUp}>
                <div className="office-item">
                  <MapPin size={20} />
                  <div>
                    <strong>SkyDynamics G.P.</strong>
                    <p>Science & Technology Park of Crete<br />Heraklion, Crete, Greece</p>
                  </div>
                </div>
                <div className="office-item">
                  <Phone size={20} />
                  <div>
                    <strong>Phone</strong>
                    <p>+30 2813 015 538</p>
                  </div>
                </div>
                <div className="office-item">
                  <Mail size={20} />
                  <div>
                    <strong>Primary Email</strong>
                    <p><a href="mailto:info@skydynamics.aero">info@skydynamics.aero</a></p>
                  </div>
                </div>
                <div className="office-item">
                  <Clock size={20} />
                  <div>
                    <strong>Business Hours</strong>
                    <p>Monday - Friday: 9:00 - 18:00 EET</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Certifications */}
            <motion.div
              className="certifications-info"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.h2 variants={fadeInUp}>Trust & Security</motion.h2>
              <motion.p className="certifications-intro" variants={fadeInUp}>
                Your data security and regulatory compliance are our top priorities. 
                AeroEBT is built on enterprise-grade infrastructure with the highest 
                security certifications.
              </motion.p>
              <motion.div className="certifications-list" variants={fadeInUp}>
                {certifications.map((cert, idx) => (
                  <div key={idx} className="certification-item">
                    <div className="certification-icon">
                      <cert.icon size={24} />
                    </div>
                    <div>
                      <strong>{cert.text}</strong>
                      <span>{cert.desc}</span>
                    </div>
                  </div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="contact-cta section">
        <div className="container">
          <motion.div
            className="cta-box"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2>Ready to Get Started?</h2>
            <p>
              Send us an email and our team will respond within 24 hours to schedule 
              your personalized demo of AeroEBT.
            </p>
            <a 
              href="mailto:ebt@skydynamics.aero?subject=AeroEBT Demo Request&body=Hello,%0A%0AI'm interested in scheduling a demo of AeroEBT.%0A%0AOrganization:%0ARole:%0APhone:%0A%0AThank you!" 
              className="btn btn-primary btn-lg"
            >
              <Mail size={18} />
              Request Your Demo
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
