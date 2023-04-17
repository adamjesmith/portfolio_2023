import { AppProps } from 'next/app';

import '@/assets/main.css';
import '@/assets/chrome-bug.css';

import { ManagedUIContext } from '@/lib/utils/context';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ManagedUIContext>
      <Component {...pageProps} />
    </ManagedUIContext>
  );
}

export default MyApp;
