'use client';
import React from "react";
import styles from "./styles.module.css";
import LogoSvg from "@/assets/svg/Isolation_Mode.svg";
import { SvgLoader } from "@/utils";


function Logo() {
  return (
    <div className={styles.clothy_logo}>
      <SvgLoader svg={LogoSvg} />
    </div>
  );
}

export default Logo;
