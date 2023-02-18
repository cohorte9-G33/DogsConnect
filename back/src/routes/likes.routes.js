import { Router } from 'express';
import { LikesControllers } from '../controllers/likes.controllers.js';

const router = Router();

router.get('/:userId', LikesControllers.getLikes);
router.post('/add', LikesControllers.addLike);
router.patch('/delete', LikesControllers.deleteLike);

export default router;
