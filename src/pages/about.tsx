import { FC } from 'react'
import { NextSeo } from 'next-seo'

const AboutPage: FC = () => {
  const title = 'About'
  const description = 'This is the about page'
  const image = {
    url: '',
    width: 1200,
    height: 630,
    alt: 'About page image',
  }

  return (
    <>
      <NextSeo title={title} description={description} openGraph={{ title, description, images: image && [image] }} />
      <section>
        <p>About page</p>
      </section>
    </>
  )
}

export default AboutPage
