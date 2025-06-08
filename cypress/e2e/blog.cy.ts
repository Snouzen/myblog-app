describe("View Blog Detail", () => {
  it("display list of blog post", () => {
    cy.visit("/")
    cy.get('[data-cy="blog-item"]').should("have.length.greaterThan", 0) //Akan get semua html yang punya property data cy = blog item
  })

  it("navigate to detail blog", () => {
    cy.visit("/")
    cy.get('[data-cy="blog-item"]').first().click()

    cy.url().should("include", "/blog/")
    // cy.get("h2").should("be.visible")
    cy.get("img").should("be.visible")
  })
})