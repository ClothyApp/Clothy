import React from "react";
import styles from "./styles.module.css";
import Image from "next/image";
import testImg from "@/assets/img/Vector_50.png";
import { FiPlus, FiMinus, FiX } from "react-icons/fi";

interface CartItemProps {
  name?: string;
  img?: string;
  size?: string;
  onChange?: (v: any) => void;
}

function CartItem({ name = "jogging blue", img }: CartItemProps) {
  return (
    <div className={styles.container}>
      <Image src={testImg} alt={`${name} photo`} />
      <div className={styles.item_detail}>
        <h3 className={styles.name_item}>{name}</h3>
        <div className={styles.wrapper_sizes}>
          <p className={styles.size}>S</p>
          <p className={styles.size}>M</p>
          <p className={styles.size}>L</p>
        </div>
        <div className={styles.wrapper_quantity}>
          <button className={styles.btn_minus}>
            <FiMinus size={15} />
          </button>
          <p className={styles.quantity}>0</p>
          <button className={styles.btn_plus}>
            <FiPlus size={15} color="white"/>
          </button>
        </div>
      </div>
      <div>
        <FiX size={30} />
      </div>
    </div>
  );
}

export default CartItem;
