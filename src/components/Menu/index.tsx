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
            <FiShoppingBag size={30} />
            <FiShoppingCart size={30} />
            <FiUser size={30} />
          </div>
          <div className={styles.search}>Searcher</div>
          <div className={styles.section_categories}>
            <p>option</p>
            <p>option</p>
            <p>option</p>
            <p>option</p>
            <p>option</p>
            <p>option</p>
            <p>option</p>
          </div>
          <div className={styles.section_categories}>
            <p>options</p>
            <p>options</p>
            <p>options</p>
            <p>options</p>
            <p>options</p>
            <p>options</p>
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
