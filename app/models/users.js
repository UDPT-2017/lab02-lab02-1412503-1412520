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
	//loi o thang query nay thi fai k phai ba tai k co email trong database -_- naxy h muon noi ma co de noi dau co bat mic k vay @@
	//nha co nguoi ngu roi
	//ko bat duoc cho xiu them cai dong nay vao da @@
	getUser: function(email, password, callback){
		pool.query("SELECT * FROM USERS WHERE email = $1::text and pass = $2::text", [email, password], function(err, res){
			if (err != null){
				callback(err, null);
			}
			else {
				callback(null, res.rows);
			}
		});
	},
	getFriends: function(userID, callback){
		pool.query('SELECT name, avatar, email FROM FRIENDLIST, USERS WHERE USER1 = $1::int AND USER2 = USERS.USERID', [userID], function(err, res){
			if (err != null)
				callback(err, null);
			else
				callback(null, res.rows);
		});

	},
	findUser: function(userID, callback){
		pool.query("SELECT * FROM USERS WHERE userID = $1::int", [userID], function(err, res){
			if (err != null){
				callback(err, null);
			}
			else {
				callback(null, res.rows);
			}
		});
	},
	checkUser: function(email, callback){
		pool.query("SELECT * FROM USERS WHERE email = $1::text", [email], function(err, res){
			if (err != null){
				console.log(err);
				callback(err, null);
			}
			else {
				callback(null, res.rows);
			}
		});
	},
	addUser: function(pass, email, name, phone, callback){
		var avatar = "images/User.png";
		pool.query("INSERT INTO USERS VALUES(default, $1::text, $2::text, $3::text, $4::text, $5::text)", [pass, email, name, phone, avatar], 
			function(err, res){
			if (err != null){
				console.log(err);
				callback(err, null);
			}
			else {
				callback(null, res.rows);
			}
		});
	},
	addFriend: function(userID1, userID2, callback){
		console.log(userID2);
		pool.query("INSERT INTO FRIENDLIST VALUES($1::int, $2::int)", [userID1, userID2], pool.query("INSERT INTO FRIENDLIST VALUES($1::int, $2::int)", [userID2, userID1], 
			function(err,res){
				if (err != null){
					console.log(err);
					callback(err, null);
				}
				else {
					callback(null, res.rows);
			}
			
			}) );
	},
	unFriend: function(userID1, userID2, callback){
		
	}
}

module.exports = User;