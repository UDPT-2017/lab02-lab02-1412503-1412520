var logInController = {
	index: function(req, res) {
	res.render('logIn', {
		layout: false
	});
}
}

module.exports = logInController;
