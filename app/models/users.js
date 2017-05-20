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

var User = {
	getAllUser: function(userID, callback){
		pool.query('select * from (select * from users u full outer join friendlist f on f.user2 = u.userid and f.user1 = $1::int) ulist where ulist.userid <> $1::int', [userID], function(err, res){
			if (err != null)
				callback(err, null);
			else
				callback(null, res.rows);
		});
	},
	getUser: function(email, password, callback){
		pool.query('SELECT * FROM USERS WHERE email = $1::text and pass = $2::text', [email, password], function(err, res){
			if (err != null)
				callback(err, null);
			else
				callback(null, res.rows);
		});
	},
	getFriends: function(userID, callback){
		pool.query('SELECT name, avatar, email FROM FRIENDLIST, USERS WHERE USER1 = $1::int AND USER2 = USERS.USERID', [userID], function(err, res){
			if (err != null)
				callback(err, null);
			else
				callback(null, res.rows);
		});

	}
}

module.exports = User;