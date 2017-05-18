var express = require('express');
var app = express();
var exphbs = require('express-handlebars');
var path = require('path');
var controllers = require('./app/controllers');

app.use(express.static('public'));
app.use('/components', express.static('bower_components'));

app.engine('hbs', exphbs({
	extname: '.hbs',
	defaultLayout: 'application',
	layoutsDir: path.resolve('app/views/layouts'),
    partialsDir: path.resolve('app/views/partials')}));
app.set('view engine', 'hbs');
//vì sẽ không tìm đc file views ngay cùng thư mục, nên phải cấu hình lại địa chỉ của file views để render
app.set('views', path.resolve('./app/views'));

app.get('/home', controllers.home.index);

app.get('/inbox', controllers.inbox.index);

app.get('login', controllers.logIn.index);

app.get('/friends', controllers.friend.index);


app.get('/users', controllers.users.index);


var port = 3000;

app.listen(port, function(){
	console.log('Connected!!');
});

