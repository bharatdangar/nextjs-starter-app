import { FC } from 'react';
import Head from 'next/head';
import Layout from '../components/Layout';

const Home: FC = () => {
  return (
    <Layout>
      <Head>
        <title>Home</title>
      </Head>
      <section>
        <p>Home page</p>
      </section>
    </Layout>
  );
};

export default Home;
