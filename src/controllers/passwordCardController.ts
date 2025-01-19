import { Request, Response } from "express";
import PasswordCardService from "../services/passwordCardService";

export const getAllCards = async (req: Request, res: Response): Promise<void> => {
    try {
        const { filter } = req.query;
        const cards = PasswordCardService.getAllCards(filter as string);
        res.status(200).json(cards);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
};

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