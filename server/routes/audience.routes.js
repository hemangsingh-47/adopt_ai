import express from 'express';
import { getAudiences, createAudience, deleteAudience } from '../controllers/audience.controller.js';
import { protect } from '../middleware/auth.middleware.js';

const router = express.Router();

router.use(protect);

router.route('/')
  .get(getAudiences)
  .post(createAudience);

router.route('/:id')
  .delete(deleteAudience);

export default router;
