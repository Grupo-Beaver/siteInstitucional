var express = require("express");
var router = express.Router();

var dashboardController = require("../controllers/dashboardController");

router.get("/buscarMedidaCpu/:idMaquina", function (req, res) {
    dashboardController.buscarMedidaCpu(req, res);
});

router.get("/buscarUltimaMedidaCpu/:idMaquina", function (req, res) {
    dashboardController.buscarUltimaMedidaCpu(req, res);
});

router.get("/buscarMedidaJanela/:idMaquina", function (req, res) {
    dashboardController.buscarMedidaJanela(req, res);
});

router.get("/buscarMedidaRam/:idMaquina", function (req, res) {
    dashboardController.buscarMedidaRam(req, res);
});

router.get("/buscarMedidaDisco/:idMaquina", function (req, res) {
    dashboardController.buscarMedidaDisco(req, res);
});

router.get("/buscarUltimaMedidaDisco/:idMaquina", function (req, res) {
    dashboardController.buscarUltimaMedidaDisco(req, res);
});

module.exports = router;



















