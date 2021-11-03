const express = require('express')
const app = express()
const port = 3000

const path = require('path')
app.use(express.static('static'))

app.get('/', (req,res) => {
  res.sendFile(path.resolve(__dirname, 'index.html'))
})

app.get('*', (req,res) => {
  res.status(404).send('404 resource not found')
})

app.listen(port, () => {
  console.log(`Mapstat listening at http://localhost:${port}`)
})

