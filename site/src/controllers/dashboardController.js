var dashboardModel = require("../models/dashboardModel");

var sessoes = [];

function buscarMedidaCpu(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var idMaquina = req.params.idMaquina;

    // Faça as validações dos valores
    if (idMaquina == undefined) {
        res.status(400).send("Seu idMaquina está undefined!");
    } else {
        
        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        dashboardModel.buscarMedidaCpu(idMaquina)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

function buscarUltimaMedidaCpu(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var idMaquina = req.params.idMaquina;

    // Faça as validações dos valores
    if (idMaquina == undefined) {
        res.status(400).send("Seu idMaquina está undefined!");
    } else {
        
        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        dashboardModel.buscarUltimaMedidaCpu(idMaquina)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

function buscarMedidaJanela(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var idMaquina = req.params.idMaquina;

    // Faça as validações dos valores
    if (idMaquina == undefined) {
        res.status(400).send("Seu idMaquina está undefined!");
    } else {
        
        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        dashboardModel.buscarMedidaJanela(idMaquina)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

function buscarMedidaRam(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var idMaquina = req.params.idMaquina;

    // Faça as validações dos valores
    if (idMaquina == undefined) {
        res.status(400).send("Seu idMaquina está undefined!");
    } else {
        
        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        dashboardModel.buscarMedidaRam(idMaquina)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

function buscarMedidaDisco(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var idMaquina = req.params.idMaquina;

    // Faça as validações dos valores
    if (idMaquina == undefined) {
        res.status(400).send("Seu idMaquina está undefined!");
    } else {
        
        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        dashboardModel.buscarMedidaDisco(idMaquina)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

function buscarUltimaMedidaDisco(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var idMaquina = req.params.idMaquina;

    // Faça as validações dos valores
    if (idMaquina == undefined) {
        res.status(400).send("Seu idMaquina está undefined!");
    } else {
        
        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        dashboardModel.buscarUltimaMedidaDisco(idMaquina)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}
module.exports = {
    buscarMedidaCpu,
    buscarUltimaMedidaCpu,
    buscarMedidaJanela,
    buscarMedidaRam,
    buscarMedidaDisco,
    buscarUltimaMedidaDisco
}