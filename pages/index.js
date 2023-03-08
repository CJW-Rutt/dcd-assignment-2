import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import { inventory } from '../data/inventory.js'
import Products from '@/components/products/index.js'
import { useState } from 'react'
import Header from '@/components/header/index.js'
import Footer from '@/components/footer/index.js'

export default function Home() {

  const [productInventory, setProductInventory] = useState({...inventory});

  const [gender, setGender] = useState();
  const [category, setCategory] = useState();

  return (
    <>
      <Head>
        <title>CHANGE ME</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Golos+Text:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" /> 
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/fork-awesome@1.2.0/css/fork-awesome.min.css" integrity="sha256-XoaMnoYC5TH6/+ihMEnospgm0J1PM/nioxbOUdnM8HY=" crossorigin="anonymous"></link>
      </Head>
      
      <main className={styles.main}>
        <Header />
        <div className={styles.bodyContainer}>
          <div className={styles.leftCol}>
            <div className={styles.filterContainer}>
              <p>Filter By:</p>
              <div className={styles.categoryHeader} onClick={() => {setGender("Male"); setCategory(null);}}>Men's</div>
              <div className={styles.category} onClick={() => {setGender("Male"); setCategory("Hoodies");}}>Hoodies</div>
              <div className={styles.category} onClick={() => {setGender("Male"); setCategory("Jackets");}}>Jackets</div>
              <div className={styles.category} onClick={() => {setGender("Male"); setCategory("Headgear");}}>Headgear</div>
              <div className={styles.categoryHeader} onClick={() => {setGender("Female"); setCategory(null);}}>Women's</div>
              <div className={styles.category} onClick={() => {setGender("Female"); setCategory("Hoodies");}}>Hoodies</div>
              <div className={styles.category} onClick={() => {setGender("Female"); setCategory("Jackets");}}>Jackets</div>
              <div className={styles.category} onClick={() => {setGender("Female"); setCategory("Headgear");}}>Headgear</div>
              <div className={styles.categoryHeader} onClick={() => {setGender("Unisex"); setCategory(null);}}>Unisex</div>
              <div className={styles.category} onClick={() => {setGender("Unisex"); setCategory("Hoodies");}}>Hoodies</div>
              <div className={styles.category} onClick={() => {setGender("Unisex"); setCategory("Jackets");}}>Jackets</div>
              <div className={styles.category} onClick={() => {setGender("Unisex"); setCategory("Headgear");}}>Headgear</div>
            </div>
          </div>
          <div className={styles.rightCol}>
            {
              productInventory.clothing && productInventory.clothing.map(( clothing, index ) => {
                if ( clothing.sex == gender && category == null ) {
                    return(
                        <>
                            <Products key={index} title={clothing.title} />
                        </>
                    )
                } else if ( clothing.sex == gender && clothing.category == category ){
                    return(
                        <>
                            <Products key={index} title={clothing.title} cost={clothing.cost} color={clothing.hex} />
                        </>
                    )
                }
              })
            }
          </div>
        </div>
       <Footer />
      </main>
    </>
  )
}
