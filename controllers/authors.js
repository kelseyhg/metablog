var express = require("express");
var router = express.Router();
var db = require("../models");

router.get("/", function(req, res){
	db.author.findAll().then(function(allAuthors){	
	res.render("authors/index", {authors: allAuthors});
	}).catch(function(err){
		console.log("danger will robinson:", err);
		res.send("No.");
	})
});

router.get("/new", function(req, res){
	res.render("authors/new");
});

router.get("/:id", function(req, res) {
	db.author.findOne({
		where: {id: req.params.id},
		include: [db.article]
	}).then(function(foundAuthor){
		res.render("authors/show", {author: foundAuthor});
	}).catch(function(err){
		res.send("not a thing")
	})
});

router.post("/", function(req, res) {
	db.author.create(req.body).then(function(createdAuthor){
		res.redirect('/authors/' + createdAuthor.id);
	}).catch(function(err){
		console.log("you done goofed:", err);
		res.send("whaaat");
	});
});

module.exports = router;