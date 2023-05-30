var maquinaModel = require("../models/maquinaModel");

var sessoes = [];

function listarMaquina(req, res) {
    var idSuporteTI = req.params.idSuporteTI;
    maquinaModel.listarMaquina(idSuporteTI)
        .then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhum resultado encontrado!")
            }
        }).catch(
            function (erro) {
                console.log(erro);
                console.log("Houve um erro ao realizar a consulta! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
}

function listarByIdMaquina(req, res) {
    var idMaquina = req.params.idMaquina;
    maquinaModel.listarByIdMaquina(idMaquina)
        .then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhum resultado encontrado!")
            }
        }).catch(
            function (erro) {
                console.log(erro);
                console.log("Houve um erro ao realizar a consulta! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
}

function listMaqCadastra(req, res) {
    maquinaModel.listMaqCadastra()
        .then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhum resultado encontrado!")
            }
        }).catch(
            function (erro) {
                console.log(erro);
                console.log("Houve um erro ao realizar a consulta! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
}

function nameMaquinaById(req, res){
    var idUsuario = req.params.idUsuario;
    maquinaModel.nameMaquinaById(idUsuario)
        .then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhum resultado encontrado!")
            }
        }).catch(
            function (erro) {
                console.log(erro);
                console.log("Houve um erro ao realizar a consulta! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
}

function listReporte(req, res){
    var idUsuario = req.params.idUsuario;
    maquinaModel.listReporte(idUsuario)
        .then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhum resultado encontrado!")
            }
        }).catch(
            function (erro) {
                console.log(erro);
                console.log("Houve um erro ao realizar a consulta! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
}

function deletar(req, res) {
    var idMaquina = req.params.idMaquina;

    maquinaModel.deletar(idMaquina)
        .then(
            function (resultado) {
                res.json(resultado);
            }
        )
        .catch(
            function (erro) {
                console.log(erro);
                console.log("Houve um erro ao deletar o post: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
}


function atualizarPadronizacao(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var idPadronizacaoMaquina = req.params.idPadronizacaoMaquina;
    var fkMaquina = req.body.fkMaquinaServer;
    

    // Faça as validações dos valores
    if (idPadronizacaoMaquina == undefined) {
        res.status(400).send("Seu idPadronizacaoMaquina está undefined!");
    } else if (fkMaquina == undefined) {
        res.status(400).send("Seu fkMaquina está undefined!");
    } else {
        
        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        maquinaModel.atualizarPadronizacao(idPadronizacaoMaquina, fkMaquina)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o reporte de problema! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

function cadastroFinalizado(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var nome = req.body.nomeServer;
    var modelo = req.body.modeloServer;
    var tipo = req.body.tipoServer;
    var idMaquina = req.body.idMaquinaServer;

    // Faça as validações dos valores
    if (nome == undefined) {
        res.status(400).send("Seu nome está undefined!");
    } else if (modelo == undefined) {
        res.status(400).send("Seu modelo está undefined!");
    } else if (tipo == undefined) {
        res.status(400).send("Seu tipo está undefined!");
    } else if (idMaquina == undefined) {
        res.status(400).send("Sua idMaquina está undefined!");
    } else {
        
        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        maquinaModel.cadastroFinalizado(nome, modelo, tipo, idMaquina)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o reporte de problema! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}



function reporteProblema(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var data = req.body.dataServer;
    var frequencia = req.body.frequenciaServer;
    var problema = req.body.problemaServer;
    var fkMaquina = req.body.fkMaquinaServer;

    // Faça as validações dos valores
    if (data == undefined) {
        res.status(400).send("Seu data está undefined!");
    } else if (frequencia == undefined) {
        res.status(400).send("Seu frequencia está undefined!");
    } else if (problema == undefined) {
        res.status(400).send("Seu problema está undefined!");
    } else if (fkMaquina == undefined) {
        res.status(400).send("Sua fkMaquina está undefined!");
    } else {
        
        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        maquinaModel.reporteProblema(data, frequencia, problema, fkMaquina)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o reporte de problema! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}


module.exports = {
    listarMaquina,
    deletar,
    listarByIdMaquina,
    nameMaquinaById,
    listReporte,
    reporteProblema,
    listMaqCadastra,
    cadastroFinalizado,
    atualizarPadronizacao
}