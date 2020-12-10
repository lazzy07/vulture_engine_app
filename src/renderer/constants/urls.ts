export const VULTURE2_RELEASES_URL =
  "https://api.github.com/repos/glfw/glfw/releases";

export const ENGINE_DATA_URL =
  "https://raw.githubusercontent.com/lazzy07/vulture_engine_app/main/engineinfo.json";

export const RELEASE_DATA_URL = (tag: string) => {
  return `https://api.github.com/repos/glfw/glfw/releases/tags/3.3.2`;
};
