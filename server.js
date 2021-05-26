const express = require('express');
const bodyParser = require('body-parser');
const expressLayouts = require('express-ejs-layouts');
const app = express();
app.listen(3000);

app.set('view engine', 'ejs');
app.use(expressLayouts);
app.use(bodyParser.urlencoded());

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    res.render('pages/index')
});

app.get('/about', (req, res) => {
    res.render('pages/about');
});

app.get('/prices', (req, res) => {
    res.render('pages/prices');
});

app.get('/contact', (req, res) => {
    res.render('pages/contact')
  })

app.listen(3333);
console.log('3333 is the magic port');