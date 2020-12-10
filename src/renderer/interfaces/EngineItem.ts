export interface EngineItem {
  version: string;
  rendering_engine: string;
  audio_engine: string;
  physics_engine: string;
  description: string;
  improvements: string[];
  bugfixes: string[];
  known_bugs: string[];
  download: DownloadLinks;
  isInstalled: boolean;
  isNewest: boolean;
}

export interface DownloadLinks {
  mac: string;
  windows: string;
  linux: string;
}
