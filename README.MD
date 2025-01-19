# Password Manager API
API para os sistema de gerenciamentos de senhas de aplicações.

## Documentação
Clique no link abaixo para ter acesso a documentação detalhada.

[> Acesso a documentação <](docs/Documentation.MD)

## Funcionalidades
* Cadastro
* Listagem com filtro.
* Buscar por id.
* Atualização.
* Exclusão.
## Tecnologias
* WSL2
* Ubuntu 20.04.3 LTS
* Node v22.12.0
* NPM/NPX 10.9.0


## Bibliotecas
* Express 4.21.2
    > Usado para fazer o gerenciamento do servidor e facilitar na parte de integração REST API.
* Uuid 11.0.5
    > Usado para facilitar na geração de um identificador único para os registros.
* Cors 2.8.5
    > Usado para configurar permissão de acesso de clientes externos sem SSL.

## IDE
* Visual Studio Code
* Puglin Codeium: 
    > Ferramenta aceleradora de desenvolvimento, IA Generativa similar ao Copilot do Github.

## Versionador
* Git CLI
* Serviço Github

## Reproduzir
Siga os passos a seguir para reproduzir a execução da API.

* Instalação de pacotes.
```sh
npm install
```

* Inicializar o servidor.

```sh
npm run dev
```

## Endpoints
* GET
    * > fetchAll: /password-cards
    * > filter: /password-cards/?filter={name}
    * > byId: /password-cards/{id}

* POST
    * > /password-cards
    * Body fields
        ```json
        {
            "name": "name",
            "url": "url",
            "username": "user",
            "password": "pass",
        }
        ```
* PUT
    * > /password-cards/{id}
    * Body fields
        ```json
        {
            "name": "name",
            "url": "url",
            "username": "user",
            "password": "pass",
        }
        ```
* DELETE
    * > /password-cards/{id}