import React from "react";
import styles from "./styles.module.css";
import { Menu, Searcher, Logo } from "@/components";

interface HeaderNavWidgetProps {}

const HeaderNavWidget: React.FC<HeaderNavWidgetProps> = ({}) => {
  return (
    <section className={styles.header_nav_widget}>
      <Logo />
      <Searcher/>
      <Menu />
    </section>
  );
};

export default HeaderNavWidget;
