"use strict";
exports.__esModule = true;
var express_1 = require("express");
var app = (0, express_1["default"])();
var port = 4000;
app.get('/', function (_req, res) {
    res.send('Hello World!');
});
app.listen(port, function () {
    // console.log(`app is running at http://localhost:${port}`)
});
