import styles from './hamburger.module.css'
import Image from 'next/image'
import {useState} from "react"
import Link from 'next/link'

export default function Hamburger() {
    const [popout, setPopout] = useState(false);
    
    const togglePopout = () => {
        setPopout(!popout);
    }
    
    return (
        <>
        <div className={styles.hamgurger_container} onClick={togglePopout}>
            <Image 
                src="/icons/hamburger.png"
                width={50}
                height={50}
            />
        </div>
        {popout ? (
          <div className={styles.menu_overlay}>
            <h1 onClick={togglePopout}>X</h1>
            <ul>
              <li><Link href="/">Learn</Link></li>
              <li><Link href="/">About</Link></li>
              <li><Link href="/">Shop</Link></li>
              <li><Link href="/">Cart</Link></li>
            </ul>
          </div>
        ) : null}
      </>
    )
}