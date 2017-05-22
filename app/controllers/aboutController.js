var aboutController = {
  index: function(req, res){
    res.render('about', {
      user: {name: req.user.name, userID: req.user.userID, email: req.user.email, avatar: req.user.avatar},
      title: 'About',
      active_about: "active"
    });
  }
};

module.exports = aboutController;
