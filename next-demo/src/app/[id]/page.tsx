import styles from "./page.module.css";
import { getShow } from "@/api/getShow";
import Ratings from "@/components/ratings";
import Image from "next/image";

type Props = {
  params: { id: string };
};

export default async function Show({ params: { id } }: Props) {
  const show = await getShow(id);

  return (
    <main className={styles.main}>
      <div>
        <Image
          className={styles.image}
          fetchPriority="high"
          alt={`Movie poster of the show ${show.name}`}
          width="385"
          height="540"
          src={show.image.original}
        />
      </div>
      <div className={styles.info}>
        <h1>{show.name}</h1>
        <div className={styles.ratings}>
          <Ratings average={show.rating.average} />
          <span>{show.rating.average}</span>
        </div>
        <section className={styles.section}>
          <h3>The genres</h3>
          <p>{show.genres.join(", ")}</p>
        </section>
        <section className={styles.section}>
          <h3>The Summary</h3>
          <p dangerouslySetInnerHTML={{ __html: show.summary }}></p>
        </section>
      </div>
    </main>
  );
}
