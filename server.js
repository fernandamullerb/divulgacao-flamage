const express = require('express');
const bodyParser = require('body-parser');
const expressLayouts = require('express-ejs-layouts');
const app = express();

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

app.get('/contact', (req, res) => {
    res.render('pages/contact')
})

app.get('/prices', (req, res) => {
    res.render('pages/prices');
});

app.post('/prices', (req, res) => {

    var feature = req.body.feature 

        if (feature = true) {
            const totalPrice = Math.ceil(totalPrice + featurePrice)
        }

        res.render('pages/prices', totalPrice);
});


app.listen(3333);
console.log('3333 is the magic port');