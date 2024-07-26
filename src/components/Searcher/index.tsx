"use client";
import React from "react";
import styles from "./styles.module.css";
import { FiSearch } from "react-icons/fi";

type Mode = "searcher" | "complete" ;
interface SearcherProps {
  mode?: Mode
}

function Searcher({mode = "complete"}: SearcherProps) {

  return (
    <div className={`${mode === "complete" ? styles.container : styles.container_simple}`}>
      <div className={`${mode !== "searcher" ? styles.searcher : styles.only_searcher}`}>
        <div className={`${mode !== "searcher" ? styles.wrapper_search : styles.wrapper_only_search}`}>
          <input
            className={`${mode !== "searcher" ? styles.search_input : styles.only_search_input }`}
            type="text"
            placeholder="Ingresa tu busqueda"
          />
          <FiSearch size={30} color="black" />
        </div>
      </div>
    </div>
  );
}

export default Searcher;
