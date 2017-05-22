var Messages = require('../models/messages.js')

var inboxController = {
	index: function(req, res) {
	var inbox = Messages.getInbox(1, function(err, mes){
		console.log(mes);
		res.render('inbox', {
		user: {name: 'thikhin96', userID: 1, email: 'thikhin96@yahoo.com', avatar: 'images/User.png'},
		unreadMail: 4,
		messages: mes,
		active_messages: "active",
		active_inbox: "active",
		helpers: {
			isNotRead: function(readtime){
			if (readtime === "")
				return true;
			else
				return false;
		}
		}

		});

	});

	

}};


module.exports = inboxController;
