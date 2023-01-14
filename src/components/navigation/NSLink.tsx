import { FC, ReactNode } from 'react'
import Link, { LinkProps } from 'next/link'

interface Props extends LinkProps {
    children: ReactNode
    className?: string
}

const NSLink: FC<Props> = ({ children, href, passHref, className }) => (
  <Link href={href} passHref={passHref} scroll={false} className={className}>
    {children}
  </Link>
)

export default NSLink
