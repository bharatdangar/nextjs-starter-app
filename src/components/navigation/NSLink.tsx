import { FC, ReactNode } from 'react'
import Link, { LinkProps } from 'next/link'

interface Props extends LinkProps {
    children: ReactNode
}

const NSLink: FC<Props> = ({ children, href, passHref }) => (
  <Link href={href} passHref={passHref} scroll={false}>
    {children}
  </Link>
)

export default NSLink
