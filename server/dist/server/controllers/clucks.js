"use strict";

var Cluck = require("../models");

module.exports = function (req, res) {
    var _req$body = req.body,
        image_url = _req$body.image_url,
        content = _req$body.content;

    return Cluck.create({
        content: content,
        image_url: image_url
    }).then(function (cluck) {
        return res.status(201).send(cluck);
    }).catch(function (error) {
        return res.status(400).send(error);
    });
};