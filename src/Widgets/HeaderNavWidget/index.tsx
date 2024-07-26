import React from "react";
import styles from "./styles.module.css";
import { Menu, Searcher, Logo } from "@/components";

type ModeHeader = "complete" | "searcher" | "menu";
interface HeaderNavWidgetProps {
  mode: ModeHeader;
}

const HeaderNavWidget: React.FC<HeaderNavWidgetProps> = ({
  mode = "complete",
}) => {
  return (
    <section className={styles.header_nav_widget}>
      {mode === "complete" || mode === "menu" ? <Logo /> : <></>}
      <h1 className={styles.title}>Vistete con estilo.</h1>
      {mode === "complete" || mode === "searcher" ? <Searcher /> : <></>}
      <h5 className={styles.message}>¡Busca la mejores prendas!</h5>
      {/* {mode === "complete" || mode === "menu" ? <Menu /> : <></>} */}
    </section>
  );
};

export default HeaderNavWidget;
