import * as dotenv from 'dotenv'
import * as mongoose from 'mongoose'
import server from './server'
dotenv.config()

// database
mongoose.connect(process.env.MONGODB_URI)
const db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', () => console.log('Connected to database successfully.'))

// server
const port = parseInt(process.env.PORT) || 3001
server.listen(port, () => console.log(`Server is running on port: ${port}`))
