var User = require('../models/users.js')


var logInController = {
	index: function(req, res) {
		
		
		res.render('logIn', {
			layout: false
		});
},
	submit: function(req, res){
		var userInput = req.body;
		var user = User.getUser(userInput.em, userInput.password, function(err, users){
			if (err === null)
			{
				if (users.length === 0)
				{
					console.log(users);
					res.end(JSON.stringify('hoho'));
				}
				else
				{
					console.log(users);
				}
			}
			else
			{
				console.log(err);
			}
		});		
	}
}

module.exports = logInController;
