import styles from '../styles/Cart.module.css'
import Image from 'next/image';

const cart = () => {
    return (
        <div className={styles.container}>
            <div className={styles.left}>
                <table className={styles.table}>
                    <tr className={styles.tr}>
                        <th>Product</th>
                        <th>Name</th>
                        <th>Extras</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Total</th>
                    </tr>
                    <tr>
                        <td>
                            <div className={styles.imContainer}>
                                <Image src="/img/pizza.png" alt="" layout='fill' objectFit='contain' />
                            </div>
                        </td>
                        <td>
                            <span className={styles.right}>CORALZO</span>
                        </td>
                    </tr>
                </table>
            </div>
            <div className={styles.right}>
            
        </div>
        </div>
    );
}

export default cart;