import { Story as StoryType } from "@storybook/react";
import { Routes } from "../../config/routes";

type Params = { route: string };

let route = Routes.issues;

export function useRouter() {
  return { pathname: route };
}

export function decorator(
  Story: StoryType,
  { parameters }: { parameters: Params },
) {
  if (parameters && parameters.route) {
    route = parameters.route;
  }
  return <Story />;
}
