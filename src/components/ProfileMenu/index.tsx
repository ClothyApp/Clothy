import React from "react";
import styles from "./styles.module.css";


function ProfileMenu() {
  return (
    <div className={styles.container}>
        <button className={styles.btn_profile}>Profile</button>
        <button className={styles.btn_profile}>Message</button>
        <button className={styles.btn_profile}>Orders</button>
        <button className={styles.btn_profile}>Purchase History</button>
        <button className={styles.btn_profile}>Wishlist Stores</button>
        <button className={styles.btn_profile}>Logout</button>
    </div>
  );
}

export default ProfileMenu;
