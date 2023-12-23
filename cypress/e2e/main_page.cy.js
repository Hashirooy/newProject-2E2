describe("Login Page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173/");
  });
  it("Open login page.", () => {
    cy.get("#QAdeals").should("have.text", "Deals");
  });
  it("Create plan.", () => {
    CreatePlan("Monday");
    CreatePlan("Wendesday");
    CreatePlan("Monday");
    CreatePlan("Tuesday");
    CreatePlan("Tuesday");
    CreatePlan("Tuesday");
  });

  it("Drag andDrop", () => {
    CreatePlan("Tuesday");
    CreatePlan("Tuesday");
    CreatePlan("Tuesday");
    cy.get(
      "#root > div > div.layout__main > div.layout__main-content > div > div.page__kanban > div.page__kanban-days > div:nth-child(2) > div > div > div:nth-child(1)"
    )
      .trigger("mousedown")
      .trigger("mousemove", { clientX: 200, clientY: 300 });
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
