import Head from 'next/head';

const TheMeta = () => {
  const site = {
    themeColor: '#000000',
    name: 'Hypertype',
    description: '',
  };

  return (
    <Head>
      <meta name="theme-color" content={site.themeColor} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="" />
      <meta property="og:site_name" content={site.name} />
      <meta property="og:title" content="" />
      <meta property="og:description" content={site.description} />
      <meta name="description" content={site.description} />
      {/* <meta property="og:image" content="" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" /> */}


      {/* Favicons */}
      <link rel="icon" href="/favicon/favicon.svg" />
      <link rel="icon" type="image/x-icon" href="/favicon/favicon.ico" />
      <link rel="apple-touch-icon" href="/favicon/apple-touch-icon-180x180.png" />
      <link rel="mask-icon" href="/favicon/safari-mask-icon.svg" color={site.themeColor}  />

      {/* Preload fonts */ }
      {/* All browsers supporting preload also supports .woff2, so no need to preload .woff files. */}
      {/* <link rel="preload" href="/fonts/.woff2" as="font" type="font/woff2" crossOrigin="anonymous" /> */}
    </Head>
  );
};

export default TheMeta;
