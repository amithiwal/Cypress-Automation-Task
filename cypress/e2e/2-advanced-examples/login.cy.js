describe('Login Flow Test', () => {
    it('should handle login flow based on email registration and land on community page', () => {
      // Visit the page where the login button is located
      cy.visit('/');
  
      // Click on the Log in button
      cy.contains('Log in').click();
  
      // Enter email address
      cy.get('input[placeholder="Enter email address"]').type('buttonshift1@sharklasers.com').type('{enter}');
  
      // Check if the page contains the login form
      
        // If Email is registered, proceed with login
    cy.get('input[placeholder="Enter password"]').type('Button@123').type('{enter}');
    
      
  
      // Verify redirection to the community page after login or signup
      cy.url().should('include', '/community'); // Assuming successful signup redirects here
  
    });
  });