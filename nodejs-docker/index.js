const express = require('express')
const mongoose = require('mongoose')
const { MONGO_USER, MONGO_PASSWORD, MONGO_IP, MONGO_PORT } = require('./config/config')
const app = express()
const postRouter = require('./routes/postRoutes')

const PORT = process.env.PORT || 3000

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

mongoose.connect(`mongodb://${MONGO_USER}:${MONGO_PASSWORD}@${MONGO_IP}:${MONGO_PORT}/shop?authSource=admin`)
  .then(() => console.log("successfully connected"))
  .catch((err) => console.log("Something went wrong", err))



app.use('/api/v1/posts', postRouter)


app.get('/', (req, res) => {
  res.send('<h2>hello world test test </h2>')
})

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`)
})