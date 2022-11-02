import mongoose from 'mongoose'

const scoreSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    scores: [
      { score: { type: Number } },
      { bestScore: { type: Number } },
      { createdAt: { type: Date } },
    ],
  },
  { timeStamps: true }
)
const Score = new mongoose.model('score', scoreSchema)
export default Score
