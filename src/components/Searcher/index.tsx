"use client";
import React from "react";
import styles from "./styles.module.css";
import { FiSearch } from "react-icons/fi";

type Mode = "simple" | "full"
interface SearcherProps {
  mode?: Mode
}

function Searcher({mode = "full"}: SearcherProps) {

  return (
    <div className={`${mode === "full" ? styles.container : styles.container_simple}`}>
      <div className={styles.searcher}>
      {
        mode === "full" ? (
          <h1>Hello</h1>
        ) :<></> 
      }
        <div className={styles.wrapper_search}>
          <input
            className={styles.search_input}
            type="text"
            placeholder="Ingresa tu busqueda"
          />
          <FiSearch size={30} />
        </div>
        {
          mode === "full" ? (
            <p>Busca tu prenda favorita</p>
          ) : <></>
        }
      </div>
    </div>
  );
}

export default Searcher;
