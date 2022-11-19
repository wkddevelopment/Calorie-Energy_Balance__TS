import Link from 'next/link';
import useTranslation from 'next-translate/useTranslation';
import styles from '../styles/Navbar.module.css';

export const Navbar = () => {
  
    const { t, lang } = useTranslation('common');

    return (
            <nav className={styles.mynavbar}>

                <ul>

                    {/* Home */}
                    <li className={styles.nav_item_home}>
                        <Link href="/" className={`${styles.navbar_link} ${styles.navbar_link_home}`} >Home</Link>
                    </li>
                    
                    {/* Content */}
                    <li className={styles.dropdown}>
                        <div className={`${styles.navbar_link} ${styles.navbar_link_content_dropdown}`} >Content</div>
                            <div className={styles.dropdown_content}>
                                <Link  className={`${styles.navbar_link} ${styles.nav_item_content_dropdown_li_1}`} href="/">Content 1</Link>
                                <Link className={`${styles.navbar_link} ${styles.nav_item_content_dropdown_li_2}`} href="/">Content 2</Link>
                            </div>
                    </li>

                    {/* About & Contact */}
                    <li className={styles.nav_item_about}>
                        <Link href="/about" className={`${styles.navbar_link} ${styles.navbar_link_about}`} >About - Contact</Link>
                    </li>

                </ul>
            </nav>
    )
} 
