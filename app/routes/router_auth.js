var router = require('express').Router();

router.route('/login')
	.get(function(req, res){
		res.json({"url":"login", "method":"get"});
	})
	.post(function(req, res){
		res.json({"url":"login", "method":"post"});
	});

router.route('/logout')
	.get(function(req, res){
		res.json({"url":"login", "method":"get"});
	})


exports.Master = router;