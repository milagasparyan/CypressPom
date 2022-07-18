# CypressPom
Cypress with POM test in https://www.booking.com/
Dependencies:

JavaScript
Node v16.16.0
Cypress 10.3.0
cd to root directory of the project Install Node modules using npm install


Running tests:

browser mode: npx cypress open
headless mode: npx cypress run

Steps:

1. Open https://www.booking.com/
2. Fill in "Where are you going?" filed "Dilijan"
3. Select date
4. Increase number of adults
5. Click on the "Search" button
6. Check all result items contain "Dilijan"
7. Filter results by "Star Rating" (4 stars)
8. Check result list have items only with 4 stars
