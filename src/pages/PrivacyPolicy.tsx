import { motion } from 'framer-motion'
import { Shield, Mail } from 'lucide-react'
import './PrivacyPolicy.css'

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
}

export default function PrivacyPolicy() {
  return (
    <div className="legal-page">
      <section className="legal-hero">
        <div className="container">
          <motion.div
            className="legal-header"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.div className="legal-icon" variants={fadeInUp}>
              <Shield size={32} />
            </motion.div>
            <motion.h1 variants={fadeInUp}>Privacy Policy</motion.h1>
            <motion.p className="legal-subtitle" variants={fadeInUp}>
              Last Updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </motion.p>
          </motion.div>
        </div>
      </section>

      <section className="legal-content section">
        <div className="container">
          <motion.div
            className="legal-text"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div className="legal-section" variants={fadeInUp}>
              <h2>1. Introduction</h2>
              <p>
                SkyDynamics G.P. ("we," "our," or "us") operates the AeroEBT website and platform (the "Service"). 
                This Privacy Policy informs you of our policies regarding the collection, use, and disclosure of personal 
                data when you use our Service and the choices you have associated with that data.
              </p>
              <p>
                By using the Service, you agree to the collection and use of information in accordance with this policy. 
                If you do not agree with this Privacy Policy, please do not use our Service.
              </p>
            </motion.div>

            <motion.div className="legal-section" variants={fadeInUp}>
              <h2>2. Information Collection and Use</h2>
              <p>We collect several types of information for various purposes to provide and improve our Service:</p>
              <h3>2.1 Personal Data</h3>
              <p>
                While using our Service, we may ask you to provide us with certain personally identifiable information 
                that can be used to contact or identify you ("Personal Data"). This may include:
              </p>
              <ul>
                <li>Name and contact information (email address, phone number)</li>
                <li>Company or organization name</li>
                <li>Job title and role</li>
                <li>Usage data and cookies</li>
              </ul>
            </motion.div>

            <motion.div className="legal-section" variants={fadeInUp}>
              <h2>3. Data Security</h2>
              <p>
                We implement industry-standard security measures to protect your Personal Data. However, no method of 
                transmission over the Internet or electronic storage is 100% secure. While we strive to use commercially 
                acceptable means to protect your Personal Data, we cannot guarantee its absolute security.
              </p>
              <p>
                Our Service is ISO 27001 certified and complies with GDPR requirements for data protection.
              </p>
            </motion.div>

            <motion.div className="legal-section" variants={fadeInUp}>
              <h2>4. Data Retention</h2>
              <p>
                We will retain your Personal Data only for as long as is necessary for the purposes set out in this 
                Privacy Policy. We will retain and use your Personal Data to the extent necessary to comply with our 
                legal obligations, resolve disputes, and enforce our legal agreements and policies.
              </p>
            </motion.div>

            <motion.div className="legal-section" variants={fadeInUp}>
              <h2>5. Your Rights</h2>
              <p>
                Under GDPR and other applicable data protection laws, you have the right to:
              </p>
              <ul>
                <li>Access and receive a copy of your Personal Data</li>
                <li>Rectify inaccurate Personal Data</li>
                <li>Request erasure of your Personal Data</li>
                <li>Object to processing of your Personal Data</li>
                <li>Request restriction of processing</li>
                <li>Data portability</li>
                <li>Withdraw consent at any time</li>
              </ul>
            </motion.div>

            <motion.div className="legal-section" variants={fadeInUp}>
              <h2>6. Cookies and Tracking</h2>
              <p>
                Our Service uses cookies and similar tracking technologies to track activity and hold certain information. 
                You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
              </p>
            </motion.div>

            <motion.div className="legal-section" variants={fadeInUp}>
              <h2>7. Service Providers</h2>
              <p>
                We may employ third-party companies and individuals to facilitate our Service, provide the Service on our 
                behalf, perform Service-related services, or assist us in analyzing how our Service is used. These third 
                parties have access to your Personal Data only to perform these tasks on our behalf and are obligated not 
                to disclose or use it for any other purpose.
              </p>
            </motion.div>

            <motion.div className="legal-section" variants={fadeInUp}>
              <h2>8. Links to Other Sites</h2>
              <p>
                Our Service may contain links to other sites that are not operated by us. If you click on a third-party 
                link, you will be directed to that third party's site. We strongly advise you to review the Privacy Policy 
                of every site you visit.
              </p>
              <p>
                We have no control over and assume no responsibility for the content, privacy policies, or practices of 
                any third-party sites or services.
              </p>
            </motion.div>

            <motion.div className="legal-section" variants={fadeInUp}>
              <h2>9. Changes to This Privacy Policy</h2>
              <p>
                We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new 
                Privacy Policy on this page and updating the "Last Updated" date.
              </p>
              <p>
                You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy 
                are effective when they are posted on this page.
              </p>
            </motion.div>

            <motion.div className="legal-section" variants={fadeInUp}>
              <h2>10. Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy or wish to exercise your rights, please contact us:
              </p>
              <div className="contact-info">
                <p>
                  <strong>SkyDynamics G.P.</strong><br />
                  Science & Technology Park of Crete<br />
                  Heraklion, Greece
                </p>
                <p>
                  <Mail size={16} style={{ display: 'inline', marginRight: '8px' }} />
                  <a href="mailto:privacy@skydynamics.aero">privacy@skydynamics.aero</a>
                </p>
                <p>
                  <strong>Data Protection Officer:</strong><br />
                  <a href="mailto:dpo@skydynamics.aero">dpo@skydynamics.aero</a>
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
