import Image from "next/image";
import styles from "./page.module.css";
import { getShows } from "@/api/getShows";
import Movies from "@/components/movies";
import { Suspense } from "react";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Movies</h1>
      <Suspense>
        <Movies />
      </Suspense>
    </main>
  );
}
