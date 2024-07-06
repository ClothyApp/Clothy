import React from "react";
import styles from "./styles.module.css";
import Image from "next/image";
import testStore from "../../assets/img/Ellipse 1.jpg";
import { RiAddLargeFill } from "react-icons/ri";

interface StoreProps {
  img?: string;
  name?: string;
}

const Store = ({ img, name }: StoreProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.store_detail}>
        <div className={styles.store_logo}>
          {!!img ? (
            <Image
              className={styles.store_img}
              src={testStore}
              alt="test Store"
            />
          ) : (
            <RiAddLargeFill />
          )}
        </div>
        <div>
          <p className={styles.store_name}>{name || "Agregar"}</p>
        </div>
      </div>
    </div>
  );
};

export default Store;
