var pool = require('./connect');

var Message = {
	getInbox: function(userID, callback){
		pool.query('select content, email as sender, senttime, readtime from message, users where recipient = $1::int and users.userid = message.sender', [userID], function(err, res){
			if (err != null)
				callback(err, null);
			else
				callback(null, res.rows);
		});
	},
}

module.exports = Message;