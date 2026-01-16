import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, Mail } from 'lucide-react'
import './FAQ.css'

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
}

const faqCategories = [
  {
    title: 'AeroEBT & EBT Training',
    items: [
      {
        question: 'What is AeroEBT?',
        answer: 'AeroEBT is the world\'s first complete Evidence-Based Training platform, built by instructors for instructors. It features the only Scenario Builder & Generator Tool in the world, enabling seamless Mixed to Full EBT implementation in compliance with EASA and ICAO standards.'
      },
      {
        question: 'What is the EBT Instructor app?',
        answer: 'EBT Instructor is our purpose-built mobile application designed by aviation instructors. It provides an intuitive, ArIND-compliant interface optimized for simulator sessions, with real-time data sync and offline capability.'
      },
      {
        question: 'Can AeroEBT support Mixed to Full EBT transition?',
        answer: 'Yes, AeroEBT is specifically designed to support organizations transitioning from Mixed to Full EBT. Our Scenario Builder enables gradual implementation while maintaining full regulatory compliance throughout the process.'
      },
      {
        question: 'Is AeroEBT compliant with EASA and ICAO standards?',
        answer: 'Absolutely. AeroEBT is fully compliant with EASA regulations and ICAO competency frameworks. Our platform is designed from the ground up with regulatory compliance as a core requirement.'
      }
    ]
  },
  {
    title: 'AeroBrain.ai Integration',
    items: [
      {
        question: 'What is AeroBrain.ai?',
        answer: 'AeroBrain.ai is the most advanced AI system for airline training. It uses deep learning and machine learning algorithms to analyze training data, predict outcomes, and provide actionable insights that optimize pilot training programs.'
      },
      {
        question: 'How does AeroBrain.ai integrate with AeroEBT?',
        answer: 'AeroBrain.ai is exclusively integrated with AeroEBT, providing real-time analytics, intelligent scenario recommendations, and predictive insights. This unique combination gives you capabilities no other platform can offer.'
      },
      {
        question: 'What kind of analytics does AeroBrain.ai provide?',
        answer: 'AeroBrain.ai provides predictive analytics for training outcomes, trend detection across pilot cohorts, competency gap identification, training cost optimization recommendations, and safety-focused insights.'
      }
    ]
  },
  {
    title: 'Compliance & Security',
    items: [
      {
        question: 'Is my data secure with AeroEBT?',
        answer: 'Yes. We are ISO 27001 certified and fully GDPR compliant. All data is encrypted in transit and at rest, with enterprise-grade security measures protecting your training information.'
      },
      {
        question: 'Do you offer on-premise deployment?',
        answer: 'Yes, for organizations with specific data residency requirements, we offer on-premise deployment options with our Enterprise and Complete plans.'
      },
      {
        question: 'What regulatory certifications do you have?',
        answer: 'We hold ISO 27001 certification for information security management, are GDPR compliant for data protection, and our platform is approved for use in EASA-compliant training programs.'
      }
    ]
  },
  {
    title: 'Pricing & Support',
    items: [
      {
        question: 'How is pricing determined?',
        answer: 'Pricing is customized based on your organization size, required modules, and deployment preferences. Contact our sales team for a personalized quote that fits your needs.'
      },
      {
        question: 'What support options are available?',
        answer: 'We offer tiered support options from email support to 24/7 priority support with dedicated success managers for Enterprise customers. All plans include access to our knowledge base and training resources.'
      },
      {
        question: 'Can I try AeroEBT before purchasing?',
        answer: 'Yes, we offer personalized demos and proof-of-concept implementations for qualified organizations. Contact us to schedule a demo and see AeroEBT in action.'
      }
    ]
  }
]

export default function FAQ() {
  const [openItems, setOpenItems] = useState<{ [key: string]: boolean }>({})

  const toggleItem = (key: string) => {
    setOpenItems(prev => ({ ...prev, [key]: !prev[key] }))
  }

  return (
    <div className="faq-page">
      {/* Hero */}
      <section className="faq-hero">
        <div className="container">
          <motion.div
            className="faq-hero-content"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.span className="section-label" variants={fadeInUp}>FAQ</motion.span>
            <motion.h1 variants={fadeInUp}>
              Frequently Asked<br /><span className="text-gradient">Questions</span>
            </motion.h1>
            <motion.p variants={fadeInUp}>
              Find answers to common questions about AeroEBT, AeroBrain.ai, and our 
              aviation training solutions.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section section">
        <div className="container">
          <div className="faq-container">
            {faqCategories.map((category) => (
              <motion.div 
                key={category.title} 
                className="faq-category"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerContainer}
              >
                <motion.h2 className="faq-category-title" variants={fadeInUp}>
                  {category.title}
                </motion.h2>
                <div className="faq-list">
                  {category.items.map((item, idx) => {
                    const key = `${category.title}-${idx}`
                    const isOpen = openItems[key]
                    return (
                      <motion.div key={key} className="faq-item" variants={fadeInUp}>
                        <button 
                          className={`faq-question ${isOpen ? 'active' : ''}`}
                          onClick={() => toggleItem(key)}
                        >
                          {item.question}
                          <ChevronDown size={20} />
                        </button>
                        <AnimatePresence>
                          {isOpen && (
                            <motion.div
                              className="faq-answer"
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.2 }}
                            >
                              {item.answer}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </motion.div>
                    )
                  })}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="faq-cta">
        <div className="container">
          <motion.div
            className="faq-cta-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2>Still Have Questions?</h2>
            <p>
              Our team is ready to help you understand how AeroEBT and AeroBrain.ai 
              can transform your training operations.
            </p>
            <a href="mailto:info@skydynamics.aero?subject=AeroEBT Question" className="btn btn-primary btn-lg">
              <Mail size={18} />
              Contact Us
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
