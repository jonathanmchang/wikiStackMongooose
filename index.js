const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const swig = require('swig');

const app = express();

// Middleware
app.use(morgan('dev'));
app.use(express.static, (__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.set('views', __dirname + '/views');
app.set('view engine', 'html');
app.engine('html', swig.renderFile());
swig.setDefaults({ cache: false });
