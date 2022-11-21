import styles from '../styles/absorption.module.css';
import type { NextPage } from 'next'
import Head from 'next/head';
import useTranslation from 'next-translate/useTranslation';

const absorption: NextPage = () => {
  
  const { t, lang } = useTranslation('common');

  return (
      <>
         
        <Head>
          <title>Energieaufnahme || Calorie-absorption_Balance (WKD-APLHA Version)</title>
        </Head>

        {/* Title */}
        <div className={styles.absorption_title_div}>
          <h1 className={styles.absorption_title_h1}>Energieaufnahme</h1>
        </div>

        {/* Energy Absorption */}
        <section className={styles.section_energy_absorption}>

          <h2>Gib deine aufgenommene Energie ein!</h2>
          

          <form action='' method='post'>

          <div className={styles.absorption_form_div}>
              <label htmlFor='search_absorpe_absorption'>Produkt</label>
              <input type='search' name='search_absorpe_absorption' id='search_absorpe_absorption' />
            </div>

            <div className={styles.absorption_form_div}>
              <label htmlFor='datetime_absorpe_absorption'>Datum</label>
              <input type='datetime-local' name='datetime_absorpe_absorption' id='datetime_absorpe_absorption'  className={styles.absorption_form_date} />
            </div>

            <div className={styles.absorption_form_div}>
              <label htmlFor='amount_absorpe_absorption'>Menge in g / ml</label>
              <input type='number' name='amount_absorpe_absorption' id='amount_absorpe_absorption' />
            </div>

            <input type="submit" value="Energie eintragen" id='absorption_submit' className={styles.absorption_form_submit}/>

          </form>


        </section>


        {/* Adding Products */}
        <section className={styles.section_absorption_add}>
          
          <h2>Füge ein neues Produkt hinzu!</h2>

          <form action='' method='post'>

            <div className={styles.absorption_add_form_div}>
              <label htmlFor='absorption_add_name'>Produktname</label>
              <input type='text' name='absorption_add_name' id='absorption_add_name' />
            </div>

            <div className={styles.absorption_add_form_div}>
              <label htmlFor='absorption_add_kcal'>kcal pro 100 g / ml</label>
              <input type='number' name='absorption_add_kcal' id='absorption_add_kcal' />
            </div>

            <div className={styles.absorption_add_form_div}>
              <label htmlFor='absorption_add_fat'>Fett pro 100 g / ml</label>
              <input type='number' name='absorption_add_fat' id='absorption_add_fat' />
            </div>

            <div className={styles.absorption_add_form_div}>
              <label htmlFor='absorption_add_carbohydrate'>Kohlenhydrate pro 100 g / ml</label>
              <input type='number' name='absorption_add_carbohydrate' id='absorption_add_carbohydrate' />
            </div>

            <div className={styles.absorption_add_form_div}>
              <label htmlFor='absorption_add_sugar'>...davon Zucker pro 100 g / ml</label>
              <input type='number' name='absorption_add_sugar' id='absorption_add_sugar' />
            </div>

            <div className={styles.absorption_add_form_div}>
              <label htmlFor='absorption_add_protein'>Eiweiß / Proteine pro 100 g / ml</label>
              <input type='number' name='absorption_add_protein' id='absorption_add_protein' />
            </div>

            <input type="submit" value="Produkt eintragen" id='absorption_add_submit' className={styles.absorption_add_form_submit}/>

          </form>


        </section>

      </>
  ) 

};

export default absorption