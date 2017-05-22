var User = require('../models/users.js')

var friendsController = {
	index: function(req, res) {
	user = req.user;
	if (user == null)
	{
		res.redirect('/login');
	}else
	{
	var friends = User.getFriends(1, function(err, friends){
		res.render('friendList', {
		user: {name: 'thikhin96', userID: 31, email: 'thikhin96@yahoo.com', avatar: 'images/User.png'},
		friend: friends,
		active_friendList: "active"
	});
	})

}
}
}

module.exports = friendsController;
