var homeController = require('./homeController');
var friendController = require('./friendController');
var inboxController = require('./inboxController');
var logInController = require('./logInController');
var usersController = require('./usersController');
var signUpController = require('./signUpController');
var aboutController = require('./aboutController');
var messageController = require('./messageController');

module.exports = {
	home: homeController,
	friend: friendController,
	inbox: inboxController,
	logIn: logInController,
	users: usersController,
	signUp: signUpController,
  about: aboutController,
  message: messageController
}
