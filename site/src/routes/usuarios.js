var express = require("express");
var router = express.Router();

var usuarioController = require("../controllers/usuarioController");

router.get("/", function (req, res) {
    usuarioController.testar(req, res);
});

router.get("/listar", function (req, res) {
    usuarioController.listar(req, res);
});

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/cadastrarSuport", function (req, res) {
    usuarioController.cadastrarSuport(req, res);
})

router.post("/login", function (req, res) {
    usuarioController.login(req, res);
});

router.get("/listIdByEmail/:email", function (req, res) {
    usuarioController.listIdByEmail(req, res);
});


module.exports = router;