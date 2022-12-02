import Head from 'next/head'
import { ThemeProvider, DefaultTheme } from 'styled-components'

import UsePersistedState from '../utils/usePersistedState'
import Dark from '../styles/Themes/dark'
import Light from '../styles/Themes/light'

import GlobalStyle from '../styles/global'
import Navbar from '../components/Navbar'

const MyApp = ({ Component, pageProps }) => {
  const [theme, setTheme] = UsePersistedState<DefaultTheme>('theme', Dark)

  const toggleTheme = () => {
    setTheme(theme.title === 'Dark' ? Light : Dark)
  }

  return (
    <>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=2 shrink-to-fit=no, viewport-fit=cover' />
      </Head>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Navbar toggleTheme={toggleTheme} />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

export default MyApp
