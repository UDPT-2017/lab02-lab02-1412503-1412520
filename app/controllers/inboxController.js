var inboxController = {
	index: function(req, res) {
	res.render('inbox', {
		user: {name: 'thikhin96', userID: 31, email: 'thikhin96@yahoo.com', avatar: 'images/User.png'},
		unreadMail: 4,
		active_inbox: "active"
	});
}};

module.exports = inboxController;