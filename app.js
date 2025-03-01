const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminroute = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const errorController = require('./controller/404');
const contactUsRoute=require('./routes/contactUs')
const successRoute=require('./routes/success')
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin',adminroute);
app.use(shopRoutes);
app.use(contactUsRoute)
app.use(successRoute)
app.use(errorController.error404);

app.listen(4500);
