import React from "react";
import styles from "./styles.module.css";
import { Store } from "@/components";

interface StoresWidgetProps {}

const StoreWidgets: React.FC<StoresWidgetProps> = ({}) => {
  const testStores = new Array(10).fill("");
  return (
    <section className={styles.stores_widget}>
      <h1>Stores</h1>
      <div className={styles.wrapper_stores}>
        <div className={styles.stores}>
          {testStores.map((e, i: number) => {
            return <Store key={i} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default StoreWidgets;
