import { FC } from 'react'
import NSLink from './NSLink'
import Logotype from '../Logotype'

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
