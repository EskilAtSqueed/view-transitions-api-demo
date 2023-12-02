import { IcastGuard } from "./IcastGuard";
import { apiFetch } from "./apiFetch";

export const getCast = async (id: string) =>
  await apiFetch(`https://api.tvmaze.com/shows/${id}/cast`, IcastGuard, {
    isArray: true,
  }); // .then(
//   (data) => new Promise<typeof data>((r) => setTimeout(() => r(data), 5000))
// );
