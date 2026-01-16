import { motion } from 'framer-motion'
import { CheckCircle2, Mail, Shield, Lock, Users, Headphones } from 'lucide-react'
import './Plans.css'

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
}

const plans = [
  {
    name: 'Professional',
    description: 'For small ATOs and flight schools',
    price: 'Custom',
    features: [
      'AeroEBT Core Features',
      'Up to 50 pilot profiles',
      'Scenario Builder (Basic)',
      'Real-time data sync',
      'Standard compliance reports',
      'Email support'
    ],
    popular: false
  },
  {
    name: 'Enterprise',
    description: 'For airlines and large ATOs',
    price: 'Custom',
    features: [
      'Full AeroEBT Suite',
      'Unlimited pilot profiles',
      'Advanced Scenario Builder',
      'AeroBrain AI Analytics',
      'Custom compliance reports',
      'Priority 24/7 support',
      'API access',
      'On-premise option'
    ],
    popular: true
  },
  {
    name: 'Complete',
    description: 'Full training ecosystem',
    price: 'Custom',
    features: [
      'Everything in Enterprise',
      'TMS Integration',
      'FSMS Integration',
      'Custom integrations',
      'Dedicated success manager',
      'White-label options',
      'SLA guarantees'
    ],
    popular: false
  }
]

const enterpriseFeatures = [
  { icon: Shield, text: 'EASA & ICAO Compliance' },
  { icon: Lock, text: 'ISO 27001 Security' },
  { icon: Users, text: 'Unlimited Users' },
  { icon: Headphones, text: '24/7 Priority Support' }
]

const faqs = [
  {
    question: 'How is pricing determined?',
    answer: 'Pricing is based on your organization size, required modules, and deployment model. Contact us for a customized quote.'
  },
  {
    question: 'Is on-premise deployment available?',
    answer: 'Yes, Enterprise and Complete plans support on-premise deployment for organizations with specific data residency requirements.'
  },
  {
    question: 'What support is included?',
    answer: 'All plans include email support. Enterprise plans include 24/7 priority support and dedicated success managers.'
  },
  {
    question: 'Can we try before purchasing?',
    answer: 'Yes, we offer personalized demos and proof-of-concept implementations for qualified organizations.'
  }
]

export default function Plans() {
  return (
    <div className="plans-page">
      {/* Hero */}
      <section className="plans-hero">
        <div className="container">
          <motion.div
            className="plans-hero-content"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.span className="section-label" variants={fadeInUp}>Pricing</motion.span>
            <motion.h1 variants={fadeInUp}>
              Plans for Every<br /><span className="text-gradient">Organization</span>
            </motion.h1>
            <motion.p variants={fadeInUp}>
              Flexible licensing options for flight schools, ATOs, and airlines. 
              All plans include regulatory compliance and data security.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Pricing Grid */}
      <section className="pricing-section section">
        <div className="container">
          <motion.div
            className="pricing-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {plans.map((plan) => (
              <motion.div 
                key={plan.name} 
                className={`pricing-card ${plan.popular ? 'popular' : ''}`}
                variants={fadeInUp}
              >
                <div className="pricing-header">
                  <h3 className="pricing-name">{plan.name}</h3>
                  <p className="pricing-desc">{plan.description}</p>
                  <div className="pricing-price">
                    <span>{plan.price}</span>
                    Pricing
                  </div>
                </div>
                <div className="pricing-features">
                  <ul>
                    {plan.features.map((feature, idx) => (
                      <li key={idx}>
                        <CheckCircle2 size={16} />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="pricing-action">
                  <a 
                    href={`mailto:sales@skydynamics.aero?subject=${plan.name} Plan Inquiry`} 
                    className={`btn ${plan.popular ? 'btn-primary' : 'btn-secondary'} btn-lg`}
                  >
                    <Mail size={16} />
                    Contact Sales
                  </a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Enterprise Section */}
      <section className="enterprise-section section">
        <div className="container">
          <motion.div
            className="enterprise-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="enterprise-content">
              <h2>Enterprise Solutions</h2>
              <p>
                For airlines and large training organizations requiring custom 
                integrations, dedicated support, and on-premise deployment options.
              </p>
              <a href="mailto:enterprise@skydynamics.aero?subject=Enterprise Inquiry" className="btn btn-primary btn-lg">
                <Mail size={18} />
                Contact Enterprise Sales
              </a>
            </div>
            <div className="enterprise-features">
              {enterpriseFeatures.map((feature, idx) => (
                <div key={idx} className="enterprise-feature">
                  <feature.icon size={20} />
                  <span>{feature.text}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Preview */}
      <section className="faq-preview section">
        <div className="container">
          <motion.div
            className="section-header"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.span className="section-label" variants={fadeInUp}>FAQ</motion.span>
            <motion.h2 variants={fadeInUp}>
              Common <span className="text-gradient">Questions</span>
            </motion.h2>
          </motion.div>

          <motion.div
            className="faq-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {faqs.map((faq, idx) => (
              <motion.div key={idx} className="faq-item" variants={fadeInUp}>
                <h4>{faq.question}</h4>
                <p>{faq.answer}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  )
}
