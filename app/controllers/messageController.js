var message = require('../models/message');

var userID = 1;

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
    var check = null;
    message.getAllFriend(function(err, allFr){
      for(var i=0;i<allFr.length;i++){
        if(allFr[i].email === req.body.recipent){
          check = allFr[i].email;
          break;
        }
      }
      if(check!==null){
        message.createMess(function(err){
          if(err){
            console.log(err);
            message.getAllFriend(function(err, allFriend){
              res.render('new_mes', {
                user: {name: 'thikhin96', userID: 31, email: 'thikhin96@yahoo.com', avatar: 'images/User.png'},
                title: 'New Message',
                message: 'Your message is not sent. Try again!!',
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
                message: 'Your message is sent.',
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
            message: 'Your message is not sent. The recipent is not exit or not your friend. Try again!!',
            unreadMail: 4,
            recipent: allFriend,
            active_messages: "active",
            active_new_mes: "active",
          });
        },userID)
      }
    },userID)
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
