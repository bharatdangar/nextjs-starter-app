import { FC } from 'react'
import Logotype from '../Logotype'
import NSLink from './NSLink'

const SiteHeader: FC = () => {
  return (
    <header>
      <NSLink href="/">
        <Logotype />
      </NSLink>
      <nav>
        <ul className="flex border">
          <li><NSLink href="/">Home</NSLink></li>
          <li><NSLink href="/about">About</NSLink></li>
        </ul>
      </nav>
    </header>
  )
}

export default SiteHeader
