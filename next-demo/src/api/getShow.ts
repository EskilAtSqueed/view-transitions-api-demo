import { IshowGuard } from "./IshowGuard";
import { apiFetch } from "./apiFetch";

export const getShow = async (id: string) =>
  await apiFetch(`https://api.tvmaze.com/shows/${id}`, IshowGuard); // .then(
//   (data) => new Promise<typeof data>((r) => setTimeout(() => r(data), 5000))
// );
