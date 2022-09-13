import { FC } from 'react'
import Head from 'next/head'

const About: FC = () => {
  return (
    <div>
      <Head>
        {/* <title>{siteTitle}</title> */}
      </Head>
      <section>
        <p>About</p>
        <p>
          (This is a sample website - you’ll be building a site like this in{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
    </div>
  )
}

export default About
