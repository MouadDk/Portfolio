import { createContext, useContext, useState } from 'react'
import { translations } from '../i18n'

const LangContext = createContext(null)

export function LangProvider({ children }) {
  const [lang, setLang] = useState('fr')
  const t = translations[lang]
  const toggle = () => setLang(l => l === 'fr' ? 'en' : 'fr')
  return (
    <LangContext.Provider value={{ lang, toggle, t }}>
      {children}
    </LangContext.Provider>
  )
}

export function useLang() {
  return useContext(LangContext)
}
