var usersController = {
	index: function(req, res) {
	res.render('users', {
		user: {name: 'thikhin96', userID: 31, email: 'thikhin96@yahoo.com', avatar: 'images/User.png'},
		unreadMail: 4,
		active_users: "active"
	});
}
}

module.exports = usersController;