import mongoose from 'mongoose'

const connectDB = () => {
  try {
    mongoose.connect(
      'mongodb+srv://nishitha:Nishitha%400102@proshop.b6sdv9h.mongodb.net/2048Game',
      {
        useUnifiedTopology: true,
        useNewUrlParser: true,
      }
    )

    console.log(`mongo database is connected!!! `)
  } catch (error) {
    console.error(`Error: ${error} `)
    process.exit(1)
  }
}

export default connectDB
