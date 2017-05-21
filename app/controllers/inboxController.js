var Messages = require('../models/messages.js')

var inboxController = {
	index: function(req, res) {
	Messages.getInbox(req.user.userid, function(err, mes){
		console.log('here');
		console.log(req.user);
		res.render('inbox', {
		user: req.user,
		unreadMail: 4,
		messages: mes,
		active_messages: "active",
		active_inbox: "active",
		});

	});

	

}};


module.exports = inboxController;
