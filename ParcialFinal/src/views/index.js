const express = require('express');
const app = express();
const morgan = require('morgan');
const path =require('path');
const exphbs= require('express-handlebars');
const methodoverride= require('method-override');
const session = require('express-session');


//initializations
require('./database');

//setting
app.set('port', process.env.PORT||3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', exphbs({
    defaultLayout:'main',
    layoutsDir:path.join(app.get('views'), 'layouts'),
    partialsDir:path.join(app.get('views'), 'partials'),
    extname:'.hbs'
}))
app.set('view engine', '.hbs');

//midlewarwes
app.use(express.urlencoded({extended:false}));
app.use(methodoverride('method'));
app.use(session({
    secret: 'secreta',
    resave:true,
    saveUninitialized:true
}))

//globals variables

//routes
app.use(require('./routes/index2'));
app.use(require('./routes/notes'));
app.use(require('./routes/users'));   

//static files
app.use(express.static(path.join(__dirname, 'public')));

//starting the server
app.listen(app.get('port'), () =>{
    console.log(`Server on port ${app.get('port')}`);
});