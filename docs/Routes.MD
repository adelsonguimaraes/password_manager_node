# Routes
Aqui temos nosso arquivo de Rotas onde configuramos os endpoints e o controller que irá tratar o mesmo.

## Imports
Começamos fazendo os `imports` que vamos utilizar.

```ts
import express from 'express';
import {
    getAllCards,
    getCardById,
    createCard,
    updateCard,
    deleteCard
} from '../controllers/passwordCardController';
```

Criamos uma instância de `express router` para registrar nossas rotas, em seguida registramos cada rota em seus respectivos verbos.

```ts
const router = express.Router();

router.get('/password-cards', getAllCards);
router.get('/password-cards/:id', getCardById);
router.post('/password-cards', createCard);
router.put('/password-cards/:id', updateCard);
router.delete('/password-cards/:id', deleteCard);
```

## Navegação
* Voltar para o [Início](Documentation.MD)
* Voltar para [Controllers](Controllers.MD)
* Ir para o próximo: [App](App.MD)