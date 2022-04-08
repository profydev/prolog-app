describe("Sidebar Navigation", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  context("desktop resolution", () => {
    beforeEach(() => {
      cy.viewport(1025, 900);
    });

    it("links are working", () => {
      cy.findByRole("navigation").findByText("Issues").click();
      cy.url().should("eq", "http://localhost:3000/issues");

      cy.findByRole("navigation").findByText("Projects").click();
      cy.url().should("eq", "http://localhost:3000/");
    });

    it("is collapsible", () => {
      cy.findByText("Collapse").click();
      cy.findByRole("navigation")
        .findAllByRole("link")
        .should("have.length", 5);
      cy.findByRole("navigation").findByText("Issues").should("not.exist");
    });
  });

  context("mobile resolution", () => {
    beforeEach(() => {
      cy.viewport("iphone-8");
    });

    function isInViewport(el: string) {
      cy.get(el).then(($el) => {
        const rect = $el[0].getBoundingClientRect();
        expect(rect.right).to.be.equal(rect.width);
        expect(rect.left).to.be.equal(0);
      });
    }

    function isNotInViewport(el: string) {
      cy.get(el).then(($el) => {
        const rect = $el[0].getBoundingClientRect();
        expect(rect.left).to.be.equal(-rect.width);
        expect(rect.right).to.be.equal(0);
      });
    }

    it("toggles sidebar navigation by clicking the menu icon", () => {
      cy.wait(500);
      isNotInViewport("nav");

      cy.findByAltText("open menu").click();

      cy.wait(500);
      isInViewport("nav");

      cy.findByRole("navigation")
        .findAllByRole("link")
        .should("have.length", 5);

      cy.findByText("Support").should("exist");
      cy.findByText("Collapse").should("not.be.visible");

      cy.findByAltText("close menu").click();
      cy.wait(500);
      isNotInViewport("nav");
    });
  });
});

export {};
