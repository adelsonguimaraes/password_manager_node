# Documentação
Aqui está documentado com detalhes as decisões tomadas na implementação do código desta API.

# Estrutura
A primeira coisa que foi definida foi a nossa estrutura, um ponto muito importante para deixar o projeto organizado a partir do momento incial e pronto para uma expansão.

```sh
src/
|
├── controllers/
│   └── passwordCardController.ts
├── services/
│   └── passwordCardService.ts
├── routes/
│   └── passwordCardRoutes.ts
├── models/
│   └── passwordCardModel.ts
├── tests/
│   └── passwordCardModel.test.ts
│   └── passwordCardService.test.ts
├── app.ts
└── server.ts
```

Todas as responsabilidades foram separadas em um novo diretório deixando assim o projeto estruturado e pronto para manutenções pontuais sem colocar em risco a estrutura como um todo.

## Documentos
Abaixo você pode acessar a documentação de cada item.

* [Tipagem](Typing.MD)
* [Models](Models.MD)
* [Services](Services.MD)
* [Controllers](Controllers.MD)
* [Routes](Routes.MD)
* [App](App.MD)
* [Server](Server.MD)
* [Tests](Tests.MD)