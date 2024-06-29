import mongoose from 'mongoose'
import 'dotenv/config'



const mongo_uri = process.env.Mongo_url
export const dbConnection = () => {
  mongoose.connect(mongo_uri).then(() => {
    console.log('Database Connected')
  })


}