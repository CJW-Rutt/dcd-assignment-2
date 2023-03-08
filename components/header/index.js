import styles from './Header.module.css'
import Image from 'next/image'
import Link from 'next/link';

export default function Header() {
    return (
        <>
            <div className={styles.headerContainer}>
                <Image src='/logo/logo.png' alt='/logo/logo.png' height={30} width={220} />
                <div className={styles.headerNavigation}>
                    <div className={styles.navButton}>Learn</div>
                    <div className={styles.navButton}>About</div>
                    <div className={styles.shopButton}>Shop</div>
                    <div className={styles.shoppingCart}><i class="fa fa-shopping-cart fa-2x" aria-hidden="true"></i></div>
                </div>
            </div>
        </>
    );
}