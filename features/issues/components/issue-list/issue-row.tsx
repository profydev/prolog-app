import styled from "styled-components";
import capitalize from "lodash/capitalize";
import { color, space, textFont } from "@styles/theme";
import { Badge, BadgeColor, BadgeSize } from "@features/ui";
import { ProjectLanguage } from "@api/projects.types";
import { IssueLevel } from "@api/issues.types";
import type { Issue } from "@api/issues.types";

type IssueRowProps = {
  projectLanguage: ProjectLanguage;
  issue: Issue;
  resolveIssue: () => void;
};

const levelColors = {
  [IssueLevel.info]: BadgeColor.success,
  [IssueLevel.warning]: BadgeColor.warning,
  [IssueLevel.error]: BadgeColor.error,
};

const Row = styled.tr`
  &:nth-child(2n) {
    background: ${color("gray", 50)};
  }
`;

const Cell = styled.td`
  padding: ${space(4, 6)};
  color: ${color("gray", 500)};
  ${textFont("sm", "regular")}
`;

const IssueCell = styled(Cell)`
  display: flex;
  align-items: center;
`;

const LanguageIcon = styled.img`
  width: ${space(10)};
  margin-right: ${space(3)};
`;

const ErrorTypeAndMessage = styled.div`
  color: ${color("gray", 900)};
`;

const ErrorType = styled.span`
  ${textFont("sm", "medium")}
`;

const ResolveButton = styled.button`
  width: 1.5rem;
  height: 1.5rem;
  font-size: 0.8rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #aaa;
  border: 1px solid #aaa;
  background: none;
  border-radius: 50%;
  padding: none;
  margin: none;
  cursor: pointer;
`;

export function IssueRow({
  projectLanguage,
  issue,
  resolveIssue,
}: IssueRowProps) {
  const { name, message, stack, level, numEvents } = issue;
  const firstLineOfStackTrace = stack.split("\n")[1];

  return (
    <Row>
      <IssueCell>
        <LanguageIcon
          src={`/icons/${projectLanguage}.svg`}
          alt={projectLanguage}
        />
        <div>
          <ErrorTypeAndMessage>
            <ErrorType>{name}:&nbsp;</ErrorType>
            {message}
          </ErrorTypeAndMessage>
          <div>{firstLineOfStackTrace}</div>
        </div>
      </IssueCell>
      <Cell>
        <Badge color={levelColors[level]} size={BadgeSize.sm}>
          {capitalize(level)}
        </Badge>
      </Cell>
      <Cell>{numEvents}</Cell>
      <Cell>{numEvents}</Cell>
      <Cell>
        <ResolveButton onClick={resolveIssue}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"
            />
          </svg>
        </ResolveButton>
      </Cell>
    </Row>
  );
}
