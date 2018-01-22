import * as mongoose from 'mongoose'
const Schema = mongoose.Schema

interface Meme extends mongoose.Document {
  gagId: string
  contentUrl: string
  title: string
  rating: number
  type: string
}

const MemeSchema = new Schema({
  gagId: String,
  contentUrl: String,
  title: String,
  rating: {
    type: Number,
    default: 0
  },
  type: {
    type: String,
    enum: ['Video', 'Photo', 'Animated']
  }
})

export default mongoose.model<Meme>('Meme', MemeSchema, 'memes')
