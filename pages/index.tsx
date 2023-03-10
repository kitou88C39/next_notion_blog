import type { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Card from '../components/Card';
import Layout from '../components/Layout';
import { siteConfig } from '../site.config';
import { IndexProps } from '../types/types';
import { fetchPages } from '../utils/notion';
import { sampleCards } from '../utils/sample';

export const getStaticProps: GetStaticProps = async () => {
  const { results } = await fetchPages({});
  return {
    props: {
      pages: results ? results : [],
    },
    revalidate: 10,
  };
};

const Home: NextPage<IndexProps> = ({ pages }) => {
  return (
    <Layout>
      <div className='pt-12'>
        <h1 className='mb-8 text-5xl'>{siteConfig.title}</h1>
        <div className='grid w-full my-12 mt-10 md:gap-6 md:grid-cols-2'>
          {/* Card */}
          {pages.map((page, index) => (
            <Card key={index} page={page} />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Home;
