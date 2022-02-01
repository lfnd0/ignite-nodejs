<p align="center">
  <img src="../.github/capa-ignite-nodejs.png" alt="Ignite Node.js">
</p>

<br>

<h1 align="center">
  Testes e regras de negócio

  <br>

  RentX (API de aluguel de carros)
</h1>

<br>

<p align="center">
  <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" alt="Node.js">
  <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript">
  <img src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white" alt="Express.js">
  <img src="https://img.shields.io/badge/Docker-2CA5E0?style=for-the-badge&logo=docker&logoColor=white" alt="Docker">
</p>

### Objetivos do módulo:
- Entender testes e quais os seus tipos;
- Entender e aplicar o TDD (Test Driven Development/Desenvolvimento Dirigido por Testes);
- Aprender e implementar as regras de negócio;
- Analisar os requisitos da aplicação.

### Conhecendo os tipos de testes
- Tipos de testes:
  - Testes unitários:
    - São testes realizados em "pedaços"/unidades da aplicação;
    - Testes realizados nos serviços/funcionalidades/regras de negócio;
    - Testes de casos de sucesso e casos de erros;
    - Não é testado o acesso a APIs externas;
    - Garantem que a lógica do negócio está bem definida.
  - Testes de integração:
    - São testes realizados para verificar a aplicação inteira;
    - Verificação do fluxo completo da aplicação;
    - Verificação dos fluxos externos da aplicação (conexão com o banco de dados, acesso a APIs externas, envio de e-mails e etc.).
- TDD:
  - Metodologia usada para criação de testes;
  - Iniciar criando os testes, para só depois implementar as funcionalidades em si.
- Vantagens do uso de testes:
  - Apontar as mudanças das regras de negócio através dos testes criados;
  - Minimizar o "caos" oriundo dos erros no estágio de produção;
  - Auxiliar no entendimento das implementações realizadas aplicação.
