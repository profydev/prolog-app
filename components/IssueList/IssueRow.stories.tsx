import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { IssueRow } from "./IssueRow";
import { ProjectLanguage } from "@api/project";
import { IssueLevel } from "@api/issue";

export default {
  title: "Issue/IssueRow",
  component: IssueRow,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
} as ComponentMeta<typeof IssueRow>;

const Template: ComponentStory<typeof IssueRow> = (props) => (
  <table style={{ borderCollapse: "collapse" }}>
    <tbody>
      <IssueRow {...props} />
      <IssueRow {...props} />
    </tbody>
  </table>
);

export const Default = Template.bind({});
Default.args = {
  projectLanguage: ProjectLanguage.react,
  issue: {
    id: "c9613c41-32f0-435e-aef2-b17ce758431b",
    projectId: "6d5fff43-d691-445d-a41a-7d0c639080e6",
    name: "TypeError",
    message: 'can\'t define property F: "obj" is not extensible',
    stack:
      'can\'t define property "x": "obj" is not extensible\n    at eval (webpack-internal:///./pages/index.tsx:37:7)\n    at invokePassiveEffectCreate (webpack-internal:///./node_modules/react-dom/cjs/react-dom.development.js:23482:20)\n    at HTMLUnknownElement.callCallback (webpack-internal:///./node_modules/react-dom/cjs/react-dom.development.js:3945:14)\n    at HTMLUnknownElement.sentryWrapped (webpack-internal:///./node_modules/@sentry/browser/esm/helpers.js:81:23)\n    at Object.invokeGuardedCallbackDev (webpack-internal:///./node_modules/react-dom/cjs/react-dom.development.js:3994:16)\n    at invokeGuardedCallback (webpack-internal:///./node_modules/react-dom/cjs/react-dom.development.js:4056:31)\n    at flushPassiveEffectsImpl (webpack-internal:///./node_modules/react-dom/cjs/react-dom.development.js:23569:9)\n    at unstable_runWithPriority (webpack-internal:///./node_modules/scheduler/cjs/scheduler.development.js:468:12)\n    at runWithPriority$1 (webpack-internal:///./node_modules/react-dom/cjs/react-dom.development.js:11276:10)\n    at flushPassiveEffects (webpack-internal:///./node_modules/react-dom/cjs/react-dom.development.js:23442:14)\n    at eval (webpack-internal:///./node_modules/react-dom/cjs/react-dom.development.js:23319:11)\n    at workLoop (webpack-internal:///./node_modules/scheduler/cjs/scheduler.development.js:417:34)\n    at flushWork (webpack-internal:///./node_modules/scheduler/cjs/scheduler.development.js:390:14)\n    at MessagePort.performWorkUntilDeadline (webpack-internal:///./node_modules/scheduler/cjs/scheduler.development.js:157:27)',
    level: IssueLevel.error,
    numEvents: 100,
    numUsers: 80,
  },
};
Default.parameters = {
  viewMode: "docs",
};
