import { Inter } from '@next/font/google';
import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Layout from '../components/Layout';
import { siteConfig } from '../site.config';
import { sampleCards } from '../utils/sample';

const inter = Inter({ subsets: ['latin'] });

const Home: NextPage = () => {
  return (
    <Layout>
      <div className='pt-12'>
        <h1 className='mb-8 text-5xl'>{siteConfig.title}</h1>
        <div className='grid w-full my-12 mt-10 md:gap-6 md:grid-cols-2'>
          {/* Card */}
          {sampleCards.map((page, index) => (
            <p key={index}>{page.name}</p>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Home;
