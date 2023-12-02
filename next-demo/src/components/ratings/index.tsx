import styles from "./styles.module.css";

type Props = { average: number };

export default async function Ratings({ average }: Props) {
  return (
    <div
      className={styles.ratings}
      style={{ "--done": `${(average / 10) * 100}%` }}
    >
      ★★★★★
    </div>
  );
}
