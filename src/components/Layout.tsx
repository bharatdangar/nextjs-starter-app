import { FC, PropsWithChildren } from 'react'
import ThePageTransition from './animation/ThePageTransition'
import SiteHeader from './navigation/SiteHeader'

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <SiteHeader />
      <ThePageTransition>
        <div id="main">
          {children}
        </div>
      </ThePageTransition>
    </>
  )
}

export default Layout
