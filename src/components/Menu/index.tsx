"use client";
import React from "react";
import styles from "./styles.module.css"; 
import { FiMenu } from "react-icons/fi";

interface MenuProps {}

function Menu({}: MenuProps) {
  return (
    <div className={styles.main_menu}>
      <FiMenu size={30} />
    </div>
  );
}

export default Menu;
