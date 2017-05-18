var homeController = require('./homeController');
var friendController = require('./friendController');
var inboxController = require('./inboxController');
var logInController = require('./logInController');
var usersController = require('./usersController');
var aboutController = require('./aboutController');
var messageController = require('./messageController');

module.exports = {
	home: homeController,
	friend: friendController,
	inbox: inboxController,
	logIn: logInController,
	users: usersController,
  about: aboutController,
  message: messageController,
}
