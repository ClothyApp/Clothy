import type { Metadata } from "next";
import React, {  } from "react";
import styles from './styles.module.css'


export const metadata: Metadata = {
  title: 'Clothy',
  description: ''
}


function LayoutMobile({ children }: Readonly <{children: React.ReactNode}>) {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        Clothy App
      </header>
      <main className={styles.main}>{children}</main>
      <footer className={styles.footer}>
        routing
      </footer>
    </div>
  );
}

export default LayoutMobile;
