const express = require('express')
const app = express()
const port = 3003

//ROUTES
app.get('/', (req, res) => {
  res.send('Hello  PokeWorld!')
})
app.get('/zuikis', (req, res) => {
  res.send('Hello zuikis!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
