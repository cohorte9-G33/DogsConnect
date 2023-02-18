import { Router } from 'express';
import { ProfileControllers } from './../controllers/profile.controllers.js';
import multer from 'multer';

const router = Router();
const upload = multer({ storage: multer.memoryStorage() });

router.put('/:id', upload.single('photo'), ProfileControllers.update);

export default router;
