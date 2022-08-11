describe("Sidebar Navigation", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  context("desktop resolution", () => {
    beforeEach(() => {
      cy.viewport(1025, 900);
    });

    it("links are working", () => {
      cy.get("nav").contains("Issues").click();
      cy.url().should("eq", "http://localhost:3000/issues");

      cy.get("nav").contains("Projects").click();
      cy.url().should("eq", "http://localhost:3000/");
    });

    it("is collapsible", () => {
      cy.get("nav").contains("Collapse").click();
      cy.get("nav").find("a").should("have.length", 5);
      cy.get("nav").contains("Issues").should("not.exist");
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

      cy.get("img[alt='open menu']").click();

      cy.wait(500);
      isInViewport("nav");

      cy.get("nav").find("a").should("have.length", 5);

      cy.get("nav").contains("Support").should("exist");
      cy.get("nav").contains("Collapse").should("not.be.visible");

      cy.get("img[alt='close menu']").click();
      cy.wait(500);
      isNotInViewport("nav");
    });
  });
});
