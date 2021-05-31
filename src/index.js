const path = require('path');
const express = require('express');
const morgan = require('morgan');
const handlebars  = require('express-handlebars');
const port = 3000;

const app = express();

const route = require('./routes');

app.use(express.static(path.join(__dirname, 'public')));

//HTTP logger
// app.use(morgan('combined'));

//Template engine
app.engine('hbs', handlebars({
    extname: '.hbs',
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));

//Route init
route(app);

app.listen(port, () => console.log('Example app'))