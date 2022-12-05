import { FC, useEffect } from 'react'
import { AppProps } from 'next/app'
import { Inter } from '@next/font/google'
import TagManager from 'react-gtm-module'
import TheDefaultMeta from '../components/TheDefaultMeta'
import TheAppReveal from '../components/TheAppReveal'
import { AppIsReadyProvider } from '../context/appIsReady'
import Layout from '../components/Layout'
import '../css/app.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const App: FC = ({ Component, router, pageProps }: AppProps) => {
  const url = `${process.env.NEXT_PUBLIC_BASE_URL}${router.route}`

  useEffect(() => {
    TagManager.initialize({ gtmId: process.env.NEXT_PUBLIC_GTM_ID })
  }, [])

  return (
    <div className={`app relative border font-body ${inter.variable}`}>
      <AppIsReadyProvider>
        <TheDefaultMeta canonical={url} />
        <Layout>
          <Component {...pageProps} />
        </Layout>
        <TheAppReveal />
      </AppIsReadyProvider>
    </div>
  )
}

export default App
