import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface UIState {
  mobileMenuOpen: boolean
  activeDropdown: string | null
  cookieConsent: boolean
  contactFormSubmitted: boolean
}

const initialState: UIState = {
  mobileMenuOpen: false,
  activeDropdown: null,
  cookieConsent: localStorage.getItem('cookieConsent') === 'true',
  contactFormSubmitted: false,
}

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    toggleMobileMenu: (state) => {
      state.mobileMenuOpen = !state.mobileMenuOpen
    },
    closeMobileMenu: (state) => {
      state.mobileMenuOpen = false
    },
    setActiveDropdown: (state, action: PayloadAction<string | null>) => {
      state.activeDropdown = action.payload
    },
    setCookieConsent: (state, action: PayloadAction<boolean>) => {
      state.cookieConsent = action.payload
      localStorage.setItem('cookieConsent', String(action.payload))
    },
    setContactFormSubmitted: (state, action: PayloadAction<boolean>) => {
      state.contactFormSubmitted = action.payload
    },
  },
})

export const {
  toggleMobileMenu,
  closeMobileMenu,
  setActiveDropdown,
  setCookieConsent,
  setContactFormSubmitted,
} = uiSlice.actions

export default uiSlice.reducer
