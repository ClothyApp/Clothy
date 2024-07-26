import CTAVendorWidget from "@/Widgets/CTAVendorWidget";
import StoreWidgets from "@/Widgets/StoresWidget";
import TrendsWidget from "@/Widgets/TrendsWidget";

import styles from "./page.module.css";

import React from "react";
import { HeaderNavWidget } from "@/Widgets";


interface indexPageProps {}

function index({}: indexPageProps) {

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <HeaderNavWidget mode="complete"/>
      </main>
      <footer className={styles.footer}></footer>
    </div>
  );
}

export default index;
