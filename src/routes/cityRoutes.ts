// src/routes/cityRoutes.ts

import { Router } from 'express';
import { getCities } from '../controllers/ReadAllCitiesController';

const router = Router();

// Route pour récupérer toutes les villes
router.get('/cities', getCities);

export default router;
