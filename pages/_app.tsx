import { ChakraProvider, extendTheme } from "@chakra-ui/react"
import themeConfig from "../theme/theme.config"
import '../styles/globals.css'
import type { AppProps } from 'next/app'

const theme = extendTheme(themeConfig)

export default function App({ Component, pageProps }: AppProps) {
  return <ChakraProvider theme={theme}>
    <Component {...pageProps} />
  </ChakraProvider>
}
