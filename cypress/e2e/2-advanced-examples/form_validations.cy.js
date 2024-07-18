describe('Form Validations', () => {
    it('should validate required fields, email format, and password requirements', () => {
      // Visit Signup page
      cy.visit('/');
      // Check if Both Login and Sign Up fields are there
      cy.contains('Sign up')
      cy.contains('Log in')
      cy.contains('Sign up').click();
      cy.get('form').submit();

    // Assert that each required field has the expected validation message
      cy.contains('Email is required').should('be.visible');
      cy.get('input[placeholder="Enter email address"]').type('buttonshift75@sharklasers.com').type('{enter}');
      cy.get('form').submit();
      cy.get('button[type="submit"]').click();
      cy.get('input[placeholder="Enter password"]').should('be.visible');
      cy.get('input[placeholder="Retype password"]').should('be.visible');
      cy.get('input[placeholder="Enter password"]').type('Button@123');
      cy.get('input[placeholder="Retype password"]').type('Button@123');
      cy.get('button[type="submit"]').click();

      // Verify Enter OTP
      cy.get('input[type="number"]').each(($el, index) => {
        cy.wrap($el).type('123456'.charAt(index));
      });
      cy.get('button[type="submit"]').click();

      // Verify checking username, location
      cy.get('input[placeholder="Enter username"]').type('buttonshift65');
      cy.get('input[placeholder="choose location"]').type('United States').type('{enter}');
      cy.url().should('include', '/community');
    });
  });