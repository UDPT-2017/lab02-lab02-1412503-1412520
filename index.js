var express = require('express');
var app = express();
var exphbs = require('express-handlebars');
var path = require('path');
var bodyParser = require('body-parser')
var controllers = require('./app/controllers');
var bodyParser = require('body-parser');

var urlencodedParser = bodyParser.urlencoded({ extended: false })
// app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static('public'));
app.use('/components', express.static('bower_components'));
app.use(bodyParser.urlencoded({
	extended: true
}));

app.engine('hbs', exphbs({
	extname: '.hbs',
	defaultLayout: 'application',
	layoutsDir: path.resolve('app/views/layouts'),
	partialsDir: path.resolve('app/views/partials'),
	helpers: {
		showMessage: function(message, type){
			if (type === 1)
			{

			}
			else
			{
				return 'swal({ title: "Oops!!",text: ${message},type: "error", confirmButtonText: "Try again", confirmButtonColor: "#DD6B55"});';
			}
		}
	}}));
app.set('view engine', 'hbs');
//vì sẽ không tìm đc file views ngay cùng thư mục, nên phải cấu hình lại địa chỉ của file views để render
app.set('views', path.resolve('./app/views'));

app.get('/home', controllers.home.index);

app.get('/inbox', controllers.inbox.index);

app.get('/login', controllers.logIn.index);

app.get('/friends', controllers.friend.index);

app.get('/users', controllers.users.index);

app.post('/logIn', controllers.logIn.submit);

app.post('/signUp', controllers.signUp.index);

app.get('/about', controllers.about.index);

app.get('/new_mes', controllers.message.new_mes);

app.get('/sent', controllers.message.sent);

app.post('/new_mes', urlencodedParser, controllers.message.createMess);

var port = 3000;
app.listen(port, function(){
	console.log('Connected!!');
});
