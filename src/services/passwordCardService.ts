import PasswordCardModel from '../models/passwordCardModel';

let passwordCards: PasswordCardModel[] = [
    {
        id: '1',
        url: 'https://www.google.com',
        name: 'Google',
        username: 'google',
        password: '123456',
    },
    {
        id: '2',
        url: 'https://www.facebook.com',
        name: 'Facebook',
        username: 'facebook',
        password: '123456',
    },
    {
        id: '3',
        url: 'https://www.twitter.com',
        name: 'Twitter',
        username: 'twitter',
        password: '123456',
    },
    {
        id: '4',
        url: 'https://www.instagram.com',
        name: 'Instagram',
        username: 'instagram',
        password: '123456',
    },
];

class PasswordCardService {
    static getAllCards(filter: string = '') {
        return passwordCards.filter((card: PasswordCardModel) =>
            card.name.toLowerCase().includes(filter.toLowerCase())
        );
    }

    static getCardById(id: string) {
        return passwordCards.find((card: PasswordCardModel) => card.id === id);
    }

    static createCard(url: string, name: string, username: string, password: string) {
        const newCard = new PasswordCardModel(url, name, username, password);
        passwordCards.push(newCard);
        return newCard;
    }

    static updateCard(id: string, url: string, name: string, username: string, password: string) {
        const cardIndex = passwordCards.findIndex(card => card.id === id);
        if (cardIndex == -1) return null;

        passwordCards[cardIndex] = { id, url, name, username, password };
        return passwordCards[cardIndex];
    };

    static delete(id: string) {
        const cardIndex = passwordCards.findIndex(card => card.id === id);
        if (cardIndex == -1) return false;

        passwordCards.splice(cardIndex, 1);
        return true;
    };
};

export default PasswordCardService;