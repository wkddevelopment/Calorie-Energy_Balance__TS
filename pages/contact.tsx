import styles from '../styles/Contact.module.css';
import type { NextPage } from 'next'
import Head from 'next/head';
import useTranslation from 'next-translate/useTranslation';
import Link from 'next/link';

const Contact: NextPage = () => {
  
  const { t, lang } = useTranslation('common');

  return (
      <>
         
        <Head>
          <title>Kontakt || Calorie-Energy_Balance (WKD-APLHA Version)</title>
        </Head>

        {/* Main */}
        <div className={styles.contact_title_div}>
          <h1 className={styles.contact_title_h1}>Kontakt</h1>
          <p className={styles.contact_title_p}>Wenn du mich kontaktieren möchtest, kannst du dies gerne auf meiner Website machen:</p>
          <Link href='https://stefanbartl.vercel.app/de' prefetch={true} target="_blank" className={styles.contact_title_website}>Hier geht's zu meiner Website...</Link>
        </div>

      </>
  ) 

};

export default Contact