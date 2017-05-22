var messageController = {
  new_mes: function(req, res){
    res.render('new_mes', {
      user: {name: 'thikhin96', userID: 31, email: 'thikhin96@yahoo.com', avatar: 'images/User.png'},
      title: 'New Message',
      active_messages: "active",
      active_new_mes: "active",
    });
  },

  sent: function(req, res){
    res.render('sent', {
      user: {name: 'thikhin96', userID: 31, email: 'thikhin96@yahoo.com', avatar: 'images/User.png'},
      title: 'Sent',
      active_messages: "active",
      active_sent: "active"
    });
  }
};

module.exports = messageController;
