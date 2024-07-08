import React from "react";
import styles from "./styles.module.css";
import { ProductCard } from "@/components";
import Link from "next/link";

interface TrendsWidgetProps {}

const TrendsWidget: React.FC<TrendsWidgetProps> = ({}) => {
  const testTrend = new Array(6).fill("");
  return (
    <section className={styles.trends_widget}>
      <h1>Trends</h1>
      <div className={styles.wrapper_trends}>
        {testTrend.map((el, i: number) => {
          return (
            <div key={i} className={styles.trend}>
              <Link key={i} href={"/products"}>
                <ProductCard />
              </Link>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default TrendsWidget;
