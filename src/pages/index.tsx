import { GetStaticProps } from 'next';
import * as React from 'react';

import { IProjectFields } from '@/lib/types/contentful';
import { requestProjects } from '@/lib/utils/contentful';

import { Carousel, Footer } from '@/components/common';
import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

type Props = {
  projects: IProjectFields[];
};

export const getStaticProps: GetStaticProps = async () => {
  const projects = await requestProjects();

  return {
    props: { projects },
  };
};

export default function HomePage({ projects }: Props) {
  return (
    <Layout>
      {/* <Seo templateTitle='Home' /> */}
      <Seo />

      <main className='flex h-screen w-full items-center justify-center'>
        <Carousel projects={projects}></Carousel>
      </main>
      <Footer></Footer>
    </Layout>
  );
}
