import React from "react";
import styles from "./profile.module.css";
import { HeaderNavWidget, ProfileWidget } from "@/Widgets";

function Profile() {
  return (
    <section className={styles.container}>
      <header className={styles.header}>
        <HeaderNavWidget mode="menu"/>
      </header>
      <main className={styles.main}>
        <ProfileWidget />
      </main>
    </section>
  );
}

export default Profile;
