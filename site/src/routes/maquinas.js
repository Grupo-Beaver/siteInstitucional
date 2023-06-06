var express = require("express");
var router = express.Router();

var maquinaController = require("../controllers/maquinaController");

router.get("/listarMaquina/:idSuporteTI", function (req, res) {
    maquinaController.listarMaquina(req, res);
});

router.get("/listarByIdMaquina/:idMaquina", function (req, res) {
    maquinaController.listarByIdMaquina(req, res);
});

router.get("/listMaqCadastra", function (req, res) {
    maquinaController.listMaqCadastra(req, res);
});

router.put("/cadastroFinalizado", function (req, res) {
    maquinaController.cadastroFinalizado(req, res);
});

router.put("/atualizarPadronizacao/:idPadronizacaoMaquina", function (req, res) {
    maquinaController.atualizarPadronizacao(req, res);
});

router.delete("/deletarMaquina/:idMaquina", function (req, res) {
    maquinaController.deletar(req, res);
});

router.get("/listReporteById/:idMaquina", function (req, res) {
    maquinaController.listReporteById(req, res);
});


router.get("/nameMaquinaById/:idUsuario", function (req, res) {
    maquinaController.nameMaquinaById(req, res);
});

router.get("/listReporte/:idUsuario", function (req, res) {
    maquinaController.listReporte(req, res);
});

router.get("/contReportProb/:idMaquina", function (req, res) {
    maquinaController.contReportProb(req, res);
});

router.get("/listarEstado/:idMaquina", function (req, res) {
    maquinaController.listarEstado(req, res);
});

router.post("/reporteProblema", function (req, res) {
    maquinaController.reporteProblema(req, res);
});

router.get("/verifcarPadraoMaq", function (req, res) {
    maquinaController.verifcarPadraoMaq(req, res);
});




module.exports = router;