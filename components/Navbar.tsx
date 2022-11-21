import Link from 'next/link';
import useTranslation from 'next-translate/useTranslation';
import styles from '../styles/Navbar.module.css';

export const Navbar = () => {
  
    const { t, lang } = useTranslation('common');

    return (
            <nav className={styles.mynavbar}>

                <ul>

                    {/* Home */}
                    <li className={styles.dropdown}>
                        <div className={`${styles.navbar_link} ${styles.navbar_link_content_dropdown}`} >Menü</div>
                            <div className={styles.dropdown_content}>
                                <Link className={`${styles.navbar_link} ${styles.nav_item_content_dropdown_li_2}`} href="/sorry">Produktdatenbank</Link>
                                <Link className={`${styles.navbar_link} ${styles.nav_item_content_dropdown_li_2}`} href="/sorry">Trainingsdatenbank</Link>
                                <Link className={`${styles.navbar_link} ${styles.nav_item_content_dropdown_li_1}`} href="/about">Über</Link>
                                <Link className={`${styles.navbar_link} ${styles.nav_item_content_dropdown_li_2}`} href="/contact">Kontakt</Link>
                            </div>
                    </li>
                    
                    {/* Content */}
                    <li className={styles.nav_item_energy}>
                        <Link href="/absorption" className={`${styles.navbar_link} ${styles.navbar_link_power}`} >Energie</Link>
                    </li>

                    {/* About & Contact */}
                    <li className={styles.nav_item_consumption}>
                        <Link href="/consumption" className={`${styles.navbar_link} ${styles.navbar_link_consumption}`} >Verbauch</Link>
                    </li>

                </ul>
            </nav>
    )
} 
