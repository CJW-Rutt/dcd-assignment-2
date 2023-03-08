import styles from './Products.module.css'
import Image from 'next/image'

export default function Products({
    title="",
    cost="",
    color="",
    colorWidth="20px",
    colorHeight="20px",
    colorBorderRadius="25px"
}) {
    return (
        <>
        <div className={styles.productContainer}>
            <div className={styles.productImage}>
                    {
                                title==="Aerospace" ?    <Image src='/products/hoodies/hood_aerospace_black.png' alt={'/products/hoodies/hood_aerospace_black.png'} width={200} height={200} />            :
                                title==="Forestry" ?   <Image src='/products/hoodies/hoodie_forestry_green.png' alt={'/products/hoodies/hoodie_forestry_green.png'} width={200} height={200} />             :
                                title==="Waterproof Jacket" ?   <Image src='/products/jackets/waterproof_jacket_black.png' alt={'/products/jackets/waterproof_jacket_black.png'} width={200} height={200} />  :
                                title==="Russell Athletic Hood" ?   <Image src='/products/hoodies/russell_athletic_hood_black.png' alt={'/products/jackets/waterproof_jacket_black.png'} width={200} height={200} />  :
                                title==="Classic Avalon Fleece Hoodie" ?   <Image src='/products/hoodies/classic_avalon_fleece_hoodie_black.png' alt={'/products/hoodies/classic_avalon_fleece_hoodie_black.png'} width={200} height={200} />  :
                                title==="Champion Full-Zup Hoodie" ?   <Image src='/products/hoodies/champion_full_zip_hoodie_black.png' alt={'/products/hoodies/champion_full_zip_hoodie_black.png'} width={200} height={200} />  :
                                title==="Soft Shell Hooded Jacket" ?   <Image src='/products/jackets/soft_shell_hooded_jacket_black.png' alt={'/products/jackets/soft_shell_hooded_jacket_black.png'} width={200} height={200} />  :
                                title==="Legacy Adjustable Hat" ?   <Image src='/products/headgear/legacy_adjustable_hat_navy.png' alt={'/products/headgear/legacy_adjustable_hat_navy.png'} width={200} height={200} />  :
                                title==="Legacy Hat Trucker" ?   <Image src='/products/headgear/legacy_hat_trucker_black_cardinal.png' alt={'/products/headgear/legacy_hat_trucker_black_cardinal.png'} width={200} height={200} />  :
                                title==="Legacy Toque" ?   <Image src='/products/headgear/legacy_toque_black.png' alt={'/products/headgear/legacy_toque_black.png'} width={200} height={200} />  :
                                <> </>
                    }
            </div>
            <div className={styles.productTitle}>
                {title}
            </div>
            <div className={styles.colors}>
            {
                Object.keys(color).map((colorOption) => (
                    <div key={colorOption} style={{ backgroundColor: color[colorOption], width: colorWidth, height: colorHeight, borderRadius: colorBorderRadius }}>

                    </div>
                ))
            }
            </div>
            <div className={styles.cost}>
                {'$' + cost}
            </div>
        </div>

        </>
    );
}