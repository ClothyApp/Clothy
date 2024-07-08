"use client";
import React, { useEffect, useRef, useState } from "react";
import styles from "./styles.module.css";
import {
  FiInbox,
  FiHeadphones,
  FiMenu,
  FiUser,
  FiShoppingCart,
  FiShoppingBag,
} from "react-icons/fi";
import { useScreen } from "usehooks-ts";
import Link from "next/link";
import { Searcher } from "../";

interface MenuProps {}

function Menu({}: MenuProps) {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const screen = useScreen();
  const menuRef = useRef<HTMLDivElement>(null);

  const handleShowMenu = () => {
    setShowMenu(!showMenu);
  };

  const handleClickOutside = (event: MouseEvent | TouchEvent)=> {
    if(menuRef && !menuRef.current?.contains(event.target as Node))
      setShowMenu(false);
    }


    useEffect(()=> {
      if(showMenu){
        document.addEventListener("click", handleClickOutside);
        document.addEventListener("touchend", handleClickOutside)
      } else {
        document.removeEventListener("click", handleClickOutside);
        document.removeEventListener("touchend", handleClickOutside);
      };

      return () => {
        document.removeEventListener("click", handleClickOutside);
        document.removeEventListener("touchend", handleClickOutside);
      }
    }, [showMenu]);


  return (
    <div className={styles.container}>
      <button className={styles.btn_menu} onClick={handleShowMenu}>
        <FiMenu size={30} />
      </button>
      {showMenu && screen.width <= 479 ? (
        <div ref={menuRef} className={`${styles.aside_menu} ${showMenu ? styles.open : ""}`}>
          <div className={styles.section_user}>
            <Link href={"/"}>
              <FiShoppingBag size={30} />
            </Link>
            <Link href={"/cart"}>
              <FiShoppingCart size={30} />
            </Link>
            <Link href={"/profile"}>
              <FiUser size={30} />
            </Link>
          </div>
          <div className={styles.search}>
            {/* <Searcher mode="simple" /> */}
          </div>
          <div className={styles.section_categories}>
            <p>Urbano</p>
            <p>Camisetas</p>
            <p>Pantalones</p>
            <p>Faldas</p>
            <p>Sudaderas</p>
            <p>Vestidos</p>
            <p>Sueteres</p>
          </div>
          <div className={styles.section_categories}>
            <p>Formal</p>
            <p>Deportivo</p>
            <p>Ropa de Playa</p>
            <p>Ropa interior</p>
            <p>Accesorios</p>
            <p>Calzado</p>
          </div>
          <div className={styles.section_support}>
            <button>Modo vendedor</button>
            <FiInbox size={30} />
            <FiHeadphones size={30} />
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}

export default Menu;
