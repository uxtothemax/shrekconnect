const express = require('express')
const app = express()
const port = 8090;

//ipv express().get()
app.get('/', home);
app.get('/about', about)

function home(req, res) {
  res.send('Hello World!')
}

function about(req, res) {
  res.send('About sectieeee')
}

app.listen(port, function() {
  console.log('Server is running, awesome!')
})
