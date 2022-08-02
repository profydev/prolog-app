import mockIssues1 from "../fixtures/issues-page-1.json";
import mockIssues2 from "../fixtures/issues-page-2.json";
import mockIssues3 from "../fixtures/issues-page-3.json";

describe("Project List", () => {
  beforeEach(() => {
    cy.intercept("GET", "https://prolog-api.profy.dev/project", {
      fixture: "projects.json",
    });
    cy.intercept("GET", "https://prolog-api.profy.dev/issue?page=1", {
      fixture: "issues-page-1.json",
    });
    cy.intercept("GET", "https://prolog-api.profy.dev/issue?page=2", {
      fixture: "issues-page-2.json",
    });
    cy.intercept("GET", "https://prolog-api.profy.dev/issue?page=3", {
      fixture: "issues-page-3.json",
    });
    cy.visit("http://localhost:3000/issues");
  });

  context("desktop resolution", () => {
    beforeEach(() => {
      cy.viewport(1025, 900);
    });

    it("renders the issues", () => {
      cy.findByRole("main")
        .findAllByRole("row")
        .each(($el, index) => {
          // skip the header row
          if (index === 0) return;

          const issue = mockIssues1.items[index - 1];
          const firstLineOfStackTrace = issue.stack.split("\n")[1].trim();
          cy.wrap($el).contains(issue.name);
          cy.wrap($el).contains(issue.message);
          cy.wrap($el).contains(issue.numEvents);
          cy.wrap($el).contains(firstLineOfStackTrace);
        });
    });

    it("paginates the data", () => {
      // test first page
      cy.contains("Page 1 of 3");
      cy.findByRole("button", { name: "Previous" }).should(
        "have.attr",
        "disabled"
      );

      // test navigation to second page
      cy.findByRole("button", { name: "Next" }).click();
      cy.findByRole("button", { name: "Previous" }).should(
        "not.have.attr",
        "disabled"
      );
      cy.contains("Page 2 of 3");
      cy.get("tbody tr:first").contains(mockIssues2.items[0].message);

      // test navigation to third and last page
      cy.findByRole("button", { name: "Next" }).click();
      cy.findByRole("button", { name: "Next" }).should("have.attr", "disabled");
      cy.contains("Page 3 of 3");
      cy.get("tbody tr:first").contains(mockIssues3.items[0].message);

      // test navigation back to second page
      cy.findByRole("button", { name: "Previous" }).click();
      cy.findByRole("button", { name: "Next" }).should(
        "not.have.attr",
        "disabled"
      );
      cy.contains("Page 2 of 3");
      cy.get("tbody tr:first").contains(mockIssues2.items[0].message);
    });

    it("perists page after reload", () => {
      cy.findByRole("button", { name: "Next" }).click();
      cy.contains("Page 2 of 3");

      cy.reload();
      cy.contains("Page 2 of 3");
    });
  });
});
