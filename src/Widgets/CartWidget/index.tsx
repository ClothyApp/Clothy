import React from "react";
import styles from "./styles.module.css";
import { CartItem } from "@/components";
interface CartWidgetProps{

}

const CartWidget: React.FC<CartWidgetProps> = () => {
    const data = new Array(5).fill('');
  return (
    <section className={styles.cart_widget}>
        <h1 className={styles.title}>Mi carrito</h1>
        <div className={styles.wrapper_cart_items}>
            {
                data.map((e, i:number)=>{
                    return <CartItem key={i} />
                })
            }
        </div>
        <button className={styles.btn_pay}> Pagar Ahora</button>
    </section>
  );
};

export default CartWidget;
