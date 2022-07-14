// Lets do this
const express = require('express')
const app = express()
const path = require('path')
const port = process.env.PORT || 3000

// Home endpoint
app.use(express.static(path.join(__dirname, '/public')))
app.get('/', (req, res) => {
  const index = path.join(__dirname, 'views', 'index.html')
  res.sendFile(index)
})

// About endpoint
app.use(express.static(path.join(__dirname, '/public')))
app.get('/About', (req, res) => {
  const index = path.join(__dirname, 'views', 'About.html')
  res.sendFile(index)
})

app.listen(port, () => {
  console.log('Express server running on port', port)
})
