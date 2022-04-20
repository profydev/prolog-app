import styled from "styled-components";
import capitalize from "lodash/capitalize";
import { space } from "@styles/theme";
import { Badge, BadgeColor } from "@components/Badge";
import { IssueLevel } from "@api/issue";
import { ProjectLanguage } from "@api/project";
import type { Issue } from "@api/issue";

type IssueRowProps = {
  projectLanguage: ProjectLanguage;
  issue: Issue;
};

const levelColors = {
  [IssueLevel.info]: BadgeColor.success,
  [IssueLevel.warning]: BadgeColor.warning,
  [IssueLevel.error]: BadgeColor.error,
};

const LanguageIcon = styled.img`
  margin-right: ${space(3)};
`;

export function IssueRow({ projectLanguage, issue }: IssueRowProps) {
  const { name, message, stack, level, numEvents, numUsers } = issue;
  return (
    <div>
      <div>
        <div>
          <LanguageIcon
            src={`/icons/${projectLanguage}.svg`}
            alt={projectLanguage}
          />
          <div>
            <span>{name}</span>
            {message}
          </div>
          <div>{stack.split("\n")[1]}</div>
        </div>
        <div>
          <Badge color={levelColors[level]}>{capitalize(level)}</Badge>
        </div>
        <div>{numEvents}</div>
        <div>{numUsers}</div>
      </div>
    </div>
  );
}
