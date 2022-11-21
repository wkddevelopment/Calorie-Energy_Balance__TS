import styles from '../styles/About.module.css';
import type { NextPage } from 'next'
import Head from 'next/head';
import useTranslation from 'next-translate/useTranslation';

const About: NextPage = () => {
  
  const { t, lang } = useTranslation('common');

  return (
      <>
         
        <Head>
          <title>Über || Calorie-Energy_Balance (WKD-APLHA Version)</title>
        </Head>

        {/* Main */}
        <div className={styles.about_title_div}>
          <h1 className={styles.about_title_h1}>Über diese App</h1>
          <p className={styles.about_title_p}>Diese App berechnet die Tages-, Wochen, Monats- und Jahresdifferenz zwischen Energieaufnahme (Essen, Trinken, Naschen, usw...) und Energieverbrauch (Sport, zu Fuß gehen, usw...). Die App ist noch in der Entwicklung und soll voll ausgebaut eine Datenbank beinhalten, in der Lieblingsessen und wiederkehrende sportliche Aktivitäten gespeichert werden können. Hierzu ist auch eine Suchfunktion angedacht um eingespeichertes rasch zu finden. <br /> Natürlich wird auch ein Login implementiert, damit deine Daten geschützt sind. Das Layout und Design wird sich noch stark verändern. Ob Daten von anderen Apps (z.B.: Health Kit von Apple) eingespielt werden können, ist noch offen. Diese App ist ein Freizeitprojekt, Updates und Patches können daher einige Zeit in Anspruch nehmen!</p>
        </div>

      </>
  ) 

};

export default About