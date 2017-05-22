var User = require('../models/users.js')

var friendsController = {
	index: function(req, res) {
	user = req.user;
	if (user == null)
	{
		res.redirect('/login');
	}else
	{
	var friends = User.getFriends(user.userid, function(err, friends){
		res.render('friendList', {
		user: user,
		friend: friends,
		active_friendList: "active"
	});
	})

}
}
}

module.exports = friendsController;
