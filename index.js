var express = require('express');
var app = express();
var exphbs = require('express-handlebars');
var path = require('path');
var controllers = require('./app/controllers');
var bodyParser = require('body-parser');
var session = require('express-session');
var passport = require('passport');

app.use(express.static('public'));
app.use('/components', express.static('bower_components'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: true
}));

app.engine('hbs', exphbs({
	extname: '.hbs',
	defaultLayout: 'application',
	layoutsDir: path.resolve('app/views/layouts'),
	partialsDir: path.resolve('app/views/partials'),
	}));

app.use(session({
	secret : "secret",
  	saveUninitialized: true,
 	resave: true
}));
app.use(passport.initialize());
app.use(passport.session());


app.set('view engine', 'hbs');
//vì sẽ không tìm đc file views ngay cùng thư mục, nên phải cấu hình lại địa chỉ của file views để render
app.set('views', path.resolve('./app/views'));

app.get('/home', controllers.home.index);

app.get('/inbox', controllers.inbox.index);

app.get('/login', controllers.logIn.index);

app.get('/friends', controllers.friend.index);

app.get('/users', controllers.users.index);

app.post('/logIn', controllers.logIn.authen, controllers.logIn.submit);

app.post('/logOut', controllers.logIn.logOut);

app.post('/signUp', controllers.signUp.index);

app.get('/about', controllers.about.index);
app.get('/new_mes', controllers.message.new_mes);
app.get('/sent', controllers.message.sent);

//add.get('/addfriend', controllers.users.addfriend);



var port = 3000;
app.listen(port, function(){
	console.log('Connected!!');
});
