This repository is part of the [React Job Simulator](https://profy.dev) where you work in a professional dev environment with advanced tooling and workflows. You implement tasks based on designs starting from small bug fixes to full-blown features. Basically, you learn a lot of the things hands-on that you usually only experience once you joined a professional React team.

## The Application

The application is an error logging and monitoring tool similar to Sentry or Rollbar. You can find a deployed version of the main branch at [prolog.profy.dev](https://prolog.profy.dev). Note: you have to click the "Dashboard" link in the upper right corner to see the app as shown in the screenshot below.

![The running application](docs/app.png)

## Codebase Tour

Watch this video for a tour through the codebase.

[![Codebase tour](docs/codebase-tour.jpg)](https://www.youtube.com/watch?v=a_Z0yUsChlY)

## Getting Started

This project is built with Next.js, TypeScript, Cypress & styled-components among others. To start working on the project, first clone the repository and install the dependencies.

```bash
npm install
```

Then run the development server:

```bash
npm run dev
```

Now you can open [http://localhost:3000](http://localhost:3000) with your browser to see the application.

## Tests

This project is covered with Cypress tests. Although most tests for production apps are currently written with React Testing Library, Cypress is the best option to get started with testing. When you're new to testing the start can be very cumbersome and feel like you're in a completely new dev environment.

Cypress makes it much easier to get started with testing. You still have to get used to the new way of coding but thanks to its awesome UI debugging is easy and very similar to what you're used from your browser.

![Cypress test](docs/cypress.gif)

To run the Cypress tests on your local machine use this command:

```bash
npm run cypress
```

## Storybook

Storybook is a great tool to document your components and visually test them in isolation. To open Storybook run

```bash
npm run storybook
```
