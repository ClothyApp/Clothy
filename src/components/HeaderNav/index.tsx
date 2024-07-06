"use client";
import React from "react";
import Image from "next/image";
import styles from "./styles.module.css";
import { FiSearch } from "react-icons/fi";
import { FiMenu } from "react-icons/fi";

interface HeaderNavProps {}

function HeaderNav({}: HeaderNavProps) {
  return (
    <div className={styles.container}>
      <div className={styles.clothy_logo}>
        {/* <Image  /> */}
        logo
      </div>
      <div className={styles.searcher}>
        <h1>Hello</h1>
        <div className={styles.wrapper_search}>
          <input
            className={styles.search_input}
            type="text"
            placeholder="Ingresa tu busqueda"
          />
          <FiSearch size={30} />
        </div>
        <p>Busca tu prenda favorita</p>
      </div>
      <div className={styles.main_menu}>
        <FiMenu size={30} />
      </div>
    </div>
  );
}

export default HeaderNav;
