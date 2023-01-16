import styles from '../../styles/Product.module.css'
import Image from 'next/image';
import { useState } from 'react';

const Product = () => {
    const [size, setSize] = useState(0);
    const pizza = {
        id : 1,
        img : "/img/pizza.png",
        name : "CAMPAGNOLA",
        price : [19.9, 23.9, 27.9],
        desc : "sdrtgr dtfilkf dryuu.oi tderdtyikpo hguhyuiupoiob hgyuhiikkl ylk09ew; uiu98j9703r4 ui6dhof dfzxfckhl ygtsdp to;[ hhn iut[p omp;wej09fi3 ftfksd;lu tuhsadflw ugukaw;jep23 ytu8e6uion uiowfei7439pweo joo9-ife3kf luipo[lplo[ uiyl9i[-032; up79iro0-ri"
    };

    return (
        <div className={styles.container}>
            <div className={styles.left}>
                <div className={styles.imgContainer}>
                    <Image src={pizza.img} alt="" objectFit='contain' layout='fill' />
                </div>
            </div>
            <div className={styles.right}>
                <h1 className={styles.title}>{pizza.name}</h1>
                <span className={styles.price}>${pizza.price[size]}</span>
                <p className={styles.desc}>{pizza.desc}</p>
                <h3 className={styles.choose}>Choose the size</h3>
                <div className={styles.sizes}>
                    <div className={styles.size} onClick={() => setSize(0)}>
                        <Image src="/img/size.png" layout="fill" alt="" />
                        <span className={styles.number}>Small</span>
                    </div>
                    <div className={styles.size} onClick={() => setSize(1)}>
                        <Image src="/img/size.png" layout="fill" alt="" />
                        <span className={styles.number}>Medium</span>
                    </div>
                    <div className={styles.size} onClick={() => setSize(2)}>
                        <Image src="/img/size.png" layout="fill" alt="" />
                        <span className={styles.number}>Large</span>
                    </div>
                </div>
                <h3 className={styles.choose}>Choose additional ingredients</h3>
                <div className={styles.ingredients}>
                    <div className={styles.option}>
                        <input type="checkbox" id="double" name='double' className={styles.checkbox}/>
                        <label htmlFor="double"> Double Ingredients</label>
                    </div>
                    <div className={styles.option}>
                        <input type="checkbox" id="extra" name='extra' className={styles.checkbox}/>
                        <label htmlFor="extra"> Extra chess</label>
                    </div>
                    <div className={styles.option}>
                        <input type="checkbox" id="spicy" name='spicy' className={styles.checkbox}/>
                        <label htmlFor="spicy"> Spicy Ingredients</label>
                    </div>
                    <div className={styles.option}>
                        <input type="checkbox" id="garlic" name='garlic' className={styles.checkbox}/>
                        <label htmlFor="garlic"> Garlic Sauce</label>
                    </div>
                </div>
                <div className={styles.add}>
                    <input type="number" defaultValue={1} className={styles.quantity}/>
                    <button className={styles.button}>Add to cart</button>
                </div>
            </div>
        </div>
    );
}

export default Product;