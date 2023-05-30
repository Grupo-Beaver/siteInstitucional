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

module.exports = router;