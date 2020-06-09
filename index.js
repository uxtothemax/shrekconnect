const express = require('express')
const app = express()
const port = 8090;

//ipv express().get()
app.get('/', home);
app.get('/about', about)
app.set('views', path.join(__dirname, 'view'))

function home(req, res) {
  res.send('Hello World!')
}

function about(req, res) {
  res.send('About sectieeee')
}

app.listen(port, function() {
  console.log('Server is running, awesome!')
})

//testing ejs
// let ejs = require('ejs');
// let people = ['geddy', 'neil', 'alex']
// let html = ejs.render('<%= people.join(","); %>'), people: people})


//testing handlebars
const Handlebars = require("handlebars")
const myInfo = "<p> My name is {{name}} and I live at {{street}} in {{city}}, {{state}}<p>"
const template = Handlebars.compile(myInfo)
const data = template({
  name: "ux",
  street: "123 Main",
  city: "New York",
  state: "Alabama"
})

document.getElementById("myInfo").innerHTML += data;

// console.log(template({ name: "ux"}))
//
// Handlebars.registerHelper('loud', function(string) {
//   return string.toUpperCase()
// })
