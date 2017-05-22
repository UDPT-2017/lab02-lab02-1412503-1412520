var pg = require('pg');

var config = {
  database: 'messageDB',
  user: 'postgres',
  password: '31101996',
  port: 5432,
  max: 10, //set pool max size to 20
  idleTimeoutMillis: 1000 //close idle clients after 1 second
};

var pool = new pg.Pool(config);

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