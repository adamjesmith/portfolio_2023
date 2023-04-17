import * as React from 'react';

import { Basic, Footer } from '@/components/common';
import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

export default function NotFoundPage() {
  return (
    <Layout>
      <Seo templateTitle='Not Found' />

      <Basic title='Page Not Found' warning={true}></Basic>

      <Footer></Footer>
    </Layout>
  );
}
