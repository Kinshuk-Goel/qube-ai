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

                <Link href="pages/about">
                    <div className={styles['navbar-item']}>About</div>
                </Link>

                <Link href="/contact">
                    <div className={styles['navbar-item']}>Contact</div>
                </Link>
                
            </div>
        </nav>
    );
}

export default Navbar;
