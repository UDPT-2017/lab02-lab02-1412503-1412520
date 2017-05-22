var User = require('../models/users.js')

var usersController = {
	index: function(req, res) {

	User.getAllUser(1, function(err, user)
		{
			res.render('users', {
				user: {name: 'thikhin96', userID: 31, email: 'thikhin96@yahoo.com', avatar: 'images/User.png'},
				unreadMail: 4,
				users: user,
				active_users: "active"
			});
		}
	);	
	
}
}

module.exports = usersController;
