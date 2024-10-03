<h1 align="center"> PROJETO CYPRESS - TYPESCRIPT </h1>

## 💬 Sobre o projeto
Este projeto foi desenvolvido para fins de estudo utilizando o typescript. 

## 💻 Tecnologias utilizadas

- Node js
- Cypress


##  📥 Clonando o projeto:
```bash
git clone url aqui
  ```

##  👩🏻‍💻​ Para instalar as dependências e os plugins:

Abra o terminal no VSCode (use CTRL + J) e digite o seguinte comando:

```bash
npm install
  ```

### Comando para abrir o cypress:

```bash
npx cypress open
  ```

#### Rodando em modo headless:
```bash
npm run test
```

## Estrutura do Projeto Cypress

Este projeto utiliza uma estrutura organizada por funcionalidade para gerenciar os testes e comandos relacionados. Abaixo está a organização geral do projeto:

```
cypress-typescript
├── cypress
│   ├── e2e
│   │   └── login.cy.ts
│   ├── support
│   │   ├── elements
│   │   │   ├── homeElements.ts
│   │   │   ├── loginElements.ts
│   │   ├── pages
│   │   │   ├── homePage.ts
│   │   │   ├── loginPage.ts
│   │   ├── actions.ts
│   │   ├── commands.ts
│   │   └── e2e.ts
│   ├── tsconfig.json
├── @types
│   └── index.d.ts
├── node_modules
├── .gitignore
├── cypress.config.ts
├── cypress.env.json
├── package.json
├── package-lock.json
└── README.md
```

## Recursos
- [Documentação Cypress](https://docs.cypress.io/guides/overview/why-cypress)
- [Documentação TypeScript](https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html)