import { remote } from "electron";
const { app } = remote;
import Path from "path";

export const VULTURE2_RELEASES_URL =
  "https://api.github.com/repos/glfw/glfw/releases";

export const ENGINE_DATA_URL =
  "https://raw.githubusercontent.com/lazzy07/vulture_engine_app/main/engineinfo.json";

export const RELEASE_DATA_URL = (id: string) => {
  return `https://api.github.com/repos/glfw/glfw/releases/assets/${id}`;
};

export const DEFAULT_APP_DATA_PATH = Path.join(
  app.getPath("appData"),
  "vulture_engine_2"
);

export const DEFAULT_SETTINGS_PATH = Path.join(
  app.getPath("appData"),
  "vulture_engine_2",
  "settings"
);

export const DEFAULT_PROJECTS_PATH = Path.join(
  app.getPath("documents"),
  "vulture_projects"
);
