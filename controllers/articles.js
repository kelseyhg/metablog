var express = require("express");
var router = express.Router();

router.get("/", function(req, res){
	res.send("Hello World: article edition");
});

module.exports = router;