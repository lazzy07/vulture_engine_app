import { EngineItem } from "./EngineItem";

export type PROJECT_TYPES = "game" | "movie" | "mobile";

export interface Project {
  type: PROJECT_TYPES;
  name: string;
  path: string;
  engine: EngineItem;
  created: number;
}
