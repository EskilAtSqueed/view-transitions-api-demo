import { IcharacterGuard } from "./IcharacterGuard";
import { IpersonGuard } from "./IpersonGuard";
import { Icast } from "./tvmaze-api-types";

export const IcastGuard = (obj: any): obj is Icast =>
  typeof obj === "object" &&
  "person" in obj &&
  IpersonGuard(obj.person) &&
  "character" in obj &&
  IcharacterGuard(obj.character) &&
  "self" in obj &&
  "voice" in obj;
