import { Ishow } from "@/api/tvmaze-api-types";
import styles from "./styles.module.css";
import Link from "next/link";
import Image from "next/image";
import Ratings from "../ratings";

type Props = { show: Ishow };

export default async function Movie({ show }: Props) {
  return (
    <Link href={`/${show.id}`} className={styles.movie}>
      <Image
        className={styles.image}
        fetchPriority="high"
        alt={`Movie poster of the show ${show.name}`}
        width="342"
        height="513"
        src={show.image.medium}
      />
      <div className={styles.details}>
        <h2>{show.name}</h2>
        <div className={styles.ratingsWrapper}>
          <div className={styles.tooltip}>
            <Ratings average={show.rating.average} />
            <span className={styles.tooltiptext}>
              {show.rating.average} average rating on 1011 votes
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
