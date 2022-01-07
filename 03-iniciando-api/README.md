<p align="center">
  <img src="../.github/capa-ignite-nodejs.png" alt="Ignite Node.js">
</p>

<br>

<h1 align="center">
  Iniciando a API
</h1>

<h2 align="center">
  API de aluguel de carros
</h2>

<br>

<p align="center">
  <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" alt="Node.js">
  <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript">
  <img src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white" alt="Express.js">
</p>

### Objetivos do módulo:
- Entender o que é o TypeScript;
- Entender como utilizar o TypeScript para melhorar uma aplicação;
- Entender os princípios do SOLID;
- Entender o que é a arquitetura limpa;
- Entender como documentar uma aplicação.

### Especificações:
- Cadastro de usuários;
- Cadastro de carros;
- Cadastro de aluguéis;
- Cadastro de especifições para busca do usuário.

### Introdução ao TypeScript:
1. O que é o TypeScript?
   - Uma linguagem open-source da Microsoft;
   - É um superset para o JavaScript;
   - Possui tipagem estática.
2. Por que usar o TypeScript?
   - JavaScript:
     ```{javascript}
     const user = {
       name: 'Logan',
       username: 'l0g4n',
       document: 31303
     };

     user.document = 13330;
     ```
   - TypeScript:
     ```{typescript}
     class User {
       name: string;
       username: string;
       document: string;
     }

     const user: User = {
       name: 'logan',
       username: 'l0g4n',
       document: 31303 // Error
     }
     ```
   - JavaScript "vs" TypeScript:
     - Função em JavaScript:
       ```{javascript}
       function sum(num1, num2) {
         return num1 + num2;
       }

       console.log(sum(1, 2)); // 3
       console.log(sum(1, 2)); // 12
       console.log(sum());
       ```
     - Função em TypeScript
       ```{typescript}
       function sum(num1: number, num2: number) {
         return num1 + num2;
       }

       console.log(sum(1, 2)); // 3
       console.log(sum(1, 2)); // Error
       console.log(sum(1)); // Error
       ```
3. Mitos e verdades:
- O TypeScript veio para substituir o JavaScript? *MITO!*
- Posso usar o TypeScript com JavaScript no mesmo projeto? *VERDADE!*
- A produtividade com TypeScript diminui? *DEPENDE!*
- Preciso tipar todas as variáveis? *MITO!*
- O TypeScript veio para transformar JavaScript em um C# ou em um Java? *MITO!*
- O TypeScript auxilia no desenvolvimento? *VERDADE!*
