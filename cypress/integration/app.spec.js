describe("Home page", () => {
  it("Test h1", () => {
    cy.visit("http://localhost:3000");
    cy.get("h1").contains("Welcome to Prolog");
  });
});
