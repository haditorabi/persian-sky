import '../styles/globals.css';
import { AppProps } from 'next/app';
import { Flowbite } from 'flowbite-react';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Flowbite>
      <Component {...pageProps} />
    </Flowbite>
  );
}

export default MyApp;