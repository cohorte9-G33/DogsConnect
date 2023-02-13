import { Router } from 'express';
import { UsersControllers } from '../controllers/users.controllers.js';

const router = Router();

router.get('/:id', UsersControllers.getUserById);
router.get('/search', UsersControllers.getUserByUsername);

export default router;
