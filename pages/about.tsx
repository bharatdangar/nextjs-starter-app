import { FC } from 'react';
import Head from 'next/head';
import Layout from '../components/Layout';

const About: FC = () => {
  return (
    <Layout>
      <Head>
        <title>About</title>
      </Head>
      <section>
        <p>About page</p>
      </section>
    </Layout>
  );
};

export default About;
