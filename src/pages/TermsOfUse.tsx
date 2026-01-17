import { motion } from 'framer-motion'
import { FileText, AlertTriangle, Mail } from 'lucide-react'
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

export default function TermsOfUse() {
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
              <FileText size={32} />
            </motion.div>
            <motion.h1 variants={fadeInUp}>Terms of Use</motion.h1>
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
              <h2>1. Acceptance of Terms</h2>
              <p>
                By accessing and using the AeroEBT website and platform (the "Service") operated by SkyDynamics G.P. 
                ("we," "our," or "us"), you accept and agree to be bound by the terms and provision of this agreement. 
                If you do not agree to abide by the above, please do not use this service.
              </p>
            </motion.div>

            <motion.div className="legal-section" variants={fadeInUp}>
              <h2>2. No Affiliation or Endorsement</h2>
              <div className="important-notice">
                <AlertTriangle size={24} />
                <div>
                  <h3>Important Notice: No Affiliation with Organizations or Manufacturers</h3>
                  <p>
                    <strong>SkyDynamics G.P. and its directors, officers, employees, and affiliates are not affiliated with, 
                    sponsored by, endorsed by, or otherwise connected to any regulatory organization, aircraft manufacturer, 
                    or third-party entity referenced on this website.</strong>
                  </p>
                  <p>
                    Logos, trademarks, and links to organizations such as EASA (European Union Aviation Safety Agency), 
                    ICAO (International Civil Aviation Organization), IATA (International Air Transport Association), 
                    aircraft manufacturers (Airbus, Boeing, ATR, Embraer), or any other entity are displayed solely for 
                    <strong> informational and reference purposes</strong> related to regulatory compliance discussions and 
                    training standards.
                  </p>
                  <p>
                    The display of any logo, trademark, or link does not imply, and shall not be construed as implying, 
                    any affiliation, partnership, sponsorship, endorsement, approval, or authorization by such organizations 
                    or manufacturers of SkyDynamics G.P., our services, or this website.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div className="legal-section" variants={fadeInUp}>
              <h2>3. Limitation of Liability and Disclaimers</h2>
              <p>
                <strong>TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT SHALL SKYDYNAMICS G.P., ITS DIRECTORS, 
                OFFICERS, EMPLOYEES, AFFILIATES, AGENTS, CONTRACTORS, OR LICENSORS BE LIABLE FOR ANY INDIRECT, INCIDENTAL, 
                SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING WITHOUT LIMITATION, LOSS OF PROFITS, DATA, USE, 
                GOODWILL, OR OTHER INTANGIBLE LOSSES, RESULTING FROM:</strong>
              </p>
              <ul>
                <li>Your use or inability to use the Service</li>
                <li>Any unauthorized access to or use of our servers and/or any personal information stored therein</li>
                <li>Any interruption or cessation of transmission to or from the Service</li>
                <li>Any bugs, viruses, trojan horses, or the like that may be transmitted to or through the Service</li>
                <li>Any errors or omissions in any content or for any loss or damage incurred as a result of the use of any content</li>
                <li>Any reliance on information obtained through the Service</li>
                <li>Any decisions made based on information provided by the Service</li>
                <li>Any failure to comply with regulatory requirements or standards</li>
                <li>Any third-party claims arising from or related to your use of the Service</li>
              </ul>
              <p>
                <strong>THE FOREGOING LIMITATIONS OF LIABILITY SHALL APPLY WHETHER THE ALLEGED LIABILITY IS BASED ON CONTRACT, 
                TORT, NEGLIGENCE, STRICT LIABILITY, OR ANY OTHER BASIS, EVEN IF SKYDYNAMICS G.P. HAS BEEN ADVISED OF THE 
                POSSIBILITY OF SUCH DAMAGES.</strong>
              </p>
            </motion.div>

            <motion.div className="legal-section" variants={fadeInUp}>
              <h2>4. No Warranties</h2>
              <p>
                <strong>THE SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT ANY WARRANTIES OF ANY KIND, EITHER EXPRESS 
                OR IMPLIED, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, 
                NON-INFRINGEMENT, OR COURSE OF PERFORMANCE.</strong>
              </p>
              <p>
                SkyDynamics G.P. does not warrant that:
              </p>
              <ul>
                <li>The Service will function uninterrupted, secure, or available at any particular time or location</li>
                <li>Any errors or defects will be corrected</li>
                <li>The Service is free of viruses or other harmful components</li>
                <li>The results of using the Service will meet your requirements</li>
              </ul>
              <p>
                We make no representations or warranties regarding the accuracy, reliability, or availability of any information, 
                content, or materials on the Service.
              </p>
            </motion.div>

            <motion.div className="legal-section" variants={fadeInUp}>
              <h2>5. Regulatory Compliance Disclaimer</h2>
              <p>
                While our Service is designed to assist with regulatory compliance matters related to aviation training, 
                <strong> SkyDynamics G.P. does not guarantee that use of our Service will ensure compliance with any specific 
                regulatory requirements, standards, or certifications.</strong>
              </p>
              <p>
                Users are solely responsible for:
              </p>
              <ul>
                <li>Ensuring their compliance with all applicable laws, regulations, and industry standards</li>
                <li>Verifying the accuracy and applicability of any information obtained through the Service</li>
                <li>Consulting with qualified legal, regulatory, or industry experts as necessary</li>
                <li>Obtaining appropriate certifications, approvals, or authorizations from relevant regulatory bodies</li>
              </ul>
              <p>
                <strong>SkyDynamics G.P. and its directors, officers, and employees shall not be liable for any regulatory 
                non-compliance, penalties, sanctions, or other consequences resulting from your use of the Service.</strong>
              </p>
            </motion.div>

            <motion.div className="legal-section" variants={fadeInUp}>
              <h2>6. Intellectual Property</h2>
              <p>
                The Service and its original content, features, and functionality are and will remain the exclusive property 
                of SkyDynamics G.P. and its licensors. The Service is protected by copyright, trademark, and other laws. 
                Our trademarks and trade dress may not be used in connection with any product or service without our prior 
                written consent.
              </p>
              <p>
                All trademarks, service marks, trade names, and logos of third parties referenced on this website are the 
                property of their respective owners. Their use is for identification purposes only and does not imply 
                affiliation, endorsement, or sponsorship.
              </p>
            </motion.div>

            <motion.div className="legal-section" variants={fadeInUp}>
              <h2>7. User Responsibilities</h2>
              <p>
                You agree to use the Service only for lawful purposes and in accordance with these Terms of Use. You agree 
                not to:
              </p>
              <ul>
                <li>Violate any applicable laws or regulations</li>
                <li>Infringe upon the rights of others</li>
                <li>Transmit any harmful code, viruses, or malicious software</li>
                <li>Attempt to gain unauthorized access to the Service or related systems</li>
                <li>Use the Service in any manner that could damage, disable, or impair the Service</li>
                <li>Impersonate any person or entity or misrepresent your affiliation with any person or entity</li>
              </ul>
            </motion.div>

            <motion.div className="legal-section" variants={fadeInUp}>
              <h2>8. Indemnification</h2>
              <p>
                <strong>You agree to defend, indemnify, and hold harmless SkyDynamics G.P., its directors, officers, employees, 
                affiliates, agents, contractors, and licensors from and against any and all claims, damages, obligations, losses, 
                liabilities, costs, or debt, and expenses (including but not limited to attorney's fees) arising from:</strong>
              </p>
              <ul>
                <li>Your use of and access to the Service</li>
                <li>Your violation of any term of these Terms of Use</li>
                <li>Your violation of any third-party right, including without limitation any copyright, property, or privacy right</li>
                <li>Any claim that your use of the Service caused damage to a third party</li>
                <li>Any regulatory non-compliance or related claims</li>
              </ul>
            </motion.div>

            <motion.div className="legal-section" variants={fadeInUp}>
              <h2>9. Governing Law and Jurisdiction</h2>
              <p>
                These Terms of Use shall be governed by and construed in accordance with the laws of Greece, without regard 
                to its conflict of law provisions. Any disputes arising under or in connection with these Terms of Use shall 
                be subject to the exclusive jurisdiction of the courts of Heraklion, Greece.
              </p>
            </motion.div>

            <motion.div className="legal-section" variants={fadeInUp}>
              <h2>10. Severability</h2>
              <p>
                If any provision of these Terms of Use is found to be unenforceable or invalid, that provision shall be 
                limited or eliminated to the minimum extent necessary so that these Terms of Use shall otherwise remain in 
                full force and effect and enforceable.
              </p>
            </motion.div>

            <motion.div className="legal-section" variants={fadeInUp}>
              <h2>11. Changes to Terms</h2>
              <p>
                We reserve the right, at our sole discretion, to modify or replace these Terms of Use at any time. If a 
                revision is material, we will try to provide at least 30 days notice prior to any new terms taking effect.
              </p>
              <p>
                By continuing to access or use our Service after those revisions become effective, you agree to be bound by 
                the revised terms. If you do not agree to the new terms, please stop using the Service.
              </p>
            </motion.div>

            <motion.div className="legal-section" variants={fadeInUp}>
              <h2>12. Contact Information</h2>
              <p>
                If you have any questions about these Terms of Use, please contact us:
              </p>
              <div className="contact-info">
                <p>
                  <strong>SkyDynamics G.P.</strong><br />
                  Science & Technology Park of Crete<br />
                  Heraklion, Greece
                </p>
                <p>
                  <Mail size={16} style={{ display: 'inline', marginRight: '8px' }} />
                  <a href="mailto:legal@skydynamics.aero">legal@skydynamics.aero</a>
                </p>
                <p>
                  <Mail size={16} style={{ display: 'inline', marginRight: '8px' }} />
                  <a href="mailto:info@skydynamics.aero">info@skydynamics.aero</a>
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
