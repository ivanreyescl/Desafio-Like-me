import express from 'express'
import cors from 'cors'
import 'dotenv/config'

import postRoutes from './routes/posts.routes.js'

const PORT = process.env.PORT || 3000

const app = express()

app.use(cors())
app.use(express.json())

app.use(postRoutes)

app.listen(PORT, () => {
    console.log(`🔥 Server on 🔥 http://localhost:${PORT}`)
})
