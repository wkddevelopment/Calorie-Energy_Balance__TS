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

        <section>
          <div className={styles.home_title_div}>
            <h1 className={styles.home_title_h1}>Calorie-Energy_Balancer</h1>
            <p className={styles.home_title_p}>Personal calorie/energy calculator to visualize a calorie surplus/deficit.</p>
          </div>
        </section>
      </>
  ) 

};

export default Home