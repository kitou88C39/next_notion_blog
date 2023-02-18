import { Inter } from '@next/font/google';
import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Layout from '../components/Layout';

const inter = Inter({ subsets: ['latin'] });

const Home: NextPage = () => {
  return <Layout />;
};

export default Home;
