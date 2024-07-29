const express = require('express')
const route = require('./route')
const app = express()
const port = 3000
app.use(express.json()); // To handle Json request and response
app.use('/',route);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})