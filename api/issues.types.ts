export enum IssueStatus {
  open = "open",
  resolved = "resolved",
}

export enum IssueLevel {
  info = "info",
  warning = "warning",
  error = "error",
}

export type Issue = {
  id: string;
  projectId: string;
  name: string;
  message: string;
  stack: string;
  level: IssueLevel;
  status: IssueStatus;
  numEvents: number;
};

export type IssueFilters = {
  level?: IssueLevel;
  status?: IssueStatus;
  project?: string;
};
