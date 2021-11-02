const express = require('express')
const app = express()
const port = 3000

const path = require('path')
app.use(express.static('static'))

app.listen(port, () => {
  console.log(`The joy-app listening at http://localhost:${port}`)
})

