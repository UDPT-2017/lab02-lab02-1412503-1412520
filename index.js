var express = require('express');
var app = express();
var exphbs = require('express-handlebars');

app.use(express.static('public'));
app.use('/components', express.static('bower_components'));

app.engine('hbs', exphbs({}));
app.set('view engine', 'hbs');

var port = 3000;

app.listen(port, function(){
	console.log('Connected!!');
});