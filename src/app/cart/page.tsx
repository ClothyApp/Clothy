import React from "react";
import styles from './cart.module.css';
import { HeaderNavWidget, TrendsWidget, StoresWidget } from "@/Widgets";
import CartWidget from "@/Widgets/CartWidget";





function Cart() {
    return (
        <div className={styles.container}>
          <header className={styles.header}>
            <HeaderNavWidget mode="menu" />
          </header>
          <main className={styles.main}>
            <CartWidget/>
          </main>
          <footer className={styles.footer}></footer>
        </div>
      );
}

export default Cart;
