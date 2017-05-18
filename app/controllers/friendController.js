var friendsController = {
	index: function(req, res) {
	res.render('friendList', {
		user: {name: 'thikhin96', userID: 31, email: 'thikhin96@yahoo.com', avatar: 'images/User.png'},
		unreadMail: 4,
		active_friendList: "active"
	});
}
}

module.exports = friendsController;
