import React from "react";
import styles from "./styles.module.css";
import CTAVendor from "@/components/CTAVendor";
interface CTAVendorWidgetProps {}

const CTAVendorWidget: React.FC<CTAVendorWidgetProps> = ({}) => {
  return (
    <section className={styles.CTAVendor_Widget}>
        <CTAVendor/>
    </section>
  );
};

export default CTAVendorWidget;
