import Image from 'next/image'
import Link from 'next/link';

import styles from './Footer.module.css'

export default function Footer() {
    return (
        <>
            <div className={styles.footerOuterContainer}>
                <div className={styles.footerContainer}>
                    <div className={styles.footerColOne}>
                        <Image src='/logo/logo.png' alt='/logo/logo.png' height={16} width={116} />
                    </div>
                    <div className={styles.footerNav}>
                        <div className={styles.footerColTwo}>
                            <p className={styles.pbold} >Navigation</p>
                            <Link href={'/'}>Learn</Link>
                            <Link href={'/'}>About</Link>
                            <Link href={'/'}>Shop</Link>
                            <Link href={'/'}>Cart</Link>
                        </div>
                        <div className={styles.footerColThree}>
                            <p className={styles.pbold} >Support</p>
                            <Link href={'/'}>Chat</Link>
                            <Link href={'/'}>Contact</Link>
                            <Link href={'/'}>Location</Link>
                            <Link href={'/'}>(778)-123-4567</Link>
                        </div>
                        <div className={styles.footerColFour}>
                            <p className={styles.pbold} >Location</p>
                            <p>3700 Willingdon Ave<br />Burnaby, British Columbia<br />Canada V5G 3H2<br /><Link href={'/'}>bcit.ca</Link></p>
                        </div>
                    </div>
                </div>
                <div className={styles.allRightsReserved}>
                    <p>© 2023 BCITSA Geared Up</p>
                </div>
            </div>
        </>
    );
}