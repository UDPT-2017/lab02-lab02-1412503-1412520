var User = require('../models/users.js')

var usersController = {
	index: function(req, res) {
	var user = req.user;
	if (user == null)
	{
		res.redirect('/login');
	}else
	{
		User.getAllUser(req.user.userid, function(err, users)
		{
			res.render('users', {
				user: req.user,
				users: users,
				active_users: "active"
			});
		}

		);
	}
		
	
},
	addfriend: function(req, res){
			console.log(req.body.friendID);
			User.addFriend(req.user.userid, req.body.friendID, function(err, ress){
				if (err !== null)
				{
					res.end('0');
				}
				else
				{
					res.end('1');
				}
			});
			
	},
	unfriend: function(req, res){
		console.log(req.body.friendID);
		User.unFriend(req.user.userid, req.body.friendID, function(err, ress){
				if (err !== null)
				{
					res.end('0');
				}
				else
				{
					res.end('1');
				}
			});
	}
}

module.exports = usersController;
