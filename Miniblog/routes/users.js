var express = require("express");
var router = express.Router();
var mongoose = require('mongoose');
var User = require('../models/User');
var db = mongoose.connection;

// GET del listado de usuarios ordenados por fecha de creación
router.get("/", function (req, res, next) {
  User.find()
    .sort("-creationdate")
    .exec(function (err, users) {
      if (err) res.status(500).send(err);
      else res.status(200).json(users);
    });
});

// GET de un único usuario por su Id
router.get("/:id", function (req, res, next) {
  User.findById(req.params.id, function (err, userinfo) {
    if (err) res.status(500).send(err);
    else res.status(200).json(userinfo);
  });
});

// POST de un nuevo usuario
router.post("/", function (req, res, next) {
  User.create(req.body, function (err, userinfo) {
    if (err) res.status(500).send(err);
    else res.sendStatus(200);
  });
});

module.exports = router;
