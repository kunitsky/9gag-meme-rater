import * as mongoose from 'mongoose'
const Schema = mongoose.Schema

const MemeSchema = new Schema({
  _id: Schema.Types.ObjectId,
  url: String,
  rating: {
    type: Number,
    default: 0
  },
  type: {
    type: String,
    enum: ['Video', 'Photo', 'Animated']
  }
})

export default mongoose.model('Meme', MemeSchema, 'meme')
