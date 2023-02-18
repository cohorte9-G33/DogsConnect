import { Router } from 'express';
import { UsersControllers } from '../controllers/users.controllers.js';

const router = Router();

router.get('/:id', UsersControllers.getUserById);
router.get('/search', UsersControllers.getUserByUsername);
router.get('/likes/:userId', UsersControllers.getLikes);
router.post('/addLike', UsersControllers.addLike);
router.patch('/deleteLike', UsersControllers.deleteLike);

export default router;
