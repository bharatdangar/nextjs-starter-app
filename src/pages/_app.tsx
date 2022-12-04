import { FC, useEffect } from 'react'
import { AppProps } from 'next/app'
import TagManager from 'react-gtm-module'
import { AnimatePresence } from 'framer-motion'
import TheDefaultMeta from '../components/TheDefaultMeta'
import TheAppReveal from '../components/TheAppReveal'
import { AppIsReadyProvider } from '../context/appIsReady'
import '../css/app.css'

const App: FC = ({ Component, router, pageProps }: AppProps) => {
  const url = `${process.env.NEXT_PUBLIC_BASE_URL}${router.route}`

  useEffect(() => {
    TagManager.initialize({ gtmId: process.env.NEXT_PUBLIC_GTM_ID })
  }, [])

  return (
    <div className="app relative border">
      <AppIsReadyProvider>
        <TheDefaultMeta canonical={url} />
        <AnimatePresence
          mode="wait"
          initial={false}
          onExitComplete={() => window.scrollTo(0, 0)}
        >
          <Component {...pageProps} key={url} />
        </AnimatePresence>
        <TheAppReveal />
      </AppIsReadyProvider>
    </div>
  )
}

export default App
