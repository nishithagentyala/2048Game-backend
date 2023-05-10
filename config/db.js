import mongoose from 'mongoose'

const connectDB = () => {
  try {
    mongoose.connect(process.env.MONGO_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    })

    console.log(`mongo database is connected!!! `)
  } catch (error) {
    console.error(`Error: ${error} `)
    process.exit(1)
  }
}

export default connectDB
