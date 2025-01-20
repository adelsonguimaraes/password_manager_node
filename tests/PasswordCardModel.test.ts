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