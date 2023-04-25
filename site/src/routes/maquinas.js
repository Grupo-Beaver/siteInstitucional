var express = require("express");
var router = express.Router();

var maquinaController = require("../controllers/maquinaController");

router.get("/listarMaquina/:idSuporteTI", function (req, res) {
    maquinaController.listarMaquina(req, res);
})

router.delete("/deletarMaquina/:idMaquina", function (req, res) {
    maquinaController.deletar(req, res);
});

module.exports = router;