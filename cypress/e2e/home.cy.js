describe('Home page', () => {
  it('renders home page content', () => {
    cy.visit('/');
    cy.contains('Hello From Nuxt!');
  });
});
