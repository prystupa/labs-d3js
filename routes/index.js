
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Express' });
};

exports.flotr2 = function(req, res){
	res.render('flotr2', { title: 'Flotr2'});
}