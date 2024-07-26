import React from "react";
import AuthLayout from "./layout";
import Image from "next/image";
import styles from "./layout.module.css";
import Link from "next/link";

function Auth() {
  return (
    <AuthLayout>
      <div className={styles.wrapper_brand}>
        <Image src={"/brand.svg"} alt="Brand" width={304} height={408}/>
      </div>
      <div className={styles.wrapper_auth}>
        <Link href={"/auth/login"}>
        Login
        </Link>
        <Link href={"/auth/signup"}>
        SignUp
        </Link>
      </div>
    </AuthLayout>
  );
}

export default Auth;
