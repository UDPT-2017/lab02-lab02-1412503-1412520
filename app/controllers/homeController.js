var homeController = {
	index: function(req, res) {
	res.render('home', {
		user: {name: 'thikhin96', userID: 31, avatar: 'images/User.png'},
		unreadMail: 4
	});
}
}

module.exports = homeController;