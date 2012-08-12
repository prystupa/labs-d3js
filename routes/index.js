
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Express' });
};

exports.flotr2 = function(req, res){
	res.render('flotr2', { title: 'Flotr2'});
};

exports.google = function(req, res){
	res.render('google-chart-tools', { title: 'Google Chart Tools'});
};

exports.dojo = function(req, res){
	res.render('dojo', {title: 'Dojo Charting'});
};