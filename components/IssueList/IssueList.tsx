import { IssueLevel } from "@api/issue";
import { ProjectLanguage } from "@api/project";
import { color, space, textFont } from "@styles/theme";
import styled from "styled-components";
import { IssueRow } from "./IssueRow";

const issues = [
  {
    projectLanguage: ProjectLanguage.react,
    issue: {
      id: "c9613c41-32f0-435e-aef2-b17ce758431b",
      projectId: "6d5fff43-d691-445d-a41a-7d0c639080e6",
      name: "TypeError",
      message: 'can\'t define property F: "obj" is not extensible',
      stack:
        'can\'t define property "x": "obj" is not extensible\n    at eval (webpack-internal:///./pages/index.tsx:37:7)\n    at invokePassiveEffectCreate (webpack-internal:///./node_modules/react-dom/cjs/react-dom.development.js:23482:20)\n    at HTMLUnknownElement.callCallback (webpack-internal:///./node_modules/react-dom/cjs/react-dom.development.js:3945:14)\n    at HTMLUnknownElement.sentryWrapped (webpack-internal:///./node_modules/@sentry/browser/esm/helpers.js:81:23)\n    at Object.invokeGuardedCallbackDev (webpack-internal:///./node_modules/react-dom/cjs/react-dom.development.js:3994:16)\n    at invokeGuardedCallback (webpack-internal:///./node_modules/react-dom/cjs/react-dom.development.js:4056:31)\n    at flushPassiveEffectsImpl (webpack-internal:///./node_modules/react-dom/cjs/react-dom.development.js:23569:9)\n    at unstable_runWiTableHeadPriority (webpack-internal:///./node_modules/scheduler/cjs/scheduler.development.js:468:12)\n    at runWiTableHeadPriority$1 (webpack-internal:///./node_modules/react-dom/cjs/react-dom.development.js:11276:10)\n    at flushPassiveEffects (webpack-internal:///./node_modules/react-dom/cjs/react-dom.development.js:23442:14)\n    at eval (webpack-internal:///./node_modules/react-dom/cjs/react-dom.development.js:23319:11)\n    at workLoop (webpack-internal:///./node_modules/scheduler/cjs/scheduler.development.js:417:34)\n    at flushWork (webpack-internal:///./node_modules/scheduler/cjs/scheduler.development.js:390:14)\n    at MessagePort.performWorkUntilDeadline (webpack-internal:///./node_modules/scheduler/cjs/scheduler.development.js:157:27)',
      level: IssueLevel.error,
      numEvents: 100,
      numUsers: 80,
    },
  },
  {
    projectLanguage: ProjectLanguage.react,
    issue: {
      id: "c9613c41-32f0-435e-aef2-b17ce758431a",
      projectId: "6d5fff43-d691-445d-a41a-7d0c639080e6",
      name: "TypeError",
      message: 'can\'t define property F: "obj" is not extensible',
      stack:
        'can\'t define property "x": "obj" is not extensible\n    at eval (webpack-internal:///./pages/index.tsx:37:7)\n    at invokePassiveEffectCreate (webpack-internal:///./node_modules/react-dom/cjs/react-dom.development.js:23482:20)\n    at HTMLUnknownElement.callCallback (webpack-internal:///./node_modules/react-dom/cjs/react-dom.development.js:3945:14)\n    at HTMLUnknownElement.sentryWrapped (webpack-internal:///./node_modules/@sentry/browser/esm/helpers.js:81:23)\n    at Object.invokeGuardedCallbackDev (webpack-internal:///./node_modules/react-dom/cjs/react-dom.development.js:3994:16)\n    at invokeGuardedCallback (webpack-internal:///./node_modules/react-dom/cjs/react-dom.development.js:4056:31)\n    at flushPassiveEffectsImpl (webpack-internal:///./node_modules/react-dom/cjs/react-dom.development.js:23569:9)\n    at unstable_runWiTableHeadPriority (webpack-internal:///./node_modules/scheduler/cjs/scheduler.development.js:468:12)\n    at runWiTableHeadPriority$1 (webpack-internal:///./node_modules/react-dom/cjs/react-dom.development.js:11276:10)\n    at flushPassiveEffects (webpack-internal:///./node_modules/react-dom/cjs/react-dom.development.js:23442:14)\n    at eval (webpack-internal:///./node_modules/react-dom/cjs/react-dom.development.js:23319:11)\n    at workLoop (webpack-internal:///./node_modules/scheduler/cjs/scheduler.development.js:417:34)\n    at flushWork (webpack-internal:///./node_modules/scheduler/cjs/scheduler.development.js:390:14)\n    at MessagePort.performWorkUntilDeadline (webpack-internal:///./node_modules/scheduler/cjs/scheduler.development.js:157:27)',
      level: IssueLevel.error,
      numEvents: 100,
      numUsers: 80,
    },
  },
];

const Table = styled.table`
  width: 100%;
  background: white;
  border: 1px solid ${color("gray", 200)};
  box-sizing: border-box;
  box-shadow: 0px 4px 8px -2px rgba(16, 24, 40, 0.1),
    0px 2px 4px -2px rgba(16, 24, 40, 0.06);
  border-radius: 8px;
  border-collapse: collapse;
`;

const TableHead = styled.thead`
  border-bottom: 1px solid ${color("gray", 200)};
`;

const HeaderCell = styled.th`
  padding: ${space(3, 6)};
  text-align: left;
  color: ${color("gray", 500)};
  ${textFont("xs", "medium")};
`;

export function IssueList() {
  return (
    <Table>
      <TableHead>
        <HeaderCell>Issue</HeaderCell>
        <HeaderCell>Level</HeaderCell>
        <HeaderCell>Events</HeaderCell>
        <HeaderCell>Users</HeaderCell>
      </TableHead>
      <tbody>
        {issues.map(({ projectLanguage, issue }) => (
          <IssueRow
            key={issue.id}
            issue={issue}
            projectLanguage={projectLanguage}
          />
        ))}
      </tbody>
    </Table>
  );
}
