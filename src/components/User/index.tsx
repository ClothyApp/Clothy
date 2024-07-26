"use client";
import React from "react";
import styles from "./styles.module.css";
import { SvgLoader } from "@/utils";
import SvgUser from "@/assets/svg/user-128.svg";

interface UserProps {
  img: string;
  name: string;
  account: string;
}

function User({ img, name = "Jorge R.", account = "Gold Profile" }: UserProps) {
  return (
    <section className={styles.container}>
      <div className={styles.wrapper_photo}>
        <SvgLoader svg={SvgUser} className={styles.user_photo} />
      </div>
      <div>
        <h1 className={styles.user_name}>{name}</h1>
        <h3 className={styles.user_account}>{account}</h3>
      </div>
    </section>
  );
}

export default User;
