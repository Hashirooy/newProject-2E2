import "cypress-real-events";

describe("Login Page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173/");
  });
  it("Open login page.", () => {
    cy.get("#QAdeals").should("have.text", "Deals");
  });
  it("Drag andDrop", () => {
    CreatePlan("Tuesday");
    CreatePlan("Tuesday");
    CreatePlan("Tuesday");
    cy.get("#data-test-card")
      .trigger("mousedown", {
        clientX: 589,
        clientY: 369,
        button: 0,
        force: true,
      })
      .trigger("mousemove", {
        clientX: 589,
        clientY: 569,
        button: 0,
        force: true,
      })
      .trigger("mouseup", {
        button: 0,
        force: true,
      });
  });
});

export const CreatePlan = (day) => {
  cy.get(".addPlanButton").click("");
  cy.get("select").select(day);
  cy.get('[placeholder="Name"]').type("PlanTest");
  cy.get('[placeholder="Description"]').type("DescriptionTest");
  cy.get(".createButton").click();
  cy.get(".closeButton").click();
};
