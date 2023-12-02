import { Iperson } from "./tvmaze-api-types";

export const IpersonGuard = (obj: any): obj is Iperson =>
  typeof obj === "object" &&
  "id" in obj &&
  "url" in obj &&
  "country" in obj &&
  "birtday" in obj &&
  "image" in obj;
