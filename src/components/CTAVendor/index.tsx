"use client";
import React from "react";
import styles from "./styles.module.css";

interface CTAVendorProps {}

function CTAVendor({}: CTAVendorProps) {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Conviertete un vendedor?</h3>
      <button className={styles.CTA_btn}>something</button>
    </div>
  );
}

export default CTAVendor;
