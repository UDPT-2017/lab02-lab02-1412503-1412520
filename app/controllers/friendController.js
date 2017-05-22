var User = require('../models/users.js')

var friendsController = {
	index: function(req, res) {

	var friends = User.getFriends(1, function(err, friends){
		res.render('friendList', {
		user: {name: 'thikhin96', userID: req.user, email: 'thikhin96@yahoo.com', avatar: 'images/User.png'},
		unreadMail: 4,
		friend: friends,
		active_friendList: "active"
	});
	})


}
}

module.exports = friendsController;
