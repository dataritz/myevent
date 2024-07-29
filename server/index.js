const express = require('express')
const route = require('./route')
var cors = require('cors')
const app = express()
const port = 3000
app.use(cors())
var corsOptions = {
  origin: 'http://localhost:5173',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}
app.use(express.json()); // To handle Json request and response
app.use('/',route);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})