import '../styles/globals.css';
import type { AppProps } from 'next/app';

/**
 * this is the root file of the project.It wraps every page of the application.
 */

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
