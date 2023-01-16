import styles from "../styles/PizzaList.module.css"
import Image from "next/image";
import PizzaCards from "./PizzaCards";

const PizzaList = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Best pizza in town</h1>
            <p className={styles.desc}>
                FGood for you dfghjkui hdurtuio.s jhhukljigyulflygyuyui r45hep;o08 tklgh6evtr45k tt4dj';l ngyut6eby656gyuh iovxdc/.loiyfg ets,,j cddfsdfzsrwasqa,k.o trfdtr,mkkiltyt,l trss ferhl.;9 
            </p>
            <div className={styles.wrapper}>
                <PizzaCards/>
                <PizzaCards/>
                <PizzaCards/>
                <PizzaCards/>
                <PizzaCards/>
                <PizzaCards/>
                <PizzaCards/>
                <PizzaCards/>
                <PizzaCards/>
                <PizzaCards/>
                <PizzaCards/>
                <PizzaCards/>
            </div>
        </div>
    );
}

export default PizzaList;