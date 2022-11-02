import Score from './ScoreModel.js'
import asyncHandler from 'express-async-handler'

//post /api/game
const addScore = asyncHandler(async (req, res) => {
  const { score, bestscore, createdAt } = req.body
  if (score === 0) res.status(404).send('ur score is zero')
  else {
    const score = new Score({
      user: req.user._id,
      score,
      bestscore,
      createdAt,
    })
    const addscore = await score.save()
    res.status(201).json(addscore)
  }
})

//  get  /api/mygames

const myGames = asyncHandler(async (req, res) => {
  const games = await Score.find({}).populate('user', 'id name')
  res.json(games)
})

export { addScore, myGames }
