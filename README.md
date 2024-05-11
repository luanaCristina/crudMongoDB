<div>
  <h1>Criando uma conta no MongoDB</h1>
  <h2><a href="https://www.mongodb.com/pt-br/docs/guides/atlas/account/">Passo a passo e link para registro </a></h2>
  <h1>MongoDB Compass</h1>
  <h2><a href="https://www.mongodb.com/try/download/compass">Download do MongoDB Compass (nossa GUI) </a></h2>
</div>
<div>
<h1>Utilizamos o Express para criar o nosso servidor local e criar os métodos do nosso CRUD (POST, GET, DELETE e UPDATE)</h1>
<h2><a href="https://expressjs.com/pt-br/4x/api.html">Biblioteca Express() </a></h2>
<h1>Utilizando o exemplo do Express para criar a conexão com o MongoDB</h1>
<h2><a href="https://expressjs.com/pt-br/guide/database-integration.html#mongo">Conxexão MongoDB usando o Express() </a></h2>
<h1>Utilizando o exemplo do MongoDB para criar a conexão</h1>
<h2><a href="https://www.mongodb.com/docs/drivers/node/current/fundamentals/stable-api/">Conexão usando o exemplo do MongoDB </a></h2>
</div>

<h1>Utilizando o updateOne para atualizar o nosso banco</h1>
<h2><a href="https://www.mongodb.com/docs/manual/reference/method/db.collection.updateOne/#mongodb-method-db.collection.updateOne">updateOne() - exemplo1 </a></h2>
<h2><a href="https://www.mongodb.com/docs/drivers/node/current/fundamentals/crud/write-operations/modify/">updateOne() - exemplo2 </a></h2>
<h1>insertOne</h1>
<h2><a href="https://www.mongodb.com/docs/manual/reference/method/db.collection.insertOne/">insertOne() - exemplo1 </a></h2>
<h2><a href="https://www.mongodb.com/docs/drivers/node/current/fundamentals/crud/write-operations/insert/">insertOne() - exemplo2 </a></h2>
<h1>deleteOne</h1>
<h2><a href="https://www.mongodb.com/docs/manual/reference/method/db.collection.deleteOne/">deleteOne() - exemplo1 </a></h2>
<h2><a href="https://www.mongodb.com/docs/drivers/node/current/usage-examples/deleteOne/">deleteeOne() - exemplo2 </a></h2>
<h1>Usando Promises</h1>
<h2><a href="https://www.mongodb.com/docs/drivers/node/current/fundamentals/promises/ ">promises </a></h2>

<h1>Observação:</h1> 
<p>Estamos utilizando a versão 4.0 do MongoDB, por isso vocës devem acessar o site abaixo e selecionar o produto = MongoDB Manual e a Versão = 4.0 e baixar e extrair tudo. Em seguida abra o manual>html>crud.html para visualizar os detalhes que usamos no nosso código</p>
<h2><a href="https://www.mongodb.com/docs/legacy/?site=docs">Manual</a></h2>

<h1>Utilizando o EJS no lugar do .html</h1>
<h2><a href="https://ejs.co/#install">Instalação e exemplo</a></h2>
<h2><a href="https://ejs.co/">configurando para renderizar a página que criamos </a></h2>
<h2><a href="https://www.npmjs.com/package/ejs"> instalação, exemplo usando do npm</a></h2>

<h1>Nodemon</h1>
<h2><a href="https://www.npmjs.com/package/nodemon">instalação e utilizaçao </a></h2>
<p>No meu package.json eu adicionei o seguinte</p>

```
 "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "node server.js",
    "dev": "nodemon server.js"
  },
```

<h1>Esconda as suas credenciais usando o dotenv</h1>
<h2><a href="https://www.npmjs.com/package/dotenv">instalação e utilização</a></h2>
<p>Aqui eu criei no nosso projeto um arquivo chamado .env e adicionei a variável DATABASE_URL </p>

```
DATABASE_URL = "o drive do seu cluster (uri)
```

<p>Não esqueça de substituir o que consta entre <password> por sua senha</p>
<h1>Adicione um .gitignore no seu projeto</h1>
<h2><a href="https://git-scm.com/docs/gitignore">gitignore utilização </a></h2>
<p>Dentro do meu arquivo .gitignore consta:</p>

```
node_modules/
.env
```

<h1>Para executar o nosso projeto </h1>
<p>Precisa ter o NodeJS instalado</p>
<h2><a href="https://nodejs.org/en/download">Download e instalação</a></h2>
<h2><a href="https://docs.npmjs.com/cli/v10/commands/npm-install">Utilização </a></h2>
<h2><a href="https://docs.npmjs.com/cli/v10/commands/npm-run-script">Rodar nosso projeto</a></h2>
<p>No terminal da sua IDE dentro da pasta do seu projeto execute os comandos abaixo</p>
<p>o install vai instalar todos as bibliotecas que foram utilizadas nesse projeto e criar a pasta node_modules</p>

```
npm install
```

<p>o comando abaixo vai executar o nosso projeto e vai exibir no temrinal: o nosso servidor está rodando na porta 3000 </p>

```
npm run dev
```

<p>Abra um browse (Chrome, Edge, Firefox, Opera, etc) e digite a rota abaixo</p>

```
localhost:3003/index
```

<p>Embora eu tenha dito anteriormente que vai exibir no terminal a porta 3000 na verdade ele está na porta 3003</p>
<p>Siga todos os fluxos e veja o código funcionando</p>
<p>Dúvidas???? Adicione comentário na sala de aula na atividade <strong>CRUD - JavaScript + EJS + MongoDB</strong></p>

<h1>Estamos usando JavaScript</h1>
<h2><a href="https://developer.mozilla.org/pt-BR/docs/Web/JavaScript">O que é e como usar - Mozila </a></h2>
<h2><a href="https://eloquentjavascript.net/">Livro Eloquente JavaScript em inglês na web</a></h2>
<h2><a href="https://github.com/braziljs/eloquente-javascript/">Livro Eloquente JavaScript em Português no GitHub</a></h2>
<h2><a href="https://www.w3schools.com/js/">O que é e como usar W3school</a></h2>
<h2><a href="https://www.learn-js.org/">Aprendendo com joguinho - 1 </a></h2>
<h2><a href="https://code.org/">Aprendendo com joguinho - 2 </a></h2>
<h2><a href="https://br.codecombat.com/">Aprendendo com joguinho - 2 </a></h2>
