import * as React from 'react';

import { Header } from '@/components/common';

export default function Layout({ children }: { children: React.ReactNode }) {
  // Put Header or Footer Here
  return (
    <>
      <Header></Header>
      {children}
    </>
  );
}
