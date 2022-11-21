import styles from '../styles/Home.module.css';
import type { NextPage } from 'next'
import Head from 'next/head';
import useTranslation from 'next-translate/useTranslation';

const Home: NextPage = () => {
  
  const { t, lang } = useTranslation('common');

  return (
      <>
         
        <Head>
          <title>Calorie-Energy_Balance (WKD-APLHA Version)</title>
        </Head>

        {/* Title */}
        <div className={styles.home_title_div}>
          <h1 className={styles.home_title_h1}>Kalorien-Energie Balancer</h1>
        </div>

        {/* Summary */}
        <section className={styles.section_summary}>
          <h2>Heute:</h2>
          <p id='today'>0</p>
          <h2>Woche:</h2>
          <p id='week'>0</p>
          <h2>Monat:</h2>
          <p id='month'>0</p>
          <h2>Jahr:</h2>
          <p id='year'>0</p>
        </section>

      </>
  ) 

};

export default Home