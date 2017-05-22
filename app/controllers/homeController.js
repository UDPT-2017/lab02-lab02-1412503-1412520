var homeController = {
	index: function(req, res) {

	user = req.user;
	if (user == null)
	{
		res.redirect('/login');
	}else
	{
		res.render('home', {
		user: req.user,
		active_home: "active",
	});
	}
	}

}

module.exports = homeController;
