import Head from 'next/head'
import { useState, useEffect } from 'react'
import { ThemeProvider, DefaultTheme } from 'styled-components'

// import UsePersistedState from '../utils/usePersistedState'
import Light from '../styles/Themes/light'
import Dark from '../styles/Themes/dark'

import GlobalStyle from '../styles/global'
import Navbar from '../components/Navbar'

const MyApp = ({ Component, pageProps }) => {
  
  useEffect(() => {
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', () => {navigator.serviceWorker.register('/sw.js')})
    }
  }, [])

  // const [theme, setTheme] = UsePersistedState<DefaultTheme>('theme', Dark)
  const [theme, setTheme] = useState(Dark)

  const toggleTheme = () => {
    setTheme(theme.title === 'Dark' ? Light : Dark)
  }

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Navbar toggleTheme={toggleTheme} />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
