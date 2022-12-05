import { FC, PropsWithChildren } from 'react'
import ThePageTransition from './animation/ThePageTransition'
import NSLink from './NSLink'

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <ul className="flex border">
        <li><NSLink href="/">Home</NSLink></li>
        <li><NSLink href="/about">About</NSLink></li>
      </ul>
      <ThePageTransition>
        <div id="main">
          {children}
        </div>
      </ThePageTransition>
    </>
  )
}

export default Layout
