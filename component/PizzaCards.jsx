import Image from 'next/image';
import styles from '../styles/PizzaCards.module.css'

const PizzaCards = () => {
    return (
        <div className={styles.container}>
            <Image src="/img/pizza.png" alt="" width="300" height="300" />
            <h1 className={styles.title}> FIORI DI ZUCCA</h1>
            <span className={styles.price}>$19.99</span>
            <p className={styles.desc}>SDSERTF fttu7utdtrif tygeuijftrgfjeje9gtrgyjkpo</p>
        </div>
    );
}

export default PizzaCards;