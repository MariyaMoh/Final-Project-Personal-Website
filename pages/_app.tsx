import '../styles/globals.css';
import { NextUIProvider } from '@nextui-org/react';
import type { AppProps } from 'next/app';
import styles from '../styles/Home.module.css';
import { Header } from '../Components/Header';
import { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';


function MyApp({ Component, pageProps }: AppProps) {
 useEffect(() => {
   Aos.init({duration:2000});
   
 }, []);

  
  return (
    <NextUIProvider>
      <div className={styles.PageContainer}>
        <Header />
        <Component {...pageProps} />
      </div>
    </NextUIProvider>
  );
}

export default MyApp;
