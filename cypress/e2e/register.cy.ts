import login from "../support/pages/loginPage";
import register from "../support/pages/registerPage";
import { faker } from '@faker-js/faker';

describe('Register', () => {
    beforeEach(() => {
        cy.acessarSite();
    });

    it('CT01 - Cadastrar usuário com sucesso', () => {
        const randomName = faker.person.fullName();
        const randomEmail = faker.internet.email();

        login.clicarCadastro();
        register.preencherCadastro({ userRegister: { name: randomName, email: randomEmail, password: 'teste123' } });
        register.clicarCadastrar();
        register.validarMsgSucesso().then((text) => {
            expect(text).eq("Usuário inserido com sucesso");
        });
    });
});