import React from "react";
import styles from "./layout.module.css";
function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section className={styles.container}>
      {children}
    </section>
  );
}

export default AuthLayout;
