# APP
Neste arquivo vamos isolar as configurações do `express`, adicionando o uso de `cors`, `express.json` e as rotas.

```ts
import express from 'express';
import cors from 'cors';
import router from './src/routes/passwordCardRoutes';

const app = express();

app.use(cors());
app.use(express.json());
app.use(router);

export default app;
```

## Navegação
* Voltar para o [Início](Documentation.MD)
* Voltar para [Routes](Routes.MD)
* Ir para o próximo: [Server](Server.MD)