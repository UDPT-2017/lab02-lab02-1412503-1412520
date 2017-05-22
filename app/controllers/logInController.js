var User = require('../models/users.js');
var LocalStrategy = require('passport-local').Strategy;
var passport = require('passport');

passport.serializeUser(function(user, done) {
    done(null, user.userid);
});

passport.deserializeUser(function(id, done) {
    User.findUser(id, function(err, user){
    	if (err !== null)
    	{
    		console.log(err);
    	}
    	else
    	{
    		done(null, user[0]);
    	}
    });
});

passport.use('local-login', new LocalStrategy(
	{
		usernameField : 'em',
        passwordField : 'password',
        passReqToCallback : true
	},
    function (req, email, password, done) {

		User.getUser(email, password, function(err, users){
                if (err) { 
                	console.log(err);
                	return done(err); }
                if(users.length == 0) {
                	
                    return done(null, false, { message: 'Incorrect username and password' });
                }
                console.log('2');
                console.log(users[0]);
                return done(null, users[0]);

            });
    }
))



var logInController = {
	index: function(req, res) {

		res.render('logIn', {
			layout: false
		});
},

	authen: passport.authenticate('local-login'),
	submit: function(req, res){
        console.log(req.body);
		if (req.user != null)
        {
            req.app.locals.user = req.user;
			res.end('/inbox');
        }
		else
			res.end('fail');
	},
	logOut: function(req, res){
        console.log(req.body);
        if (req.body.logout == 1)
        {
            req.logout();
            console.log(req.user);
            res.end('/logIn');
        }
	}
}

module.exports = logInController;
