import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
  ArrowRight, GraduationCap, CheckCircle2, Layers, Users, RefreshCw,
  FileText, BarChart3, Tablet, Shield, Lock, Brain, Cpu, Mail
} from 'lucide-react'
import './ProductPage.css'

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
}

const mainFeatures = [
  {
    icon: Layers,
    title: 'EBT Scenario Builder',
    description: 'The ONLY Scenario Builder & Generator Tool in the world. Create EASA/ICAO compliant training scenarios with drag-and-drop simplicity.'
  },
  {
    icon: Users,
    title: 'Pilot Profiles',
    description: 'Comprehensive pilot profiles with complete training history, competency tracking, and performance analytics for regulatory audits.'
  },
  {
    icon: BarChart3,
    title: 'Competency-Based Grading',
    description: 'ICAO-compliant grading system with behavioral indicators. Real-time performance tracking and instant feedback capabilities.'
  },
  {
    icon: RefreshCw,
    title: 'Real-Time Sync',
    description: 'Mission-critical data synchronization across all devices. Works offline with automatic sync when connection is restored.'
  },
  {
    icon: FileText,
    title: 'Regulatory Compliance',
    description: 'Automatic generation of all required CAA and EASA forms. Complete audit trails for regulatory inspections.'
  },
  {
    icon: Tablet,
    title: 'EBT Instructor',
    description: 'Purpose-built mobile application by instructors, for instructors. ArIND-compliant interface optimized for simulator sessions.'
  }
]

const scenarioFeatures = [
  { icon: CheckCircle2, title: 'EASA/ICAO Compliant', desc: 'Create scenarios according to the latest regulatory standards.' },
  { icon: Brain, title: 'AI-Powered Generation', desc: 'AeroBrain integration for intelligent scenario suggestions.' },
  { icon: RefreshCw, title: 'Real-Time Collaboration', desc: 'Build scenarios with team members simultaneously.' },
  { icon: Layers, title: 'Drag & Drop Builder', desc: 'Intuitive interface for rapid scenario development.' },
  { icon: Shield, title: 'Compliance Validation', desc: 'Automatic checks ensure regulatory compliance.' },
  { icon: Lock, title: 'Secure Distribution', desc: 'Controlled access and secure scenario sharing.' }
]

const aiFeatures = [
  { icon: Brain, title: 'Most Advanced AI for Airlines', desc: 'AeroBrain.ai is the most sophisticated AI system purpose-built for aviation training analytics.' },
  { icon: BarChart3, title: 'Deep Learning Insights', desc: 'Advanced neural networks analyze training patterns to provide actionable insights no other system can match.' },
  { icon: Cpu, title: 'Seamless EBT Integration', desc: 'AeroBrain.ai integrates directly with AeroEBT, enabling intelligent scenario recommendations and performance predictions.' }
]

const competencies = [
  'Application of Procedures', 'Communication', 'Flight Path Management (Automation)',
  'Flight Path Management (Manual)', 'Leadership & Teamwork', 'Problem Solving & Decision Making',
  'Situation Awareness', 'Workload Management', 'Knowledge'
]

export default function AeroEBT() {
  return (
    <div className="product-page">
      {/* Hero */}
      <section className="product-hero">
        <div className="container">
          <motion.div
            className="product-hero-content"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.div className="product-icon" variants={fadeInUp}>
              <GraduationCap size={32} />
            </motion.div>
            <motion.h1 variants={fadeInUp}>
              Aero<span className="text-gradient">EBT</span>
            </motion.h1>
            <motion.p className="product-tagline" variants={fadeInUp}>
              From Instructors, For Instructors – Mixed to Full EBT Implementation
            </motion.p>
            <motion.p className="product-description" variants={fadeInUp}>
              The only platform enabling <strong>seamless Mixed to Full EBT transition</strong> with 
              the world's only Scenario Builder. Powered by <strong>AeroBrain.ai</strong> – the most 
              advanced AI system for airlines. EASA and ICAO compliant.
            </motion.p>
            <motion.div className="product-hero-actions" variants={fadeInUp}>
              <a href="mailto:ebt@skydynamics.aero?subject=AeroEBT Demo Request" className="btn btn-primary btn-lg">
                <Mail size={18} />
                Request Demo
              </a>
              <Link to="/plans" className="btn btn-secondary btn-lg">
                View Pricing
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Exclusive Banner */}
      <section className="exclusive-banner">
        <div className="container">
          <motion.div 
            className="exclusive-banner-content"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="exclusive-icon">
              <Layers size={28} />
            </div>
            <div className="exclusive-text">
              <h3>🌍 The ONLY Scenario Builder for Mixed to Full EBT Implementation</h3>
              <p>Built by instructors, for instructors. The only tool in the world enabling seamless transition from Mixed to Full EBT 
              with intuitive scenario building, powered by AeroBrain.ai – the most advanced AI system for airlines.</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Key Features */}
      <section className="product-features section">
        <div className="container">
          <motion.div
            className="section-header"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.span className="section-label" variants={fadeInUp}>Core Capabilities</motion.span>
            <motion.h2 variants={fadeInUp}>
              Regulatory-Compliant <span className="text-gradient">Training Excellence</span>
            </motion.h2>
            <motion.p variants={fadeInUp}>
              Every feature is designed with EASA and ICAO compliance at its core, 
              ensuring your training program meets the highest regulatory standards.
            </motion.p>
          </motion.div>

          <motion.div
            className="features-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {mainFeatures.map((feature) => (
              <motion.div key={feature.title} className="feature-card" variants={fadeInUp}>
                <div className="feature-card-icon">
                  <feature.icon size={24} />
                </div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Scenario Builder Showcase */}
      <section className="product-showcase section">
        <div className="container">
          <div className="showcase-grid">
            <motion.div
              className="showcase-content"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.span className="section-label" variants={fadeInUp}>World's Only Solution</motion.span>
              <motion.h2 variants={fadeInUp}>
                EBT Scenario Builder<br /><span className="text-gradient">& Generator Tool</span>
              </motion.h2>
              <motion.p variants={fadeInUp}>
                <strong>The only Scenario Builder in the world.</strong> Create regulatory-compliant 
                training scenarios in minutes with our intuitive drag-and-drop interface and 
                AI-powered suggestions.
              </motion.p>
              <motion.div className="showcase-features" variants={fadeInUp}>
                {scenarioFeatures.map((feature, idx) => (
                  <div key={idx} className="showcase-feature">
                    <div className="showcase-feature-icon">
                      <feature.icon size={18} />
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
              className="showcase-image"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <img 
                src="https://i0.wp.com/skydynamics.aero/wp-content/uploads/2020/05/EBT-Builder2-SkyDynamics-JetLogic-imac.png?w=600&ssl=1" 
                alt="AeroEBT Scenario Builder Interface"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* AI Integration */}
      <section className="ai-integration section">
        <div className="container">
          <div className="ai-grid">
            <motion.div
              className="ai-visual"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <img 
                src="https://i0.wp.com/skydynamics.aero/wp-content/uploads/2020/05/EBT-Desktop-Profiles-SkyDynamics-JetLogic.png?w=600&ssl=1" 
                alt="AeroBrain AI Analytics Dashboard"
              />
            </motion.div>
            <motion.div
              className="ai-content"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.span className="section-label" variants={fadeInUp}>Powered by AeroBrain.ai</motion.span>
              <motion.h2 variants={fadeInUp}>
                The Most Advanced<br /><span className="text-gradient">AI for Airlines</span>
              </motion.h2>
              <motion.p variants={fadeInUp}>
                AeroBrain.ai is the most advanced AI system for aviation training. 
                Exclusively integrated with AeroEBT, it provides predictive analytics, 
                intelligent scenario recommendations, and deep learning insights that 
                no other platform can offer.
              </motion.p>
              <motion.div className="ai-features" variants={fadeInUp}>
                {aiFeatures.map((feature, idx) => (
                  <div key={idx} className="ai-feature">
                    <div className="ai-feature-icon">
                      <feature.icon size={20} />
                    </div>
                    <div>
                      <h4>{feature.title}</h4>
                      <p>{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </motion.div>
              <motion.div variants={fadeInUp} style={{ marginTop: 'var(--space-6)' }}>
                <Link to="/aerobrain" className="btn btn-secondary">
                  Learn About AeroBrain
                  <ArrowRight size={16} />
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Competencies */}
      <section className="competencies-section section">
        <div className="container">
          <motion.div
            className="section-header"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.span className="section-label" variants={fadeInUp}>ICAO Framework</motion.span>
            <motion.h2 variants={fadeInUp}>
              Complete <span className="text-gradient">Competency Coverage</span>
            </motion.h2>
            <motion.p variants={fadeInUp}>
              Full support for all nine ICAO pilot competencies with detailed behavioral 
              indicators and customizable grading scales for your organization.
            </motion.p>
          </motion.div>

          <motion.div
            className="competencies-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {competencies.map((comp, idx) => (
              <motion.div key={comp} className="competency-item" variants={fadeInUp}>
                <span className="competency-number">{String(idx + 1).padStart(2, '0')}</span>
                <span className="competency-name">{comp}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="product-cta">
        <motion.div
          className="container"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="product-cta-card">
            <h2>Ready to Transform Your EBT Program?</h2>
            <p>
              Join leading airlines using AeroEBT for regulatory-compliant, 
              evidence-based training that meets EASA and ICAO standards.
            </p>
            <div className="product-cta-actions">
              <a href="mailto:ebt@skydynamics.aero?subject=AeroEBT Demo Request" className="btn btn-primary btn-lg">
                <Mail size={18} />
                Schedule a Demo
              </a>
              <Link to="/plans" className="btn btn-secondary btn-lg">
                Compare Plans
              </Link>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  )
}
