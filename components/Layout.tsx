import { FC, PropsWithChildren } from 'react';
import { motion } from 'framer-motion';
import LinkNoScroll from './LinkNoScroll';

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <ul className="flex border">
      <li><LinkNoScroll href="/">Home</LinkNoScroll></li>
        <li><LinkNoScroll href="/about">About</LinkNoScroll></li>
      </ul>
      <motion.main
        initial={{ opacity: 0, x: -200, y: 0 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        exit={{ opacity: 0, x: 0, y: -100 }}
        transition={{ type: 'linear' }}
      >
        {children}
      </motion.main>
    </>
  );
};

export default Layout;
