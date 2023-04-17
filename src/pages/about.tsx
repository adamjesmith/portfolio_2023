import * as React from 'react';

import { Basic, Footer } from '@/components/common';
import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

export default function AboutPage() {
  return (
    <Layout>
      <Seo templateTitle='About' />
      <Basic title='About Coming Soon'></Basic>

      <Footer></Footer>
    </Layout>
  );
}
