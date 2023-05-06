"use client";
import { invoke } from "@tauri-apps/api";
import styles from "./page.module.css";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    invoke("greet", { name: "World" }).then(console.log).catch(console.error);
  }, []);

  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>Hello!</p>
      </div>
    </main>
  );
}
