<p align="center">
  <img src="../.github/capa-ignite-nodejs.png" alt="Ignite Node.js">
</p>

<br>

<h1 align="center">
  Fundamentos do Node.js
</h1>

<br>

### O que será visto neste módulo?
1. Fundamentos do Node.js:
   - O que é? 
   - Como funciona?
   - Quais problemas o Node.js resolve?
   - Por que foi criado/desenvolvido?
2. API/API Rest:
   - O que é e o que não é uma API/API Rest?
   - Quais são os métodos HTTP?
   - O que são os status code?
   - O que são os parâmetros?
3. Construção de APIs com base nos conceitos aprendidos.

### Conceitos do Node.js:
1. O que é Node.js?
   - Plataforma open-source que permite a execução da linguagem JavaScript do lado do servidor;
   - Composto pelo:
     - V8;
     - libuv;
     - Conjunto de módulos.
2. O que o Node.js veio resolver?
   - Ryan Dahl;
   - Barra de progresso do Flickr;
   - Tecnologias da época não davam um bom suporte aos processos de I/O.
3. Características do Node.js:
   - Arquitetura do event loop:
     - Call stack.
     - Single thread;
     - Non-blocking I/O;
     - Módulos próprios:
     - http;
     - dns;
     - fs;
     - buffer;
     - ...
4. Event loop:
   - Call stack;
   - O event loop "ouve" uma requisição por vez da call stack;
   - É single thread e utiliza a estrutura de dados pilha;
   - Repassa o processamento da pilha para até 4 threads, de acordo com a disponibilidade destas threads.
5. O que são gerenciadores de pacotes?
   - NPM e Yarn;
   - Instalar bibliotecas externas;
   - Disponibilizar bibliotecas.
6. Frameworks:
   - Express.js;
   - Egg.js;
   - Nest.js;
   - Adonis.js.

### Conceitos sobre API Rest:
1. O que é uma API?
   - Interface de Programação de Aplicativos, do acrônimo em inglês, Application Programming Interface;
   - Conjunto de especificações de possíveis interações entre aplicações;
   - Documentação para o desenvolvedor.
2. O que é o Rest?
   - Transferência Representacional de Estado, do acrônimo em inglês, Representation State Transfer;
   - Modelo de arquitetura.
3. As 6 regras da arquitetura Rest:
   - Client-server;
   - Stateless;
   - Cache;
   - Interface uniforme:
     - Identificação dos recursos;
     - Representação dos recursos;
     - Mensagens auto-descritivas;
     - HATEOAS:
       - Hypertext as the Engine of Application State.
   - Camadas;
   - Código sob demanda.
