import { Html, Head, Main, NextScript } from 'next/document';

const Document = () => {
  const siteLang= 'en';

  return (
    <Html lang={siteLang}>
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
