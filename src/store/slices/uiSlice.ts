import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type Theme = 'light' | 'dark'

const getInitialTheme = (): Theme => {
  const stored = localStorage.getItem('theme')
  if (stored === 'light' || stored === 'dark') return stored
  return 'light' // Default to light theme
}

interface UIState {
  mobileMenuOpen: boolean
  activeDropdown: string | null
  cookieConsent: boolean
  contactFormSubmitted: boolean
  theme: Theme
}

const initialState: UIState = {
  mobileMenuOpen: false,
  activeDropdown: null,
  cookieConsent: localStorage.getItem('cookieConsent') === 'true',
  contactFormSubmitted: false,
  theme: getInitialTheme(),
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
    toggleTheme: (state) => {
      state.theme = state.theme === 'light' ? 'dark' : 'light'
      localStorage.setItem('theme', state.theme)
      document.documentElement.setAttribute('data-theme', state.theme)
    },
    setTheme: (state, action: PayloadAction<Theme>) => {
      state.theme = action.payload
      localStorage.setItem('theme', state.theme)
      document.documentElement.setAttribute('data-theme', state.theme)
    },
  },
})

export const {
  toggleMobileMenu,
  closeMobileMenu,
  setActiveDropdown,
  setCookieConsent,
  setContactFormSubmitted,
  toggleTheme,
  setTheme,
} = uiSlice.actions

export default uiSlice.reducer
