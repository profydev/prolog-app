import capitalize from "lodash/capitalize";
import { Badge, BadgeColor } from "@components/Badge";

export enum Language {
  react = "react",
  node = "node",
  python = "python",
}

export enum Status {
  stable = "stable",
  warning = "warning",
  critical = "critical",
}

type ProjectCardProps = {
  id: string;
  name: string;
  language: Language;
  numIssues: number;
  numEvents24h: number;
  status: Status;
};

const languageNames = {
  [Language.react]: "React",
  [Language.node]: "Node.js",
  [Language.python]: "Python",
};

const statusColors = {
  [Status.stable]: BadgeColor.success,
  [Status.warning]: BadgeColor.warning,
  [Status.critical]: BadgeColor.error,
};

export function ProjectCard({
  name,
  language,
  numIssues,
  numEvents24h,
  status,
}: ProjectCardProps) {
  return (
    <div>
      <div>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={`/icons/${language}.svg`} alt={language} />
        <div>
          <div>{name}</div>
          <div>{languageNames[language]}</div>
        </div>
      </div>
      <div>
        <div>
          <div>Total issues</div>
          <div>{numIssues}</div>
        </div>
        <div>
          <div>Last 24h</div>
          <div>{numEvents24h}</div>
        </div>
        <div>
          <Badge color={statusColors[status]}>{capitalize(status)}</Badge>
        </div>
      </div>
    </div>
  );
}
