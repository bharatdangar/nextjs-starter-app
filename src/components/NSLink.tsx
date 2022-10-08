import React, { ReactNode } from 'react';
import Link, { LinkProps } from 'next/link';

interface IProps extends LinkProps {
    children: ReactNode
}

const NSLink = ({ children, href, passHref }: IProps): JSX.Element => (
  <Link href={href} passHref={passHref} scroll={false}>
    {children}
  </Link>
);

export default NSLink;
