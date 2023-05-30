var express = require("express");
var router = express.Router();

var usuarioController = require("../controllers/usuarioController");

router.get("/", function (req, res) {
    usuarioController.testar(req, res);
});

router.get("/listar", function (req, res) {
    usuarioController.listar(req, res);
});

router.get("/listIdByEditorId/:idUsuario", function (req, res) {
    usuarioController.listIdByEditorId(req, res);
});

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/cadastrarSuportEmpresa", function (req, res) {
    usuarioController.cadastrarSuportEmpresa(req, res);
})

router.post("/associarEditorAndSuport", function (req, res) {
    usuarioController.associarEditorAndSuport(req, res);
})

router.post("/cadastrarEditorEmpresa", function (req, res) {
    usuarioController.cadastrarEditorEmpresa(req, res);
})

router.post("/cadastrarSuport", function (req, res) {
    usuarioController.cadastrarSuport(req, res);
})

router.post("/cadastrarEditor", function (req, res) {
    usuarioController.cadastrarEditor(req, res);
})

router.post("/login", function (req, res) {
    usuarioController.login(req, res);
});


router.get("/listIdByEmail/:email", function (req, res) {
    usuarioController.listIdByEmail(req, res);
});


module.exports = router;