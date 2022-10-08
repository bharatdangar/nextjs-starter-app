import { FC } from 'react';
import { Html, Head, Main, NextScript } from 'next/document';

const Document: FC = () => {
  return (
    <Html>
      <Head>
        {/**
         * Place Google or Typekit fonts here for Next.js font optimization.
         */}
      </Head>
      <body className="bg-white">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
