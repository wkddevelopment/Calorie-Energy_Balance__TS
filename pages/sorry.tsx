import styles from '../styles/Sorry.module.css';
import type { NextPage } from 'next'
import Head from 'next/head';
import useTranslation from 'next-translate/useTranslation';
import Image from 'next/image';
import sorrypic from '/public/graphics/pics/sorry.jpg';

const Sorry: NextPage = () => {
  
  const { t, lang } = useTranslation('common');

  return (
      <>
         
        <Head>
          <title>Sorry || Calorie-Energy_Balance (WKD-APLHA Version)</title>
        </Head>

        {/* Title */}
        <div className={styles.sorry_title_div}>
          <h1 className={styles.sorry_title_h1}>Entschuldigung....</h1>
          <p>Diese App ist noch in der Entwicklung. Die von dir aufgerufene Seite ist leider noch in Produktion.</p>
        </div>

        <div className={styles.sorry_img}>
          <Image src={sorrypic} alt='Image to say sorry' width='250' height='250'></Image>
        </div>


      </>
  ) 

};

export default Sorry