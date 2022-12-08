import Button from '~/components/buttons/Button.vue'

it('renders the modal content', () => {
  cy.mount(Button, { slots: { default: () => 'Content' }, props: { color: 'purpleBlue' } })
    .get('[data-cy="primaryBtn"]')
    .should('have.text', 'Content')
    .should('have.class', 'from-purple-600')
})
