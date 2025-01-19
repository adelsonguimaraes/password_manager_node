import express from 'express';
import {
    getAllCards,
    getCardById,
    createCard,
    updateCard,
    deleteCard
} from '../controllers/passwordCardController';

const router = express.Router();

router.get('/password-cards', getAllCards);
router.get('/password-cards/:id', getCardById);
router.post('/password-cards', createCard);
router.put('/password-cards/:id', updateCard);
router.delete('/password-cards/:id', deleteCard);

export default router;