import login from "../support/pages/loginPage";
import register from "../support/pages/registerPage";
import { faker } from '@faker-js/faker';

    const randomName = faker.person.fullName();
    const randomEmail = faker.internet.email();

describe('Register', () => {
    beforeEach(() => {
        cy.acessarSite();
        login.clicarCadastro();
    });

    it('CT01 - Cadastrar usuário com sucesso', () => {
        register.preencherCadastro({ userRegister: { name: randomName, email: randomEmail, password: 'teste123' } });
        register.clicarCadastrar();
        register.validarMsgSucesso().then((text) => {
            expect(text).eq("Usuário inserido com sucesso");
        });
    });

    it('CT02 - Cadastrar usuário com nome vazio', () => {
        register.preencherCadastro({ userRegister: { name: null, email: randomEmail, password: 'teste123'}});
        register.clicarCadastrar();
        register.validarMsgErro().then((text) => {
            expect(text).eq("Nome é um campo obrigatório");
        });
    });

    it('CT03 - Cadastrar usuário com email vazio', () => {
        register.preencherCadastro({ userRegister: { name: randomName, email: null, password: 'teste123'}});
        register.clicarCadastrar();
        register.validarMsgErro().then((text) => {
            expect(text).eq("Email é um campo obrigatório");
        });
    });

    it('CT04 - Cadastrar usuário com senha vazia', () => {
        register.preencherCadastro({ userRegister: { name: randomName, email: randomEmail, password: null}});
        register.clicarCadastrar();
        register.validarMsgErro().then((text) => {
            expect(text).eq("Senha é um campo obrigatório");
        });
    });
});