describe('User Signup', () => {
  it('should sign up successfully', () => {
    // Visit the main page
    cy.visit('/');

    // Click on the signup button
    cy.contains('Sign up').click();

    // Enter email on the signup page
    cy.get('input[placeholder="Enter email address"]').type('buttonshift1@sharklasers.com').type('{enter}');

    // Check if the email is already registered
    cy.get('input[placeholder="Enter password"]').then(($input) => {
      if ($input.length > 0) {
        // Email already exists, proceed to login
        cy.get('input[placeholder="Enter password"]').type('Button@123');
        cy.get('button[type="submit"]').click();
      } else {
        // Proceed with signup process
        cy.get('input[placeholder="Enter password"]').type('Button@123');
        cy.get('input[placeholder="Retype password"]').type('Button@123');
        cy.get('button[type="submit"]').click();

        // Enter OTP
        cy.get('input[type="number"]').each(($el, index) => {
          cy.wrap($el).type('123456'.charAt(index));
        });
        cy.get('button[type="submit"]').click();

        // Enter username, choose location
        cy.get('input[placeholder="Enter username"]').type('buttonshift123');
        cy.get('input[placeholder="choose location"]').type('United States').type('{enter}');
        cy.get('button[type="submit"]').click();
      }
    });

    // Verify redirection to the community page 
    cy.url().should('include', '/community'); // Assuming successful signup redirects here
  });
});