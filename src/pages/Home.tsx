import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
  ArrowRight, Plane, Brain, GraduationCap, Building2, Shield, Lock,
  CheckCircle2, FileCheck, Award, Mail, Server, Cpu, BarChart3,
  Wrench, Tablet, Link2, Globe, Users, Cloud, ShieldCheck, Briefcase,
  Database
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
  { value: '25', label: 'Years of Aviation Excellence' },
  { value: '100%', label: 'Regulatory Compliance' },
  { value: '99.9%', label: 'System Availability' },
  { value: 'Owned', label: 'Data Centers Specialized for Airline Regulatory Compliance' }
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
  },
  { 
    icon: FileCheck, 
    title: 'Automated Compliance Reports', 
    desc: 'Automatically generated reports for IOSA, EASA, ICAO, and other compliance systems. All regulatory documentation ready at your fingertips without manual effort.' 
  },
  { 
    icon: Plane, 
    title: 'Wide Fleet Coverage', 
    desc: 'Comprehensive support for all major aircraft types and models. From narrow-body to wide-body, regional jets to cargo aircraft—we cover your entire fleet.' 
  },
  { 
    icon: Database, 
    title: 'Ready-Made Data for Fast Onboarding', 
    desc: 'Quick start with ready-made scenarios to edit yourself with AI assistance, plus ready databases of aircraft manuals, failures, events, and more. Fast-track your implementation.' 
  }
]

const integrations = [
  {
    icon: Wrench,
    title: 'FleetSnap Integration',
    subtitle: 'Aircraft Maintenance',
    desc: 'Seamlessly integrated with FleetSnap for comprehensive aircraft maintenance tracking. Connect training data with maintenance schedules, ensuring crew competency aligns with fleet readiness.',
    color: '#ef4444'
  },
  {
    icon: Tablet,
    title: 'AeroEFB Integration',
    subtitle: 'Electronic Flight Bag',
    desc: 'Full integration with AeroEFB for a complete cockpit solution. Synchronize training records, qualifications, and operational data directly with your Electronic Flight Bag system.',
    color: '#3b82f6'
  },
  {
    icon: Brain,
    title: 'AeroBrain.ai Integration',
    subtitle: 'Artificial Intelligence',
    desc: 'The most advanced AI system for airlines, deeply integrated with AeroEBT. Leverage machine learning for predictive training analytics and intelligent scenario recommendations.',
    color: '#f59e0b'
  },
  {
    icon: Globe,
    title: 'WebAIMS Integration',
    subtitle: 'Crew Management',
    desc: 'Full integration with WebAIMS for seamless crew management and scheduling. Synchronize training records with crew rostering and qualification tracking.',
    color: '#8b5cf6'
  },
  {
    icon: Users,
    title: 'Wingman Application',
    subtitle: 'Crew Collaboration',
    desc: 'Connect with Wingman for enhanced crew collaboration and communication. Share training insights and coordinate competency development across your team.',
    color: '#06b6d4'
  },
  {
    icon: Cloud,
    title: 'Microsoft 365',
    subtitle: 'Enterprise Productivity',
    desc: 'Native integration with Microsoft 365 suite including Teams, SharePoint, and Azure AD. Single sign-on, document management, and seamless collaboration.',
    color: '#0078d4'
  },
  {
    icon: Briefcase,
    title: 'Google Workspace',
    subtitle: 'Cloud Collaboration',
    desc: 'Full integration with Google Workspace for calendar sync, document sharing, and SSO authentication. Streamline workflows with Gmail and Drive connectivity.',
    color: '#4285f4'
  },
  {
    icon: ShieldCheck,
    title: 'Safety Management Systems',
    subtitle: 'SMS Integration',
    desc: 'Connect with leading SMS platforms for comprehensive safety data integration. Link training outcomes with safety reports and risk assessments.',
    color: '#10b981'
  }
]

const trainingTypes = ['EBT', 'CBTA', 'AQP', 'MPL', 'Type Rating', 'Recurrent', 'Line Training', 'Ab Initio']

const clients = [
  {
    name: 'Aegean Airlines',
    logo: 'https://logos-world.net/wp-content/uploads/2023/01/Aegean-Airlines-Logo-500x281.png',
    url: 'https://www.aegeanair.com'
  },
  {
    name: 'Airplan',
    logo: 'https://www.airplanaviation.gr/portal/templates/yootheme/cache/23/logo-235d3f17.webp',
    url: 'https://www.airplanaviation.gr'
  },
  {
    name: 'Superior Air S.A.',
    logo: 'https://www.superior-air.gr/wp-content/uploads/2023/04/Superior-Air-Logo-Transparent.png',
    url: 'https://www.superior-air.gr',
    needsBackground: true
  },
  {
    name: 'Foundation of Research',
    logo: 'https://www.forth.gr/files/forth-ite-el.jpg',
    url: 'https://www.forth.gr'
  }
]

const supportedAircraftGroups = [
  {
    manufacturer: 'Airbus',
    aircraft: [
      { code: 'A320', name: 'Airbus A320' },
      { code: 'A220', name: 'Airbus A220' },
      { code: 'A350', name: 'Airbus A350' },
      { code: 'A380', name: 'Airbus A380' }
    ]
  },
  {
    manufacturer: 'Boeing',
    aircraft: [
      { code: 'B777', name: 'Boeing 777' },
      { code: 'B737', name: 'Boeing 737' },
      { code: 'B787', name: 'Boeing 787' }
    ]
  },
  {
    manufacturer: 'ATR',
    aircraft: [
      { code: 'ATR 72', name: 'ATR 72' }
    ]
  },
  {
    manufacturer: 'Embraer',
    aircraft: [
      { code: 'E195', name: 'Embraer E195' },
      { code: 'E190', name: 'Embraer E190' },
      { code: 'E175', name: 'Embraer E175' },
      { code: 'E170', name: 'Embraer E170' }
    ]
  }
]

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
            <motion.h1 className="hero-headline" variants={fadeInUp}>
              Achieve Regulatory Compliance
            </motion.h1>
            <motion.h2 className="hero-title" variants={fadeInUp}>
              Enterprise Aviation<br />
              <span className="text-gradient">Training Platform</span>
            </motion.h2>

            <motion.div className="hero-badges" variants={fadeInUp}>
              <span className="compliance-badge">
                <Shield size={14} />
                EASA & ICAO Compliant
              </span>
              <span className="security-badge">
                <Lock size={14} />
                ISO 27001 Certified
              </span>
              <span className="hosting-badge">
                <Server size={14} />
                On-Premises Data Hosting Available
              </span>
            </motion.div>

            <motion.p className="hero-subtitle" variants={fadeInUp}>
              <strong>From instructors, for instructors.</strong> The only platform enabling 
              <strong> Mixed to Full EBT implementation</strong> with the world's only 
              Scenario Builder, powered by <strong>AeroBrain.ai</strong> – the most advanced 
              AI system for airlines.
            </motion.p>

            <motion.div className="hero-hosting-statement" variants={fadeInUp}>
              <Server size={18} />
              <p>
                <strong>The only company offering on-premises data hosting for airlines.</strong> 
                Owned data centers specialized for airline safety and mission-critical fields, 
                ensuring complete regulatory compliance and data sovereignty.
              </p>
            </motion.div>

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

      {/* Supported Aircraft */}
      <section className="aircraft-section section-lg">
        <div className="container">
          <motion.div
            className="section-header text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.span className="section-label" variants={fadeInUp}>
              <Plane size={16} style={{ display: 'inline', marginRight: '8px' }} />
              Ready-Made Training Data
            </motion.span>
            <motion.h2 variants={fadeInUp}>
              Supported Aircraft with <span className="text-gradient">Existing Data</span>
            </motion.h2>
            <motion.p variants={fadeInUp}>
              Pre-built scenarios, training documentation, aircraft manuals, failure databases, 
              and event libraries are available for the following aircraft types.
            </motion.p>
          </motion.div>

          <motion.div
            className="aircraft-groups"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {supportedAircraftGroups.map((group, groupIdx) => (
              <motion.div key={groupIdx} className="aircraft-group" variants={fadeInUp}>
                <div className="aircraft-list">
                  {group.aircraft.map((aircraft, idx) => (
                    <motion.div
                      key={idx}
                      className="aircraft-badge"
                      variants={fadeInUp}
                      whileHover={{ scale: 1.05, y: -4 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Plane size={20} />
                      <div className="aircraft-info">
                        <span className="aircraft-code">{aircraft.code}</span>
                        <span className="aircraft-name">{aircraft.name}</span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Integrations */}
      <section className="integrations-section section-lg">
        <div className="container">
          <motion.div
            className="section-header text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.span className="section-label" variants={fadeInUp}>
              <Link2 size={16} style={{ display: 'inline', marginRight: '8px' }} />
              Seamless Integrations
            </motion.span>
            <motion.h2 variants={fadeInUp}>
              Connected <span className="text-gradient">Ecosystem</span>
            </motion.h2>
            <motion.p variants={fadeInUp}>
              AeroEBT integrates with industry-leading aviation solutions to provide 
              a complete, unified platform for all your operational needs.
            </motion.p>
          </motion.div>

          <motion.div 
            className="integrations-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {integrations.map((integration, idx) => (
              <motion.div key={idx} className="integration-card" variants={fadeInUp}>
                <div className="integration-icon" style={{ background: `${integration.color}15`, color: integration.color }}>
                  <integration.icon size={32} />
                </div>
                <div className="integration-content">
                  <span className="integration-subtitle">{integration.subtitle}</span>
                  <h3>{integration.title}</h3>
                  <p>{integration.desc}</p>
                </div>
                <div className="integration-badge" style={{ background: integration.color }}>
                  <CheckCircle2 size={14} />
                  Fully Integrated
                </div>
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
              All integrated into the same app: AeroEBT, LMS, TMS, and FSMS. Best user experience, 
              simple in operation. Everything achieved in 3 taps maximum for instructors. Designed for 
              airlines, ATOs, and training organizations requiring the highest standards of regulatory compliance.
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

      {/* Clients Section */}
      <section className="clients-section section-lg">
        <div className="container">
          <motion.div
            className="section-header text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.span className="section-label" variants={fadeInUp}>
              <Building2 size={16} style={{ display: 'inline', marginRight: '8px' }} />
              Trusted By Industry Leaders
            </motion.span>
            <motion.h2 variants={fadeInUp}>
              Some of our <span className="text-gradient">clients</span>
            </motion.h2>
            <motion.p variants={fadeInUp}>
              Leading airlines and training organizations worldwide trust SkyDynamics 
              for their aviation training and management needs.
            </motion.p>
          </motion.div>

          <motion.div
            className="clients-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {clients.map((client, idx) => (
              <motion.div 
                key={idx} 
                className={`client-logo ${client.needsBackground ? 'client-logo-bg' : ''}`}
                variants={fadeInUp}
              >
                {client.url ? (
                  <a 
                    href={client.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="client-link"
                  >
                    {client.logo ? (
                      <img src={client.logo} alt={`${client.name} logo`} />
                    ) : (
                      <div className="client-logo-placeholder">
                        <Building2 size={32} />
                        <span>{client.name}</span>
                      </div>
                    )}
                  </a>
                ) : (
                  client.logo ? (
                    <img src={client.logo} alt={`${client.name} logo`} />
                  ) : (
                    <div className="client-logo-placeholder">
                      <Building2 size={32} />
                      <span>{client.name}</span>
                    </div>
                  )
                )}
              </motion.div>
            ))}
          </motion.div>
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
