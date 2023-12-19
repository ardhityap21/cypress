describe('User Can Edit Existing Data', () => {
    beforeEach(() =>{
      //reset database using cypress command
      cy.exec("cd ../demo-app-cypress-automation && php artisan migrate:fresh --seed");
      //arrange
    cy.visit('http://127.0.0.1:8000/');
    //act
    cy.get(':nth-child(2) > .form-control').type('superadmin@gmail.com');
    cy.get(':nth-child(3) > .form-control').type('password');
    cy.get('.btn').click();
    cy.visit("http://127.0.0.1:8000/user-management/user");
      });
  //positive test case
  it('User can edit existing data', () => {
    cy.get(".table td")
    .contains("user")
    .parent()
    .find("a")
    .contains("Edit")
    .click();
    cy.get("#name").clear("user");
    cy.get('#name').type('user edited challenge');
    cy.get('.btn-primary').click();
    cy.get(".table td").contains("user").should("have.text", "user edited challenge");
    cy.get(".alert").should("be.visible");
    cy.get(".alert").should("contain", "User Berhasil Diupdate");
  });

  it('User can edit existing data 2', () => {
    cy.get(".table td")
    .contains("user")
    .parent()
    .find("a")
    .contains("Edit")
    .click();
    cy.get("#name").clear("user baru");
    cy.get('#name').type('user baru edited challenge');
    cy.get('.btn-primary').click();
    cy.get(".table td").contains("user").should("have.text", "user baru edited challenge");
    cy.get(".alert").should("be.visible");
    cy.get(".alert").should("contain", "User Berhasil Diupdate");
  });
});