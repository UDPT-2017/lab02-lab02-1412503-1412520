var User = require('../models/users.js')

var usersController = {
	index: function(req, res) {

	User.getAllUser(req.user.userid, function(err, user)
		{
			res.render('users', {
				user: req.user,
				unreadMail: 4,
				users: user,
				active_users: "active"
			});
		}
	);	
	
}
}

module.exports = usersController;
