const express = require('express')
const app = express()
const port = 3000

const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://heom:1231@cluster0.hftcx.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
    useNewUrlParser : true, useCreateIndex : true, useUnifiedTopology : true, useFindAndModify : false
}).then(() => console.log('MongoDB connected... '))
    .catch(err => console.log(err)) 

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})   