import Image from 'next/image';
import styles from '../styles/PizzaCards.module.css'
import Link from 'next/link';

const PizzaCards = ({pizza}) => {
    return (
        <div className={styles.container}>
            <Link href={`/product/${pizza._id}`} passHref>
                <Image src={pizza.img} alt="" width="300" height="300" />
            </Link>
            <h1 className={styles.title}> {pizza.title}</h1>
            <span className={styles.price}>${pizza.prices[0]}</span>
            <p className={styles.desc}>{pizza.desc}</p>
        </div>
    );
}

export default PizzaCards;