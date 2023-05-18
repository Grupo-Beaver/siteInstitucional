var express = require("express");
var router = express.Router();

var maquinaController = require("../controllers/maquinaController");

router.get("/listarMaquina/:idSuporteTI", function (req, res) {
    maquinaController.listarMaquina(req, res);
});

router.get("/listarByIdMaquina/:idMaquina", function (req, res) {
    maquinaController.listarByIdMaquina(req, res);
});

router.delete("/deletarMaquina/:idMaquina", function (req, res) {
    maquinaController.deletar(req, res);
});

router.get("/nameMaquinaById/:idUsuario", function (req, res) {
    maquinaController.nameMaquinaById(req, res);
});

router.get("/listReporte/:idUsuario", function (req, res) {
    maquinaController.listReporte(req, res);
});

router.post("/reporteProblema", function (req, res) {
    maquinaController.reporteProblema(req, res);
});


module.exports = router;