// Navbar.js

import Link from 'next/link';
import styles from './Navbar.module.scss';

const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <Link href="/">
                <div className={styles['navbar-brand']}>QUBE AI</div>
            </Link>

            <div className={styles['navbar-menu']}>

                <a href="../pages/about.js">
                    <div className={styles['navbar-item']}>About</div>
                </a>

                <Link href="/contact">
                    <div className={styles['navbar-item']}>Contact</div>
                </Link>
                
            </div>
        </nav>
    );
}

export default Navbar;
