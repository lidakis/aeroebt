import { motion, AnimatePresence } from 'framer-motion'
import { Cookie, X } from 'lucide-react'
import { useAppSelector, useAppDispatch } from '../store/hooks'
import { setCookieConsent } from '../store/slices/uiSlice'
import './CookieConsent.css'

export default function CookieConsent() {
  const cookieConsent = useAppSelector((state) => state.ui.cookieConsent)
  const dispatch = useAppDispatch()

  const handleAccept = () => {
    dispatch(setCookieConsent(true))
  }

  const handleDecline = () => {
    dispatch(setCookieConsent(true))
  }

  return (
    <AnimatePresence>
      {!cookieConsent && (
        <motion.div
          className="cookie-consent"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: 'spring', damping: 25, stiffness: 200 }}
        >
          <div className="cookie-content">
            <div className="cookie-icon">
              <Cookie size={24} />
            </div>
            <div className="cookie-text">
              <p>
                We use cookies to enhance your experience, analyze site traffic, and for marketing purposes. 
                By continuing to use our site, you consent to our use of cookies.
              </p>
            </div>
            <div className="cookie-actions">
              <button className="btn btn-secondary" onClick={handleDecline}>
                Decline
              </button>
              <button className="btn btn-primary" onClick={handleAccept}>
                Accept All
              </button>
            </div>
            <button className="cookie-close" onClick={handleDecline} aria-label="Close">
              <X size={18} />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
