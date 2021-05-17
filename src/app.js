require('dotenv').config({path:__dirname +'/.env'});
/* const dotenv = require('dotenv'); */
const express = require('express');
const path = require('path');
const app = express();
const hbs = require('hbs');
const PORT = process.env.PORT || 3000;

/* // .env 
dotenv.config({ path: '../.env' }); */

// static path
const staticPath = path.join(__dirname, '../public');
const templetePath = path.join(__dirname, '../templates/views');
const partialPath = path.join(__dirname, '../templates/partial');

//use hbs
app.set('view engine', 'hbs');
// change views location
app.set('views' , templetePath);
// add partial tempaltes
hbs.registerPartials(partialPath);
// images css
app.use(express.static(staticPath));


// routing
const handlers =  require('./auth');
const { static } = require('express');
app.use('/',handlers);


app.listen(PORT , ()=>{
    console.log(`${PORT} Running`)
})