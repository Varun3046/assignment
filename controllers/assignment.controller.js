
var express = require('express');
var router = express.Router();
var assignmentService = require('../services/assignment.service');

// routes
router.post('/apione', apione);
// router.post('/apitwo',apitwo);
// router.post('/rechargeDB',rechargeDB);

module.exports = router;



function apione(req, res) {

	
	assignmentService.apione()
	.then(function (doc) {
		res.sendStatus(200);
	})
	.catch(function (err) {
		res.status(400).send(err);
	});
}
// function listUser(req, res) {

//     console.log(req.body)
// 	userService.listUser(req.body)
// 	.then(function (doc) {
// 		res.send(doc);
// 	})
// 	.catch(function (err) {
// 		res.status(400).send(err);
// 	});
// }
// function rechargeDB()
// {
//     console.log(req.body)
// 	userService.rechargeDB(req.body)
// 	.then(function (doc) {
// 		res.send(doc);
// 	})
// 	.catch(function (err) {
// 		res.status(400).send(err);
// 	});

// }
