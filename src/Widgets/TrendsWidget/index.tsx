import React from "react";
import styles from "./styles.module.css";
import { ProductCard } from "@/components";

interface TrendsWidgetProps {}

const TrendsWidget: React.FC<TrendsWidgetProps> = ({}) => {
    const testTrend = new Array(6).fill("")
  return (
    <section className={styles.trends_widget}>
        <h1>Trends</h1>
        <div className={styles.wrapper_trends}>
            {
                testTrend.map((el, i: number)=>{
                    return (
                        <div key={i} className={styles.trend}>
                            <ProductCard />
                        </div>
                    ) 
                })
            }
        </div>
    </section>
  );
};

export default TrendsWidget;
