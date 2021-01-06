# Exame - Bexs Front-end

## Observações

Olá, tudo bem? <br><br>
Você pode acessar uma página com o projeto rodando no link abaixo:<br>
<https://bexs-front-end-exam.netlify.app/><br><br>
O projeto principal está na pasta frontend, porém também foi criado uma pasta backend para que fosse possível fazer a chamada de teste de API /pagar.

O projeto do frontend está em angular, portanto, se você ainda não tem o angular em seu ambiente basta instalar com:

~~~shell
$ npm install -g @angular/cli
~~~

Para rodar o frontend e o backend em um comando só basta rodar o comando:
~~~shell
$ npm i && npm run dev
~~~

Caso queira rodar o frontend e o backend separados, basta seguir os passos abaixo:

1) Para acessar e rodar o backend:
~~~shell
$ cd backend
$ npm install
$ node app.js
~~~


2) Para acessar e rodar o frontend:
~~~shell
$ cd frontend
$ npm install
$ ng serve --open
~~~

Para rodar os testes de unidade (assumindo que você está na pasta frontend), rode o seguinte comando:
~~~shell
$ npm run test
~~~

## Desafio

Desenvolver uma aplicação front-end de acordo com as especificações descritas nos **requisitos** utilizando a _stack_ tecnologica de sua preferencia.

- Desenvolva este Layout: https://xd.adobe.com/spec/9c4a9206-ac61-4050-796d-89c00fb79e91-ea7b
- Utilize a tecnologia de sua preferencia (ReactJs, Angular, Angularjs, Vue.js, Jquery, Bootstrap, Material, Nodejs, Java, C#, PHP, etc).

## Como entregar sua solução?

1. Clone do repositório

2. Tente explicar a evolução do projeto em _commits_.

3. Caso use algum _task runner_/_module bundle_ - faça o commit da ultima versão build/bundle.

4. Para nos enviar seu teste escolha uma das formas:

### Gerar um patch:

Para gerar o patch:

```
git format-patch origin/master --stdout > seu_nome.patch
```

Certifique que o patch irá funcionar executando >> `git apply seu_nome.patch` e nos envie através do email que entramos em contato

### Criando um repositório público:

Crie um repositório em uma plataforma de pública de repositórios (GitHub, BitBucket, GitLab, etc) e nos envie através do email que entramos em contato.

## Requisitos

- Faça códigos legiveis e utilize uma arquitetura de fácil entendimento.
- Edite este Readme ou crie um novo Markdown explicando como um DEV deveria utilizar o projeto

## Bonus

- Testes automatizados.
- Crie uma camada que efetue uma chamada REST para um endpoint fictício "/pagar" - iremos analisar apenas a estrutura

## Dúvidas

Entre em contato e nos questione.
