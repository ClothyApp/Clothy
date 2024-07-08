"use client";
import React from "react";
import styles from "./styles.module.css";
import { FiSearch } from "react-icons/fi";

interface SearcherProps {}

function Searcher({}: SearcherProps) {

  return (
    <div className={styles.container}>
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
    </div>
  );
}

export default Searcher;
