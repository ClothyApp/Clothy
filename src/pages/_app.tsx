import React from 'react';
import '@/config/css/globals.css'

interface AppProps {
  Component: React.ComponentType<any>; // Type for the page component
  pageProps: Record<string, any>; // Type for page props (flexible)
}

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <React.StrictMode>
      <Component {...pageProps} />
    </React.StrictMode>
  );
}