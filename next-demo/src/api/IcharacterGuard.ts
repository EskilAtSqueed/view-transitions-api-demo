import { Icharacter } from "./tvmaze-api-types";

export const IcharacterGuard = (obj: any): obj is Icharacter =>
  typeof obj === "object" &&
  "id" in obj &&
  "url" in obj &&
  "name" in obj &&
  "image" in obj;
