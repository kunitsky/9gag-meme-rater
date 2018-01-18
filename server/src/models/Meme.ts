import * as mongoose from 'mongoose'
const Schema = mongoose.Schema
import { MemeType } from './MemeType'

const MemeSchema = new Schema({
  _id: Schema.Types.ObjectId,
  url: String,
  rating: {
    type: Number,
    default: 0
  },
  type: MemeType
})

export default mongoose.model('Meme', MemeSchema, 'meme')
