import Path from "path";
import { DEFAULT_SETTINGS_PATH } from "../constants/urls";
import fs from "fs";
import { Project } from "../interfaces/Project";

export class ProjectData {
  static createdProjects: Project[] = [];
  static filePath = Path.join(DEFAULT_SETTINGS_PATH, "projects.json");

  loadProjectData = () => {
    if (fs.existsSync(ProjectData.filePath)) {
      const bufferData = fs.readFileSync(ProjectData.filePath);
      const data = bufferData.toString();
      ProjectData.createdProjects = JSON.parse(data);
    }
  };

  saveProjectData = () => {
    const jsonData = JSON.stringify(ProjectData.createdProjects);

    try {
      fs.writeFileSync(ProjectData.filePath, jsonData);
    } catch (err) {
      console.log(err);
    }
  };

  compare(a: Project, b: Project) {
    if (a.created < b.created) {
      return -1;
    }
    if (a.created > b.created) {
      return 1;
    }
    return 0;
  }

  insertNewProject = (project: Project) => {
    ProjectData.createdProjects = [...ProjectData.createdProjects, project];
    ProjectData.createdProjects.sort(this.compare);
    this.saveProjectData();
  };

  removeProject = (path: string, name: string) => {
    let newData: Project[] = [];

    for (const i of ProjectData.createdProjects) {
      if (i.path + i.name !== path + name) {
        newData.push(i);
      }
    }
    ProjectData.createdProjects = [...newData];
    this.saveProjectData();
  };
}
