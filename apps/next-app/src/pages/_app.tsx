import '../styles/globals.css'
import React from "react"
import type { AppProps } from 'next/app'

const App = ( {Component, pageProps }: AppProps) => {
  // eslint-disable-next-line react/jsx-props-no-spreading
   <Component {...pageProps} />
}

export default App