import { getShows } from "@/api/getShows";
import Movie from "../movie";
import styles from "./styles.module.css";

export default async function Movies() {
  const shows = await getShows();

  return (
    <div className={styles.movies}>
      {shows.map((show) => (
        <Movie key={show.id} show={show} />
      ))}
    </div>
  );
}
