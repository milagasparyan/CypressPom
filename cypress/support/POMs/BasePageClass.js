export class BasePage  {
  visit(url = 'https://www.booking.com/') {
    cy.visit(url)
  };

  randomItemFromArray(items) {
    return items[Math.floor(Math.random() * items.length)];
  };
}