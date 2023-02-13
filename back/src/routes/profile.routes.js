import { Router } from 'express';
import { ProfileControllers } from './../controllers/profile.controllers.js';

const router = Router();

router.put('/:id', ProfileControllers.update);

export default router;
