import mockIssues1 from "../fixtures/issues-page-1.json";
import mockIssues2 from "../fixtures/issues-page-2.json";
import mockIssues3 from "../fixtures/issues-page-3.json";

describe("Issue List", () => {
  beforeEach(() => {
    // setup request mocks
    cy.intercept("GET", "https://prolog-api.profy.dev/project", {
      fixture: "projects.json",
    }).as("getProjects");
    cy.intercept("GET", "https://prolog-api.profy.dev/issue?page=1", {
      fixture: "issues-page-1.json",
    }).as("getIssues");

    // set desktop resolution
    cy.viewport(1025, 900);

    // open issues page
    cy.visit("http://localhost:3000/dashboard/issues");

    // wait for request to resolve
    cy.wait("@getProjects");
    cy.wait("@getIssues");

    // set button aliases
    cy.get("button", { timeout: 10000 }).contains("Previous").as("prev-button");
    cy.get("button").contains("Next").as("next-button");
  });

  it("renders the issues", () => {
    cy.get("main")
      .find("tr")
      .each(($el, index) => {
        const issue = mockIssues1.items[index];
        const firstLineOfStackTrace = issue.stack.split("\n")[1].trim();
        cy.wrap($el).contains(issue.name);
        cy.wrap($el).contains(issue.message);
        cy.wrap($el).contains(issue.numEvents);
        cy.wrap($el).contains(firstLineOfStackTrace);
      });
  });
});
