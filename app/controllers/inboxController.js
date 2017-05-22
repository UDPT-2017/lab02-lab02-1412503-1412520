var Messages = require('../models/messages.js')

var inboxController = {
	index: function(req, res) {
	var user = req.user;
	if (user == null)
	{
		res.redirect('/login');
	}else
	{
		Messages.getInbox(user.userid, function(err, mes){
		res.render('inbox', {
		user: req.user,
		messages: mes,
		active_messages: "active",
		active_inbox: "active",

		});

	});
	}



}};


module.exports = inboxController;
