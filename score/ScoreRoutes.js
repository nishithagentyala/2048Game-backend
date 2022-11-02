import express from 'express'
const router = express.Router()

import { addScore, myGames } from './ScoreController.js'
import { protect } from '../data/authMiddleware.js'

router.route('/').post(protect, addScore)
router.route('/mygames').get(protect, myGames)

export default router
