"use client";
import React from "react";
import Image from "next/image";
import styles from "./styles.module.css";
import { FiHeart } from "react-icons/fi";
import testImg from "../../assets/img/Rectangle 3.jpg";

interface ProductCardProps {}

function ProductCard({}: ProductCardProps) {
  return (
    <div className={styles.container}>
      <Image className={styles.product_img} src={testImg} alt="Test Image" />
      <h1 className={styles.product_name}>Sueter Azul</h1>
      <h3 className={styles.product_store_name}>Tienda 1</h3>
      <div className={styles.wrapper_footer}>
        <p className={styles.product_price}>$9,99</p>
        <FiHeart size={30} />
      </div>
    </div>
  );
}

export default ProductCard;
