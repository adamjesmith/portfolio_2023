import * as React from 'react';

import { footerLinks } from '@/lib/utils/footer-links';

import { Basic, Footer } from '@/components/common';
import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

export default function ContactPage() {
  return (
    <Layout>
      <Seo templateTitle='Contact' />

      <Basic
        text='adamjesmith@gmail.com'
        title='Contact Me'
        subtitle='Have a project i mind or just want to say hello?'
        links={footerLinks}
      ></Basic>
      <Footer></Footer>
    </Layout>
  );
}
