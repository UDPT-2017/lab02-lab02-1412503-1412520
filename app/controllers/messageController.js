var message = require('../models/message');

var userID = 1;
var check_message = function(email){
  // message.getAllFriend(function(err, allFriend){
  //   console.log(email);
  //   console.log(allFriend);
  //   for(var i=0;i<allFriend.length;i++){
  //     if(allFriend[i].email === email){
  //       console.log(allFriend[i].email);
  //       return true;
  //     }
  //   }
  //   return false;
  // },userID)
  return true;
}


var messageController = {
  new_mes: function(req, res){
    message.getAllFriend(function(err, allFriend){
      res.render('new_mes', {
        user: {name: 'thikhin96', userID: 31, email: 'thikhin96@yahoo.com', avatar: 'images/User.png'},
        title: 'New Message',
        message: 'Please fill details to send a new message',
        unreadMail: 4,
        recipent: allFriend,
        active_messages: "active",
        active_new_mes: "active",
      });
    },userID)
  },
  createMess: function(req, res){
    // console.log(req.body);
    console.log("kết quả: " + check_message(req.body.recipent));
    if(check_message(req.body.recipent)){
      message.createMess(function(err){
        if(err){
          console.log(err);
          message.getAllFriend(function(err, allFriend){
            res.render('new_mes', {
              user: {name: 'thikhin96', userID: 31, email: 'thikhin96@yahoo.com', avatar: 'images/User.png'},
              title: 'New Message',
              message: 'Your email is not sent. Try again!!',
              unreadMail: 4,
              recipent: allFriend,
              active_messages: "active",
              active_new_mes: "active",
            });
          },userID)
        }
        else{
          message.getAllFriend(function(err, allFriend){
            res.render('new_mes', {
              user: {name: 'thikhin96', userID: 31, email: 'thikhin96@yahoo.com', avatar: 'images/User.png'},
              title: 'New Message',
              message: 'Your email is sent.',
              unreadMail: 4,
              recipent: allFriend,
              active_messages: "active",
              active_new_mes: "active",
            });
          },userID)
        }
      },{ content: req.body.content,
          sender: userID,
          recipent: req.body.recipent
        } )
    }
    else{
      message.getAllFriend(function(err, allFriend){
        res.render('new_mes', {
          user: {name: 'thikhin96', userID: 31, email: 'thikhin96@yahoo.com', avatar: 'images/User.png'},
          title: 'New Message',
          message: 'Your email is not sent. The recipent is not exit or not your friend. Try again!!',
          unreadMail: 4,
          recipent: allFriend,
          active_messages: "active",
          active_new_mes: "active",
        });
      },userID)
    }
  },
  sent: function(req, res){
    message.findAllMess(function(err, sent_message){
      res.render('sent', {
        user: {name: 'thikhin96', userID: 31, email: 'thikhin96@yahoo.com', avatar: 'images/User.png'},
        title: 'Sent',
        unreadMail: 4,
        sent_message: sent_message,
        active_messages: "active",
        active_sent: "active"
      });
    }, userID)
  }

};

module.exports = messageController;
