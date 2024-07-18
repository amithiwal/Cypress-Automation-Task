Step-by-Step Guide for Setting Up Cypress and GitHub Actions on Windows
Step 1: Install Cypress

Step 2: Create a new project directory and navigate to it:
mkdir cypresstaskautomation
cd cypresstaskautomation

Step 3: Initialize a new Node.js project:
npm init -y

Step 4:Install Cypress:
npm install cypress --save-dev

Step 5: Create a Cypress configuration file

Step 6: Create a cypress.config.js file in the root directory

Step 7: Write Test Cases
Test Case 1: User Signup
Test Case 2: User Login
Test Case 3: forms Validation
Create 3 new test file in the cypress\e2e\2-advanced-examples\ directory named signup.cy.js, login.cy.js, form_validations.cy.js.

Step 8: Write all 3  test cases

Step 9: Generate Test Report
Install Mocha and a reporter, such as Mochawesome:
npm install mocha mochawesome --save-dev

Configure Cypress to use the reporter:
Update the cypress.config.js file to include the reporter
Run Tests and Generate Report:
npx cypress run
The report will be generated in the cypress/reports directory.

Step 10: Documentation
Create README.md:
In the root directory, create a README.md file

Assumptions
The OTP for verification is 123456.
The Email used during Sign Up is not Registered.