const express = require('express');
const exphbs = require("express-handlebars");
require("dotenv").config();

const router = require("../routers/routers");

const app = express();
const hbs = exphbs.create({});

app.engine('handlebars',hbs.engine);
app.set('view engine','handlebars')

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static('./src/public'));

app.use(router);

module.exports = app;