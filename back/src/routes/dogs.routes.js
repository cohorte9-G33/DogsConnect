import { Router } from 'express';
import multer from 'multer';
import { DogsControllers } from '../controllers/dogs.controllers.js';

const router = Router();
const upload = multer({ storage: multer.memoryStorage() });

router.post('/create', upload.array('photos', 3), DogsControllers.create);
router.get('/', DogsControllers.getAll);
router.get('/:id', DogsControllers.getByID);

export default router;
