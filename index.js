var express = require('express');
var app = express();

require('./config')(app);



var port = process.env.PORT || 3000;
app.listen(port, function(){
	console.log('Connected!!');
});
