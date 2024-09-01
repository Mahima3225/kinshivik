import express from 'express';
import { verifyToken } from '../utils/verifyUser.js';

const router = express.Router();


router.get('/getposts', getposts);



export default router;