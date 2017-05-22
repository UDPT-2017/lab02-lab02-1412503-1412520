

module.exports = function(app){
	require('./routes')(app);
	require('./views')(app);
	require('./middlewares')(app);

}
