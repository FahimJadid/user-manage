import { Router } from 'express';
import { getUsers, getUserById, toggleActive } from './controllers.js';

const router = Router();

router.get('/users', getUsers);
router.get('/users/:id', getUserById);
router.patch('/users/:id/toggle-active', toggleActive);

export default router;
