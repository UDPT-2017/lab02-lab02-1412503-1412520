var homeController = require('./app/controllers/homeController');
var friendController = require('./app/controllers/friendController');
var inboxController = require('./app/controllers/inboxController');
var logInController = require('./app/controllers/logInController');
var usersController = require('./app/controllers/usersController');

module.exports = {
	home: homeController;
	friend: friendController;
	inbox: inboxController;
	logIn: logInController;
	users: usersController;
}
