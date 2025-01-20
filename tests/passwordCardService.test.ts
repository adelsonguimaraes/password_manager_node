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

