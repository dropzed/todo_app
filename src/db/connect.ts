import mongoose from 'mongoose'

const connectDB = (url: any): Promise<typeof import('mongoose')> => {
  return mongoose.connect(url)
}

export default connectDB
