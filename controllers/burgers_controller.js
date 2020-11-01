var express = require("express");

var router = express.Router();

var burger = require("../models/burger.js");

router.get("/", function(req, res) {
    burger.all(function(data) {
      var bObject = {
        burgers: data
      };
      console.log(bObject);
      res.render("index", bObject);
    });
  });

  router.post("/api/burgers", function(req, res) {
    burger.insertOne(
      req.body.burger_name
    , function(result) {
      
      res.json(result);
    });
  });




module.exports = router;