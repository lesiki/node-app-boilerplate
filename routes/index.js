var express = require('express');
var passport = require('passport');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	res.render('index', { title: 'Express', flashMessage:req.flash('message') });
});

/* LOGIN post */
router.post('/login', passport.authenticate('login', {
	successRedirect: '/home',
	failureRedirect: '/',
	failureFlash : true 
}));

/* GET Registration Page */
router.get('/register', function(req, res){
	res.render('register',{ flashMessage: req.flash('message') });
});

/* Handle Registration POST */
router.post('/register', passport.authenticate('signup', {
	successRedirect: '/home',
	failureRedirect: '/register',
	failureFlash : true 
}));

/ * GET home */
router.get('/home', function(req, res, next) {
	res.render('home', { title: 'Express', flashMessage:req.flash('message') });
});

module.exports = router;
