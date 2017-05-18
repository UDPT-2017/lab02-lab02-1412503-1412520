var aboutController = {
  index: function(req, res){
    res.render('about', {
      user: {name: 'thikhin96', userID: 31, email: 'thikhin96@yahoo.com', avatar: 'images/User.png'},
      title: 'About',
      active_about: "active"
    });
  }
};

module.exports = aboutController;
