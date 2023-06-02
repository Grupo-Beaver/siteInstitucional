var express = require("express");
var router = express.Router();

var dashboardController = require("../controllers/dashboardController");

router.get("/buscarMedidaCpu/:idMaquina", function (req, res) {
    dashboardController.buscarMedidaCpu(req, res);
});

module.exports = router;