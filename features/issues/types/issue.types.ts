import type { ProjectLanguage } from "@features/projects";

export enum IssueLevel {
  info = "info",
  warning = "warning",
  error = "error",
}

export type Issue = {
  id: string;
  projectId: string;
  language: ProjectLanguage;
  name: string;
  message: string;
  stack: string;
  level: IssueLevel;
  numEvents: number;
};
