import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
  ArrowRight, Brain, Cpu, Cloud, Shield, TrendingUp, BarChart3,
  Layers, Database, GraduationCap, Mail
} from 'lucide-react'
import SEO from '../components/SEO'
import './ProductPage.css'

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
}

const features = [
  {
    icon: TrendingUp,
    title: 'Predictive Analytics',
    description: 'The most sophisticated predictive models in aviation. Forecast training outcomes and identify improvement opportunities before issues arise.'
  },
  {
    icon: BarChart3,
    title: 'Deep Learning Insights',
    description: 'Advanced neural networks analyze training patterns across your entire pilot population, revealing insights no other system can provide.'
  },
  {
    icon: Shield,
    title: 'Safety Intelligence',
    description: 'AI-powered safety pattern recognition identifies potential risks and training gaps proactively, enhancing your safety culture.'
  },
  {
    icon: Cpu,
    title: 'State-of-the-Art AI',
    description: 'Powered by the latest deep learning architectures running on enterprise GPU infrastructure. Continuous learning for ever-improving accuracy.'
  },
  {
    icon: Cloud,
    title: 'Enterprise Cloud',
    description: 'Secure, scalable cloud infrastructure with global availability. ISO 27001 certified and GDPR compliant.'
  },
  {
    icon: Database,
    title: 'Big Data Processing',
    description: 'Process and analyze massive training datasets. Extract actionable insights from years of historical and real-time data.'
  }
]

const aeroEBTIntegration = [
  { icon: Layers, title: 'Scenario Intelligence', desc: 'AI-powered scenario recommendations based on pilot profiles and training history' },
  { icon: TrendingUp, title: 'Competency Prediction', desc: 'Predict competency development trends and identify training needs early' },
  { icon: BarChart3, title: 'Performance Optimization', desc: 'Optimize training schedules and resources based on data-driven insights' },
  { icon: Shield, title: 'Compliance Analytics', desc: 'Automated compliance monitoring with intelligent alerting' }
]

const useCases = [
  {
    title: 'Training Cost Reduction',
    description: 'Optimize training schedules and predict resource needs to significantly reduce operational costs.',
    impact: '30-40% savings'
  },
  {
    title: 'Competency Gap Analysis',
    description: 'Identify individual and fleet-wide competency gaps before they impact safety or operations.',
    impact: 'Proactive intervention'
  },
  {
    title: 'Predictive Maintenance Integration',
    description: 'Combine training data with maintenance patterns for comprehensive operational intelligence.',
    impact: 'Holistic insights'
  }
]

export default function AeroBrain() {
  return (
    <div className="product-page">
      <SEO
        title="AeroBrain.ai - AI Aviation Training Analytics | Deep Learning for Airlines"
        description="The most advanced AI system for airlines. AeroBrain.ai provides predictive analytics, deep learning insights, and training optimization for aviation training. Exclusively integrated with AeroEBT."
        keywords="AeroBrain, AI aviation, aviation AI, machine learning aviation, predictive analytics aviation, deep learning training, AI training optimization, aviation analytics, training intelligence, airline AI"
        canonical="/#/aerobrain"
      />
      {/* Hero */}
      <section className="product-hero">
        <div className="container">
          <motion.div
            className="product-hero-content"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.div className="product-icon" style={{ background: 'linear-gradient(135deg, #f59e0b, #d97706)' }} variants={fadeInUp}>
              <Brain size={32} />
            </motion.div>
            <motion.h1 variants={fadeInUp}>
              Aero<span className="text-gradient" style={{ background: 'linear-gradient(135deg, #f59e0b, #d97706)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Brain.ai</span>
            </motion.h1>
            <motion.p className="product-tagline" style={{ color: '#d97706' }} variants={fadeInUp}>
              The Most Advanced AI System for Airlines
            </motion.p>
            <motion.p className="product-description" variants={fadeInUp}>
              AeroBrain.ai is the most sophisticated artificial intelligence platform 
              purpose-built for aviation training. <strong>Exclusively integrated with AeroEBT</strong>, 
              it provides predictive analytics and deep learning insights that no other system can match.
            </motion.p>
            <motion.div className="product-hero-actions" variants={fadeInUp}>
              <a href="mailto:ebt@skydynamics.aero?subject=AeroBrain.ai Demo Request" className="btn btn-primary btn-lg">
                <Mail size={18} />
                Request Demo
              </a>
              <Link to="/aeroebt" className="btn btn-secondary btn-lg">
                AeroEBT Integration
                <ArrowRight size={18} />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* AeroEBT Integration Banner */}
      <section className="exclusive-banner" style={{ background: 'linear-gradient(135deg, rgba(245, 158, 11, 0.1) 0%, rgba(217, 119, 6, 0.05) 100%)', borderColor: 'rgba(245, 158, 11, 0.3)' }}>
        <div className="container">
          <motion.div 
            className="exclusive-banner-content"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ borderColor: 'rgba(245, 158, 11, 0.4)' }}
          >
            <div className="exclusive-icon" style={{ background: 'linear-gradient(135deg, #f59e0b, #d97706)' }}>
              <GraduationCap size={28} />
            </div>
            <div className="exclusive-text">
              <h3 style={{ color: '#d97706' }}>🤖 Exclusively Integrated with AeroEBT</h3>
              <p>AeroBrain.ai is exclusively available with AeroEBT, creating the most powerful EBT platform in the world. 
              This unique combination provides AI-powered insights that enhance every aspect of your training program.</p>
            </div>
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
            <motion.span className="section-label" variants={fadeInUp}>AI Capabilities</motion.span>
            <motion.h2 variants={fadeInUp}>
              Unmatched <span className="text-gradient" style={{ background: 'linear-gradient(135deg, #f59e0b, #d97706)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Intelligence</span>
            </motion.h2>
            <motion.p variants={fadeInUp}>
              AeroBrain.ai combines cutting-edge deep learning with aviation expertise 
              to deliver insights that transform training operations.
            </motion.p>
          </motion.div>

          <motion.div
            className="features-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {features.map((feature) => (
              <motion.div key={feature.title} className="feature-card" variants={fadeInUp}>
                <div className="feature-card-icon" style={{ background: 'rgba(245, 158, 11, 0.1)', color: '#d97706' }}>
                  <feature.icon size={24} />
                </div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* AeroEBT Integration Section */}
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
                alt="AeroBrain.ai Analytics Dashboard"
              />
            </motion.div>
            <motion.div
              className="ai-content"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.span className="section-label" variants={fadeInUp}>AeroEBT Integration</motion.span>
              <motion.h2 variants={fadeInUp}>
                Powering the World's<br /><span className="text-gradient" style={{ background: 'linear-gradient(135deg, #f59e0b, #d97706)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Only Complete EBT</span>
              </motion.h2>
              <motion.p variants={fadeInUp}>
                AeroBrain.ai is exclusively integrated with AeroEBT, enabling intelligent 
                features that make Mixed to Full EBT implementation smoother than ever. 
                From scenario recommendations to competency predictions, AI enhances every step.
              </motion.p>
              <motion.div className="ai-features" variants={fadeInUp}>
                {aeroEBTIntegration.map((feature, idx) => (
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
            </motion.div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="product-features section" style={{ background: 'var(--bg-primary)' }}>
        <div className="container">
          <motion.div
            className="section-header"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.span className="section-label" variants={fadeInUp}>Business Impact</motion.span>
            <motion.h2 variants={fadeInUp}>
              Measurable <span className="text-gradient" style={{ background: 'linear-gradient(135deg, #f59e0b, #d97706)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Results</span>
            </motion.h2>
            <motion.p variants={fadeInUp}>
              AeroBrain.ai delivers tangible business outcomes for airlines and training organizations.
            </motion.p>
          </motion.div>

          <motion.div
            className="features-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {useCases.map((useCase) => (
              <motion.div key={useCase.title} className="feature-card" variants={fadeInUp}>
                <span className="section-label" style={{ background: 'rgba(245, 158, 11, 0.1)', color: '#d97706' }}>
                  {useCase.impact}
                </span>
                <h3 style={{ marginTop: 'var(--space-4)' }}>{useCase.title}</h3>
                <p>{useCase.description}</p>
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
          <div className="product-cta-card" style={{ background: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)' }}>
            <h2>Experience the Power of AeroBrain.ai</h2>
            <p>
              See how the most advanced AI system for airlines can transform 
              your training operations with AeroEBT integration.
            </p>
            <div className="product-cta-actions">
              <a href="mailto:ebt@skydynamics.aero?subject=AeroBrain.ai Demo Request" className="btn btn-primary btn-lg">
                <Mail size={18} />
                Schedule a Demo
              </a>
              <Link to="/aeroebt" className="btn btn-secondary btn-lg">
                Learn About AeroEBT
              </Link>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  )
}
