import { mount } from 'cypress/react'

interface User {
  email: string | null;
  password: string | null;
}

declare global {
  namespace Cypress {
    interface Chainable {
      mount: typeof mount
      acessarSite: () => Chainable<JQuery<HTMLElement>>;
    }
  }
}