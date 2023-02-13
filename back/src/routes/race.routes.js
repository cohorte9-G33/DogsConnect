import { Router } from 'express';
import { RaceControllers } from '../controllers/race.controllers.js';

const router = Router();

router.post('/create', RaceControllers.create);
router.get('/', RaceControllers.getAll);

export default router;
