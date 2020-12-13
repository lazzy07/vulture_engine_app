import React, { createContext, useState } from "react";
import { EngineItem } from "../interfaces/EngineItem";
import { Project } from "../interfaces/Project";

interface ProjContext {
  createProject: () => void;
  currentProject: Project | null;
  setCurrentProject: (project: Project | null) => void;
  selectedEngine: EngineItem | null;
  setSelectedEngine: (engine: EngineItem | null) => void;
  isCreating: boolean;
  setIsCreating: (is: boolean) => void;
}

export const ProjectContextData = createContext<ProjContext>({
  createProject: () => {},
  currentProject: null,
  setCurrentProject: () => {},
  selectedEngine: null,
  setSelectedEngine: () => {},
  isCreating: false,
  setIsCreating: () => {},
});

export default function ProjectContext({ children }) {
  const [currentProject, setCurrentProject] = useState<Project | null>(null);
  const [selectedEngine, setSelectedEngine] = useState<EngineItem | null>(null);
  const [isCreating, setIsCreating] = useState<boolean>(false);

  const createProject = () => {
    console.log("Project creation started");
  };

  let ctx: ProjContext = {
    createProject,
    currentProject,
    setCurrentProject,
    selectedEngine,
    setSelectedEngine,
    isCreating,
    setIsCreating,
  };

  return (
    <ProjectContextData.Provider value={{ ...ctx }}>
      {children}
    </ProjectContextData.Provider>
  );
}
