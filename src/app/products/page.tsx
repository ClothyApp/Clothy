import React from "react";
import styles from './products.module.css';
import { HeaderNavWidget, TrendsWidget, StoresWidget } from "@/Widgets";





function Products() {
    return (
        <div className={styles.container}>
          <header className={styles.header}>
            <HeaderNavWidget mode="complete" />
          </header>
          <main className={styles.main}>
            <StoresWidget />
            <TrendsWidget/>
            <TrendsWidget/>
            <TrendsWidget/>
          </main>
          <aside>
            
          </aside>
          <footer className={styles.footer}></footer>
        </div>
      );
}

export default Products;
