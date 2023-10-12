"use client";
import styles from "@/styles/page.module.css";

import MyHeader from "@/components/myHeader";
export default function Home() {
  var avatar={
    avatarSrc :"/statics/avatar.avif",
    alt:"avatar"
  }
  
  

  return (
    <div className={styles.backgroundBox}>
      <MyHeader avatar={avatar}></MyHeader>
    </div>
  );
}
