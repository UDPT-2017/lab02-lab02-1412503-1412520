var User = require('../models/users.js');

var signUpController = {
	index: function(req, res) {
	userInput = req.body;
	console.log(userInput);
	User.checkUser(req.body.em, function(err, info){
		console.log(info);
		if (info.length == 0)
		{
			User.addUser(userInput.password, userInput.em, userInput.name, userInput.tel , function(err, ress){
				if (err != null)
				{
					res.end('0');
				}
				else
					res.end('1');
			});
			
		}
		else
		{
			res.end('0');
		}
	});
}
}

module.exports = signUpController;
