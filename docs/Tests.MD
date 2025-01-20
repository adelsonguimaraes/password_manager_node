# Tests
Aqui temos um diretório onde organizamos os nossos arquivos de tests, para realizar os testes utilzamos a biblioteca `Jest`.

Um ponto importante que para acelerar a produção dos códigos de teste utilizei a IA `Codeium` uma ferramenta de aceleração de codificação, minha responsabilidade foi analisar o código gerado e ajustar pontos necessários.

Nosso `Jest` está configurado para rodar com `Coverage` gerando um relatório de coberto quando executado.

## PasswordCardModel.test.ts
Aqui temos o arquivo que testa o nosso modelo.

### Cobertura
* Teste de preenchimento correto de campos.
* Teste de geração de identificador com Uuid.
* Teste do formato de Uuid.

```ts
import PasswordCardModel from '../src/models/passwordCardModel';

describe('PasswordCardModel', () => {
    it('should create a new PasswordCardModel instance with correct properties', () => {
        const url = 'https://example.com';
        const name = 'Example Site';
        const username = 'user123';
        const password = 'password123';

        const passwordCard = new PasswordCardModel(url, name, username, password);

        expect(passwordCard.url).toBe(url);
        expect(passwordCard.name).toBe(name);
        expect(passwordCard.username).toBe(username);
        expect(passwordCard.password).toBe(password);

        expect(passwordCard.id).toBeDefined();
        expect(typeof passwordCard.id).toBe('string');
        expect(passwordCard.id).toMatch(/^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i);
    });
});
```

## PasswordCardService.test.ts
Também fizemos uma cobertura de testes para nossa service.

Nesse exemplo estamos testando cada método unitariamente, com testes funcionais e não funcionais (que não tem o caminho de sucesso).
```ts
import PasswordCardService from '../src/services/passwordCardService';
import PasswordCardModel from '../src/models/passwordCardModel';

describe('PasswordCardService', () => {
    describe('getAllCards', () => {
        it('should return all password cards', () => {
            const cards = PasswordCardService.getAllCards();
            expect(cards.length).toBeGreaterThan(0);
            expect(cards[0]).toBeInstanceOf(PasswordCardModel);
        });

        it('should return filtered password cards', () => {
            const filteredCards = PasswordCardService.getAllCards('google');
            expect(filteredCards.length).toBe(1);
            expect(filteredCards[0].name).toBe('Google');
        });
    });

    describe('getCardById', () => {
        it('should return the correct card by id', () => {
            const card = PasswordCardService.getCardById('1');
            expect(card).toBeDefined();
            expect(card?.id).toBe('1');
        });

        it('should return undefined for non-existent id', () => {
            const card = PasswordCardService.getCardById('non-existent-id');
            expect(card).toBeUndefined();
        });
    });

    describe('createCard', () => {
        it('should create a new card', () => {
            const newCard = PasswordCardService.createCard('https://newsite.com', 'New Site', 'newuser', 'newpass');
            expect(newCard).toBeInstanceOf(PasswordCardModel);
            expect(newCard.url).toBe('https://newsite.com');
            expect(newCard.name).toBe('New Site');
        });
    });

    describe('updateCard', () => {
        it('should update the existing card', () => {
            const updatedCard = PasswordCardService.updateCard('1', 'https://updatedsite.com', 'Updated Site', 'updateduser', 'updatedpass');
            expect(updatedCard).toBeDefined();
            expect(updatedCard?.name).toBe('Updated Site');
        });

        it('should return null for non-existent id', () => {
            const updatedCard = PasswordCardService.updateCard('non-existent-id', 'url', 'name', 'username', 'password');
            expect(updatedCard).toBeNull();
        });
    });

    describe('delete', () => {
        it('should delete the card by id', () => {
            const result = PasswordCardService.delete('1');
            expect(result).toBe(true);
            const card = PasswordCardService.getCardById('1');
            expect(card).toBeUndefined();
        });

        it('should return null for non-existent id', () => {
            const result = PasswordCardService.delete('non-existent-id');
            expect(result).toBe(false);
        });
    });
});
```