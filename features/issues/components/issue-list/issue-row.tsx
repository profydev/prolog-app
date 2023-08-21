import capitalize from "lodash/capitalize";
import { Badge, BadgeColor, BadgeSize } from "@features/ui";
import { ProjectLanguage } from "@api/projects.types";
import { IssueLevel } from "@api/issues.types";
import type { Issue } from "@api/issues.types";
import styles from "./issue-row.module.scss";

type IssueRowProps = {
  projectLanguage: ProjectLanguage;
  issue: Issue;
};

const levelColors = {
  [IssueLevel.info]: BadgeColor.success,
  [IssueLevel.warning]: BadgeColor.warning,
  [IssueLevel.error]: BadgeColor.error,
};

export function IssueRow({ projectLanguage, issue }: IssueRowProps) {
  const { name, message, stack, level, numEvents } = issue;
  const firstLineOfStackTrace = stack.split("\n")[1];

  return (
    <tr className={styles.row}>
      <td className={styles.issueCell}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          className={styles.languageIcon}
          src={`/icons/${projectLanguage}.svg`}
          alt={projectLanguage}
        />
        <div>
          <div className={styles.errorTypeAndMessage}>
            <span className={styles.errorType}>{name}:&nbsp;</span>
            {message}
          </div>
          <div>{firstLineOfStackTrace}</div>
        </div>
      </td>
      <td className={styles.cell}>
        <Badge color={levelColors[level]} size={BadgeSize.sm}>
          {capitalize(level)}
        </Badge>
      </td>
      <td className={styles.cell}>{numEvents}</td>
      <td className={styles.cell}>{numEvents}</td>
    </tr>
  );
}
