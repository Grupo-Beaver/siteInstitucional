var express = require("express");
var router = express.Router();

var empresaController = require("../controllers/empresaController");

router.get("/verificarCnpj/:cnpj", function (req, res) {
    empresaController.verificarCnpj(req, res);
});

router.get("/getEmpresa/:idUsuario", function (req, res) {
    empresaController.getEmpresa(req, res);
});

router.post("/cadastrar", function (req, res) {
    empresaController.cadastrar(req, res);
});


router.get("/listPadronizacaoMaquina/:idEmpresa", function (req, res) {
    empresaController.listPadronizacaoMaquina(req, res);
});

router.get("/listMetricas/:idMaquina", function (req, res) {
    empresaController.listMetricas(req, res);
});

router.put("/atualizarParametrizacaoMetrica/:idParametrizacaoMetrica", function (req, res) {
    empresaController.atualizarParametrizacaoMetrica(req, res);
});

module.exports = router;