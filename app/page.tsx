"use client";
import { useEffect, useState } from "react";
import Greeter from "@api/greeter";
import styles from "./page.module.css";
import { GreetResult } from "@/api/types";

export default function Home() {
  const [greeting, setGreeting] = useState<GreetResult>({ message: "" });

  useEffect(() => {
    Greeter({ name: "World" }).then((greeting) =>
      setGreeting(greeting as GreetResult)
    );
  }, []);

  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>{greeting.message}</p>
      </div>
    </main>
  );
}
