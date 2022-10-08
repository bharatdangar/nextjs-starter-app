import { FC } from 'react';
import Head from 'next/head';
import { DefaultSeo } from 'next-seo';

interface TheDefaultMetaProps {
  canonical: string
}

const TheDefaultMeta: FC<TheDefaultMetaProps> = ({ canonical }) => {
  const site = {
    themeColor: '#000000',
    locale: 'en',
    name: 'Next.js Starter App',
    description: 'default description',
  };

  return (
    <>
      <DefaultSeo
        titleTemplate={`%s - ${site.name}`}
        defaultTitle={site.name}
        description={site.description}
        canonical={canonical}
        openGraph={{
          type: 'website',
          locale: site.locale,
          url: canonical,
          description: site.description,
          site_name: site.name,
          title: site.name,
          images: [
          // {
          //   url: 'https://www.example.ie/og-image-01.jpg',
          //   width: 1200,
          //   height: 630,
          //   alt: '',
          // },
          ],
        }}
      />
      <Head>
        <meta name="theme-color" content={site.themeColor} />
        {/* Favicons */}
        <link rel="icon" href="/favicon/favicon.svg" />
        <link rel="icon" type="image/x-icon" href="/favicon/favicon.ico" />
        <link rel="apple-touch-icon" href="/favicon/apple-touch-icon-180x180.png" />
        <link rel="mask-icon" href="/favicon/safari-mask-icon.svg" color={site.themeColor}  />
        {/* Preload fonts */ }
        {/* All browsers supporting preload also supports .woff2, so no need to preload .woff files. */}
        {/* <link rel="preload" href="/fonts/.woff2" as="font" type="font/woff2" crossOrigin="anonymous" /> */}
      </Head>
    </>
  );
};

export default TheDefaultMeta;
