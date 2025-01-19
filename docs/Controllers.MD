# Controllers
Com nossos serviços prontos podemos trabalhar na nossa controller que é basicamente onde nossa API recebe as requisições do cliente.

## Imports
Começamos fazendo as importações que são necessárias no código.
```ts
import { Request, Response } from "express";
import PasswordCardService from "../services/passwordCardService";
```

## Métodos
Aqui nossos métodos correspondem diretamente aos verbos HTTP que conversão com as requisições do cliente.

Todos nossos métodos retornam uma promisse e por isso usam o método `async/await` para esperar a resposta do processamento da service.

* __[GET] getAllCards__

    Responsável por fazer a listagem dos dados, assim também como pode receber um parâmetro `filtro` que não é obrigatório, ele recebe o parâmetro dentro de `Request.query` isso devido o fato de ele vir através da URL da requisição, em seguida ele chama o método `PasswordCardService.getAllCards` e usa o método `Response.json()` para retornar os dados como resposta da request.
    ```ts
    export const getAllCards = async (req: Request, res: Response): Promise<void> => {
        try {
            const { filter } = req.query;
            const cards = PasswordCardService.getAllCards(filter as string);
            res.status(200).json(cards);
        } catch (error) {
            res.status(500).json({ error: 'Internal server error' });
        }
    };
    ```

* __[GET] getCardById__

    Outro método que usa o verbo `GET`, usado para consultar um dado via o identificador, após a chamada do service verifica se encontrou o card e decide se responde um `404` ou `200`.
    ```ts
    export const getCardById = async (req: Request, res: Response): Promise<void> => {
        try {
            const { id } = req.params;
            const card = PasswordCardService.getCardById(id as string);
            if (!card) {
                res.status(404).json({ message: 'Card not found' });
            }
            res.status(200).json(card);
        } catch (error) {
            res.status(500).json({ error: 'Internal server error' });
        }
    };
    ```
* __[POST] createCard__

    Aqui temos nosso método para criar um registro novo, que usa o verbo `POST`, os dados são transmitidos dentro do body da requição, por isso para pegar os dados usamos `Request.body`, em seguida fazemos uma validação da consistência dos dados com um `IF`, se haver algum requisito não atendido retornamos um `404` com uma mensagem de erro, se não, seguimos e chamamos a service para fazer o registro, por fim retornamos uma response `201` com os dados atualizados do novo registro para a requisição.

    ```ts
    export const createCard = async (req: Request, res: Response): Promise<void> => {
        try {
            const { url, name, username, password } = req.body;
            if (!url || !name || !username || !password) {
                res.status(400).json({ error: 'Missing required fields' });
            }
            const newCard = PasswordCardService.createCard(url, name, username, password);
            res.status(201).json(newCard);
        } catch (error) {
            res.status(500).json({ error: 'Internal server error' });
        }
    };
    ```

* __[UPDATE] updateCard__
    Nosso método que atualiza os dados, espera o envio de um identificador que vem como um parametro da url, isso porque o id vem logo após a url como se fosse parte dela `url/id`.

    Também temos dados no body assim como vimos no create.

    Validamos a consistência dos dados para ver se todos os dados foram informados considerando que todos são obrigatórios, caso não ele retorna o `404`, e caso sim ele chama a service e devolve um `Response` de status `200`.

    ```ts
    export const updateCard = async (req: Request, res: Response): Promise<void> => {
        try {
            const { id } = req.params;
            const { url, name, username, password } = req.body;

            if (!url || !name || !username || !password) {
                res.status(400).json({ error: 'Missing required fields' });
            }

            const updatedCard = PasswordCardService.updateCard(id, url, name, username, password);
            if (!updatedCard) {
                res.status(404).json({ message: 'Card not found' });
            }

            res.status(200).json(updateCard);
        } catch (error) {
            res.status(500).json({ error: 'Internal server error' });
        }
    };
    ```

* __[DELETE] deleteCard__

    Neste método assim como no anterior vamos esperar um indentificador por parâmetro.
    
    Após pegar o identificador de `Request.params` vamos chamar a service para remover o item, validamos se a remoção foi feita com sucesso dependendo do resultado fazemos uma `Response 404` ou uma `Response 204`.

    ```ts
    export const deleteCard = async (req: Request, res: Response): Promise<void> => {
        try {
            const { id } = req.params;
            const isDeleted = PasswordCardService.delete(id);
            if (!isDeleted) {
                res.status(404).json({ message: 'Card not found' });
            }
            res.status(204).send();
        } catch (error) {
            res.status(500).json({ error: 'Internal server error' });
        }
    };
    ```

## Navegação
* Voltar para o [Início](Documentation.MD)
* Voltar para [Models](Services.MD)
* Ir para o próximo: [Routes](Routes.MD)