var homeController = {
	index: function(req, res) {
	res.render('home', {
		user: {name: req.user.name, userID: req.user.userID, email: req.user.email, avatar: req.user.avatar},
		unreadMail: 4,
		active_home: "active",
	});
}
}

module.exports = homeController;
