import styles from '../styles/Consumption.module.css';
import type { NextPage } from 'next'
import Head from 'next/head';
import useTranslation from 'next-translate/useTranslation';

const Consumption: NextPage = () => {
  
  const { t, lang } = useTranslation('common');

  return (
      <>
         
        <Head>
          <title>Energieverbrauch || Calorie-Energy_Balance (WKD-APLHA Version)</title>
        </Head>

        {/* Title */}
        <div className={styles.consumption_title_div}>
          <h1 className={styles.consumption_title_h1}>Energieverbrauch</h1>
        </div>

        {/* Energy Consumption */}
        <section className={styles.section_energy_consumption}>

          <h2>Gib deine aufgenommene Energie ein!</h2>
          

          <form action='' method='post'>

            <div className={styles.consumption_form_div}>
              <label htmlFor='search_absorpe_consumption'>Training</label>
              <input type='search' name='search_absorpe_consumption' id='search_absorpe_consumption' />
            </div>

            <div className={styles.consumption_form_div}>
              <label htmlFor='datetime_absorpe_consumption'>Datum</label>
              <input type='datetime-local' name='datetime_absorpe_consumption' id='datetime_absorpe_consumption'  className={styles.consumption_form_date} />
            </div>

            <div className={styles.consumption_form_div}>
              <label htmlFor='consumption_kcal'>kcal verbraucht</label> 
              <input type='number' name='consumption_kcal' id='consumption_kcal' />
            </div>

            <input type="submit" value="Energie eintragen" id='consumption_submit' className={styles.consumption_form_submit}/>

          </form>

        </section>




        {/* Adding Training */}
        <section className={styles.section_consumption_add}>
          
          <h2>Füge ein neues Training hinzu!</h2>

          <form action='' method='post'>

            <div className={styles.consumption_add_form_div}>
              <label htmlFor='consumption_add_name'>Was ?</label>
              <input type='text' name='consumption_add_name' id='consumption_add_name' />
            </div>

            <div className={styles.consumption_add_form_div}>
              <label htmlFor='consumption_add_time'>Dauer</label>
              <input type='text' name='consumption_add_time' id='consumption_add_time' />
            </div>
            
            <div className={styles.consumption_add_form_div}>
              <label htmlFor='consumption_add_repetitions'>Wiederholungen</label>
              <input type='text' name='consumption_add_repetitions' id='consumption_add_repetitions' />
            </div>


            <div className={styles.consumption_add_form_div}>
              <label htmlFor='consumption_add_kcal'>kcal verbaucht</label>
              <input type='number' name='consumption_add_kcal' id='consumption_add_kcal' />
            </div>



            <div className={styles.consumption_add_form_div}>

            </div>



            <input type="submit" value="Training eintragen" id='consumption_add_submit' className={styles.consumption_add_form_submit}/>

          </form>


        </section>










      </>
  ) 

};

export default Consumption