import { FC, PropsWithChildren } from 'react'
import { NextSeo } from 'next-seo'
import { motion } from 'framer-motion'
import NSLink from './NSLink'

type LayoutProps = {
  title?: string;
  description?: string;
  image?: {
    url: string;
    width?: number;
    height?: number;
    alt?: string;
  };
}

const Layout: FC<PropsWithChildren<LayoutProps>> = ({ title, description, image, children }) => {
  return (
    <>
      <NextSeo title={title} description={description} openGraph={{ title, description, images: image && [image] }} />
      <ul className="flex border">
        <li><NSLink href="/">Home</NSLink></li>
        <li><NSLink href="/about">About</NSLink></li>
      </ul>
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ type: 'linear' }}
      >
        {children}
      </motion.main>
    </>
  )
}

export default Layout
