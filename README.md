<h1 align="center">Automação com Cypress - BugBank</h1>
Olá! Este é o repositório do projeto que desenvolvi com o objetivo de automatizar testes front-end utilizando as tecnologias Cypress, JavaScript, Faker e Node.js. A aplicação que foi testada é a https://bugbank.netlify.app/. 
<br>
<br>
O BugBank é uma aplicação simples que permite que os usuários façam login em uma conta bancária fictícia, visualize informações de conta e transfiram dinheiro entre contas. O objetivo deste projeto foi estudar e reaprender cypress desenvolvendo testes automatizados para para verificar se as funcionalidades do BugBank estão funcionando corretamente e sem erros.
<br>
<br>
<strong>Neste projeto os testes não estão cobertos 100%, e a automação dos cenários NÃO estão finalizadas ainda.<strong>
<br>
<br>

## 📝Pré-requisitos
### Será necessário:

* VsCode: https://code.visualstudio.com/download <br>
* NodeJS: https://nodejs.org/en/download/ <br>
* Git: https://git-scm.com

## 🔒Instalaçao
Será preciso instalar o cypress:
> A pasta node_modules estará no .gitignore, este comando abaixo fará a pasta aparecer.
```
npm install cypress --save-dev
```

Será preciso instalar o faker:
```
npm install @faker-js/faker --save-dev
```

## 🎲Executar os testes
### Os testes são executados no ambiente de produção. 
Para ser executado será necessário abrir um terminal e rodar o comando:
```
npm run cy:open
```

## A tela gráfica do cypress será aberta:
<img width="627" alt="abrircypress" src="https://user-images.githubusercontent.com/71040642/232140210-a9ed78c2-e96d-42ee-a083-9a335df9b8f6.png">
<br>
* Nessa aba mostrada acima, após clicar em E2E testing, deve escolher um navegador. Para os meus testes usei o Chrome.
<br>
<br>
* Quando um navegador for escolhido será aberto outra tela, possuindo as especs dos testes:
<br>
<img width="521" alt="specs" src="https://user-images.githubusercontent.com/71040642/232141098-ed7e0f88-44d2-467b-97e8-6088884f4f54.png">
<br>
<br>
* É só selecionar a spec desejada que o teste será rodado com sucesso.

## ⚙️Ferramentas

* VsCode
* NodeJS
* Cypress
* Faker

## ✏️Autores

* Desenvolvedora e tester -> Isis Xavier
