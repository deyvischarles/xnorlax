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
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Navbar toggleTheme={toggleTheme} />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
