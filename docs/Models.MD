# Models
Vamos começar falando sobre a `model`, que no meu ponto de vista é por onde o projeto começa de verdade, quando temos nossas entidades bem resolvidas com seus campos e métodos fica muito mais fácil ter direcionamento.

Então esse diretório é o local onde ficam os arquivos que representam nossas entidades do sistema nesse caso nosso `passwordCardModel.ts`.

* __passwordCardModel.ts__

    Eestrutra básica de uma classe de entidade com seus campos e construtor bem definidos, de acordo com a necessidade que temos no sistema.

    Um ponto a se destacar aqui é o uso da lib `uuid` que tem a funcionalidade de gerar seriais únicos, utilizamos isso para gerar nossos indenticadores de registro.

    ```ts
    const { v4: uuidv4 } = require('uuid');

    class PasswordCardModel {
        id: string;
        url: string;
        name: string;
        username: string;
        password: string;

        constructor(url, name, username, password) {
            this.id = uuidv4();
            this.url = url;
            this.name = name;
            this.username = username;
            this.password = password;
        }
    };

    export default PasswordCardModel;
    ```

## Navegação
* Voltar para o [Início](Documentation.MD)
* Voltar para [Tipagem](Typing.MD)
* Ir para o próximo: [Services](Services.MD)