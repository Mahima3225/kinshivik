import express from 'express';
import { verifyToken } from '../utils/verifyUser.js';

const router = express.Router();


router.get('/category/:categoryid/getposts', getposts);



export default router;