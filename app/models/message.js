var pool = require('./connect')
var message = {
  findAllMess: function(callback, userID){
    setTimeout(function(){
      pool.query("select content, email, senttime, readtime from message, users where recipient = userID and sender = " + userID, function(err, result){
        callback(err, result.rows);
      });
    }, 5000);
  },
  createMess: function(callback, new_mes){
    pool.query("select addMess ($1, $2, $3)",
    [new_mes.content, new_mes.sender, new_mes.recipent],
        function(err, result){
          callback(err);
        });
  },
  getAllFriend: function(callback, userID){
    setTimeout(function(){
      pool.query("select email from users where userID in (select user2 from friendlist where user1 = "+ userID + ") or userID in (select user1 from friendlist where user2 = " + userID + ")", function(err, result){
        callback(err, result.rows);
      });
    }, 5000);
  }
}

module.exports = message;
