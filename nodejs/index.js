const express = require('express');
const app = express();

const PORT = 3000

app.get('/', (req, res) => {
  res.json({ 
    message: 'Node Js'
  })
})

app.listen(PORT, () => {
  console.log(`server listening on part ${PORT}`)
})