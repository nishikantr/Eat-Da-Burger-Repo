var express = require('express');
var router = express.Router();
var burger = require('../models/burger.js');

router.get('/', function(req,res) {
	burger.all(function(data){
		res.render('index', {data : data});
	});
});

module.exports = router;
