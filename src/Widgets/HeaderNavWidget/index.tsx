import React from "react";
import styles from './styles.module.css';
import { HeaderNav } from "@/components";


interface HeaderNavWidgetProps {}

const HeaderNavWidget: React.FC<HeaderNavWidgetProps> = ({}) => {
  return (
    <section>
        <HeaderNav />
    </section>
  );
};

export default HeaderNavWidget;
