import '../styles/globals.css';
import Head from 'next/head';
import type { AppProps } from 'next/app';
import { Navbar } from '../components/Navbar';

function App({ Component, pageProps }: AppProps) {
  
  return (
      <>
        <Head>
          <meta name='viewport' content='width=device-width, initial-scale=1' />
          <meta name='author' content='Stefan Bartl (wkd-development)' />
          <meta name='description' content='Personal calorie/energy calculator to visualize a calorie surplus/deficit.' />
          <meta name='keywords' content='Food, Gym, Energy, Weight, Fitness, Sass, Javascript, Typescript, Node.js, React, Next.js' />
          <link rel='icon' sizes='16x16' href='/graphics/logos/dev_logo.png' />
          <link rel='apple-touch-icon' sizes='120x120' href='/graphics/logos/dev_logo.png' />
        </Head>
        
        <div className='app-container'>

          <div className='navbar-container'>
            <Navbar />
          </div>

          <Component {...pageProps} />
          
        </div>

      </>
  ) 

}

export default App