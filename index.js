var express = require('express');
var app = express();
var exphbs = require('express-handlebars');
var path = require('path');

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

app.get('/home', function(req, res) {
	res.render('home', {
		user: {name: 'thikhin96', userID: 31},
		unreadMail: 4
	});
})

app.get('/inbox', function(req, res) {
	res.render('inbox', {
		user: {name: 'thikhin96', userID: 31, email: 'thikhin96@yahoo.com'},
		unreadMail: 4
	});
})


var port = 3000;

app.listen(port, function(){
	console.log('Connected!!');
});

