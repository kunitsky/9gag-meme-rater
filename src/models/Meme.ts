import * as mongoose from 'mongoose'
const Schema = mongoose.Schema

const MemeSchema = new Schema({
  gagId: String,
  contentUrl: String,
  title: String,
  rating: {
    type: Number,
    default: 1
  },
  type: {
    type: String,
    enum: ['Video', 'Photo', 'Animated']
  }
})

export default mongoose.model('Meme', MemeSchema, 'memes')