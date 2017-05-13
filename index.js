var express = require('express');
var app = express();
var exphbs = require('express-handlebars');
var path = require('path');

app.use(express.static('public'));
app.use('/components', express.static('bower_components'));

app.engine('hbs', exphbs({}));
app.set('view engine', 'hbs');
//vì sẽ không tìm đc file views ngay cùng thư mục, nên phải cấu hình lại địa chỉ của file views để render
app.set('views', path.resolve('.app/views'));

var port = 3000;

app.listen(port, function(){
	console.log('Connected!!');
});