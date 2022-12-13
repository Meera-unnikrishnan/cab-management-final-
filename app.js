const express = require('express');
const parser = require('body-parser');
// const movieRoutes = require('./routes/movieRoutes');
const accountRoutes = require('./routes/accountsRoutes');
const cabRoutes = require('./routes/cabRoutes');
const adminRoutes =require('./routes/adminRoutes');
const driverRoutes = require('./routes/driverRoutes');
// const userRoutes = require('./routes/userRoutes')
const path = require('path');
const {engine} = require('express-handlebars');
// const hbs = require("hbs");
const app = express();

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views','views')


app.use("/", parser.urlencoded({extended: true}));
app.use("/static", express.static(path.join(__dirname, 'static')));
// app.use(movieRoutes);
app.use("/",accountRoutes);
app.use("/",adminRoutes);
app.use("/",cabRoutes);
app.use("/",driverRoutes);
// app.use("/",userRoutes);


app.listen(80);