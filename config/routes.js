var bodyParser = require('body-parser');
var controllers = require('../app/controllers');

var urlencodedParser = bodyParser.urlencoded({ extended: false });

module.exports = function(app) {
	

	app.get('/', controllers.logIn.index);

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


	app.post('/new_mes', urlencodedParser, controllers.message.createMess);

	app.post('/addfriend', controllers.users.addfriend);
	app.post('/unfriend', controllers.users.unfriend);
};
