"use client";
import {useEffect, useState} from "react";
import Greeter, {GreetResult} from "@api/greeter";
import styles from "./page.module.css";

export default function Home() {
  const [greeting, setGreeting] = useState<GreetResult>("foo");
  
  useEffect(() => {
    Greeter({name: "World"}).then(greeting => setGreeting(greeting as GreetResult));
  }, []);

  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>{greeting}!</p>
      </div>
    </main>
  );
}
