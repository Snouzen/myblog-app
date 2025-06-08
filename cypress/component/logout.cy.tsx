// import Navbar from "@/components/navbar"

import Logout from "@/components/logout"

// describe('navbar.cy.tsx', () => {
//   it('render component correctly', () => {
//     cy.mount(<Navbar />)
//     cy.get('a[href = "/"]').should("exist")
//     cy.get('img').should("exist")
//   })
// })

describe("logout.cy.tsx", () => {
    it("render component correctly", () => {
        cy.mount(<Logout />)
        cy.get("button").should("be.visible").and("contain.text", "Logout")
    })
})