import login from "../support/pages/loginPage";
import home from "../support/pages/homePage";

describe("Login", () => {
  beforeEach(() => {
    cy.acessarSite();
  });

  it("CT01 - Login com credenciais válidas", () => {
    login.preencherLogin({ user: { email: Cypress.env("EMAIL"), password: Cypress.env("PASSWORD") } });
    login.clicarEntrar();
    home.validarMsgSucesso().then((text) => {
      expect(text).eq("Bem vindo, QA Teste!");
    });
  });

  it("CT02 - Login com email inválido", () => {
    login.preencherLogin({ user: { email: "nagato@teste.com", password: Cypress.env("PASSWORD") } });
    login.clicarEntrar();
    login.validarMsgErro().then((text) => {
      expect(text).eq("Problemas com o login do usuário");
    });
  });

  it("CT03 - Login com senha inválido", () => {
    login.preencherLogin({ user: { email: Cypress.env("EMAIL"), password: "123Tste" }});
    login.clicarEntrar();
    login.validarMsgErro().then((text) => {
      expect(text).eq("Problemas com o login do usuário");
    });
  });

  it("CT04 - Login com email vazio", () => {
    login.preencherLogin({ user: { email: null, password: Cypress.env("PASSWORD") } });
    login.clicarEntrar();
    login.validarMsgErro().then((text) => {
      expect(text).eq("Email é um campo obrigatório");
    });
  });

  it("CT05 - Login com senha vazio", () => {
    login.preencherLogin({ user: { email: Cypress.env("EMAIL"), password: null } });
    login.clicarEntrar();
    login.validarMsgErro().then((text) => {
      expect(text).eq("Senha é um campo obrigatório");
    });
  });
});