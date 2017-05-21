var homeController = {
	index: function(req, res) {
	res.render('home', {
		user: req.user,
		unreadMail: 4,
		active_home: "active",
	});
}
}

module.exports = homeController;
