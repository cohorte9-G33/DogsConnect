import { Router } from 'express';
import { AuthControllers } from '../controllers/auth.controllers.js';
import { verifyPassword } from '../middleware/verifyPassword.js';

const router = Router();

router.post('/register', AuthControllers.register);
router.post('/login', verifyPassword, AuthControllers.login);

export default router;
