import { IshowGuard } from "./IshowGuard";
import { apiFetch } from "./apiFetch";

export const getShows = async (page: number = 0) =>
  await apiFetch(`https://api.tvmaze.com/shows?page=${page}`, IshowGuard, {
    isArray: true,
  }); // .then(
//   (data) => new Promise<typeof data>((r) => setTimeout(() => r(data), 5000))
// );
