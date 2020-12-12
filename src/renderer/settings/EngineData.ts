import { EngineItem } from "../interfaces/EngineItem";
import Path from "path";
import { DEFAULT_SETTINGS_PATH } from "../constants/urls";
import fs from "fs";
import { InstalledEngineItem } from "../interfaces/InstalledEngineItem";

export class EngineData {
  static installedEngines: InstalledEngineItem[] = [];
  static filePath = Path.join(DEFAULT_SETTINGS_PATH, "engines.json");

  loadEngineData = () => {
    if (fs.existsSync(EngineData.filePath)) {
      const bufferData = fs.readFileSync(EngineData.filePath);
      const data = bufferData.toString();
      EngineData.installedEngines = JSON.parse(data);
    }
  };

  saveEngineData = () => {
    const jsonData = JSON.stringify(EngineData.installedEngines);

    try {
      fs.writeFileSync(EngineData.filePath, jsonData);
    } catch (err) {
      console.log(err);
    }
  };

  compare(a: InstalledEngineItem, b: InstalledEngineItem) {
    if (a.version < b.version) {
      return -1;
    }
    if (a.version > b.version) {
      return 1;
    }
    return 0;
  }

  insertNewEngine = (engine: EngineItem, path: string) => {
    for (const i of EngineData.installedEngines) {
      if (i.version === engine.version) {
        return;
      }
    }

    EngineData.installedEngines = [
      ...EngineData.installedEngines,
      { ...engine, path, isInstalled: true },
    ];
    EngineData.installedEngines.sort(this.compare);
    this.saveEngineData();
  };

  removeEngine = (version: string) => {
    let newData: InstalledEngineItem[] = [];

    for (const i of EngineData.installedEngines) {
      if (i.version !== version) {
        newData.push(i);
      }
    }
    EngineData.installedEngines = [...newData];
    this.saveEngineData();
  };
}
