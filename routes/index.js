var express = require('express');
var passport = require('passport');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	console.log("INDEX LOADING");
	res.render('index', { title: 'Express', flashMessage:req.flash('message') });
});

/* LOGIN POST */
router.post('/login', passport.authenticate('login', {
	successRedirect: '/home',
	failureRedirect: '/',
	failureFlash : true 
}));

/* GET Registration Page */
router.get('/register', function(req, res){
	console.log('REGISTER LOADING');
	res.render('register',{ flashMessage: req.flash('message') });
});

/* Handle Registration POST */
router.post('/register', passport.authenticate('register', {
	successRedirect: '/home',
	failureRedirect: '/register',
	failureFlash : true 
}));

/* GET home */

router.get('/home', function(req, res, next) {
	console.log("HOME LOADING");
	res.render('home', { title: 'Express', flashMessage:req.flash('message') });
});

module.exports = router;
