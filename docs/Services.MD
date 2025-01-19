# Sevices
Agora temos as services, segundo ponto crucial no nosso desenvolvimento, já temos as definições do nosso modelo, então agora podemos tranquilamente trabalhar com a manipulação desses dados de forma simples.

A service é basicamente o onde fica a responsabilidade da API para interações com a base de dados, é aqui que trabalhamos a inserção e remoção de dados, considerando que os dados já foram limpos e validados e estão prontos para serem salvos na base de dados ou consultados.

Importamos nosso modelo `PasswordCardModel`.
```ts
import PasswordCardModel from '../models/passwordCardModel';
```

Criamos uma lista e usamos nosso modelo para tipar os objetos que serão aceitos por ele, isso garante que os dados tenham o formato correto e que a IDE entenda o tipo e possa sugerir propriedades e métodos correspondentes quando for necessário manipular.

```ts
const PasswordCardModel = require('../models/passwordCardModel');
```

Seguindo, criamos nossa classe `PasswordCardService` e os métodos, onde ficam nossos métodos de manipulação de dados.

```ts
class PasswordCardService {
    ...
}
```
### Métodos

* __getAllCards__

    Nosso método que pode listar ou listar com filtro `getAllCards`, cógido simples que que pode receber um filtro, faz um `filter` na listagem, tipa o valor de card como `PasswordCardModel`, acessa o `name` do card deixa em formato minúsculo com a função `toLowerCase`, usa a função `includes` que verifica se dentro da string de name contém a palavra informada, que no caso é o valor que vem em `filter` que também é convertido para minúsculo.

    Convertemos todos os textos para minúsculos para aumentar a capacidade do filtro, assim independente do tipo de `sensitividade`, o texto por ser encontrado.
    ```ts
    static getAllCards(filter: string = '') {
        return passwordCards.filter((card: PasswordCardModel) =>
            card.name.toLowerCase().includes(filter.toLowerCase())
        );
    }
    ```
* __getCardById__
    
    Aqui temos o método para buscar um item pelo identificador, o método espera o identificador, busca na lista usando o método `find` e retorna o objeto encontrado.

    ```ts
    static getCardById(id: string) {
        return passwordCards.find((card: PasswordCardModel) => card.id === id);
    }
    ```


* __createCard__

    Nosso método de criação, recebe os dados necessários para salvar, cria uma nova instância de `PasswordCardModel` e adiciona a lista usando um método `push`.

    ```ts
    static createCard(url: string, name: string, username: string, password: string) {
        const newCard = new PasswordCardModel(url, name, username, password);
        passwordCards.push(newCard);
        return newCard;
    }
    ```

* __updateCard__

    Método de atualização de dados, recebe os dados pra atualização, busca na lista de dados, verifica se existe, se existir atualiza as informações.

    ```ts
    static updateCard(id: string, url: string, name: string, username: string, password: string) {
        const cardIndex = passwordCards.findIndex(card => card.id === id);
        if (cardIndex == -1) return null;

        passwordCards[cardIndex] = { id, url, name, username, password };
        return passwordCards[cardIndex];
    };
    ```
* __delete__

    O método de remover é o mais simples, espera apenas o identificador, busca na lista, se encontrar remove.

    ```ts
    static delete(id: string) {
        const cardIndex = passwordCards.findIndex(card => card.id === id);
        if (cardIndex == -1) return null;

        passwordCards.splice(cardIndex, 1);
        return true;
    };
    ```

No final do arquivo precisamos expor nossa classe service com um modulo para que possamos depois importar o mesmo em outros arquivos, para isso adicionamos a seguinte linha.

```ts
export default PasswordCardService;
```

## Navegação
* Voltar para o [Início](Documentation.MD)
* Voltar para [Models](Models.MD)
* Ir para o próximo: [Controllers](Controllers.MD)