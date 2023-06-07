var database = require("../database/config")

function listarMaquina(idUsuario) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listarMaquina(idUsuario)");
    var instrucao = `
    SELECT m.*, ev.username as nomeEditor, e.nome as nomeEmpresa FROM usuario u INNER JOIN suporteTI st ON u.idUsuario = st.fkUsuario INNER JOIN editorVideoSuporteTI evst ON st.idSuporteTI = evst.fkSuporteTI INNER JOIN editorVideo ev ON evst.fkEditorVideo = ev.idEditorVideo INNER JOIN maquina m ON m.fkEditorVideo = ev.idEditorVideo INNER JOIN empresa e ON e.idEmpresa = ev.fkEmpresa  WHERE u.idUsuario  = ${idUsuario};
    
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function deletar(idMaquina) {
    console.log("ACESSEI O AVISO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function deletar():", idMaquina);
    var instrucao = `
        DELETE FROM ram WHERE fkMaquina = ${idMaquina};
        DELETE FROM cpu WHERE fkMaquina = ${idMaquina};
        DELETE FROM disco WHERE fkMaquina = ${idMaquina};
        DELETE FROM janela WHERE fkMaquina = ${idMaquina};
        DELETE FROM parametrizacaoMetrica WHERE fkMaquina = ${idMaquina};
        DELETE FROM reporteProblema WHERE fkMaquina = ${idMaquina};
        DELETE FROM maquina WHERE idMaquina = ${idMaquina};



    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function listarByIdMaquina(idMaquina) {
    console.log("ACESSEI O AVISO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listarByIdMaquina():", idMaquina);
    var instrucao = `
    SELECT m.*, ev.*, e.nome nomeEmpresa, u.nome nomeUser, u.sobrenome, u.email FROM usuario u INNER JOIN editorVideo ev ON u.idUsuario  = ev.fkUsuario INNER JOIN maquina m ON m.fkEditorVideo = ev.idEditorVideo INNER JOIN empresa e ON e.idEmpresa = ev.fkEmpresa  WHERE m.idMaquina  = ${idMaquina};
    
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);

}


function cadastroFinalizado(nome, modelo, tipo, idMaquina){

    console.log("ACESSEI O AVISO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listarByIdDetalhe():", nome, modelo, tipo, idMaquina);
    var instrucao = `
    UPDATE maquina SET nome = '${nome}', modelo = '${modelo}', tipo = '${tipo}' WHERE idMaquina = ${idMaquina};
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function listarByIdDetalhe(idMaquina){

    console.log("ACESSEI O AVISO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listarByIdDetalhe():", idMaquina);
    var instrucao = `
    SELECT u.nome, u.sobrenome, ev.cpf, ev.telefone, u.email, ev.username FROM maquina m INNER JOIN editorVideo ev ON m.fkEditorVideo = ev.idEditorVideo INNER JOIN usuario u ON u.idUsuario = ev.idEditorVideo INNER JOIN empresa e ON e.idEmpresa = ev.fkEmpresa WHERE m.idMaquina = ${idMaquina};
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function contReportProb(idMaquina){
    console.log("ACESSEI O AVISO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function contReportProb():", idMaquina);
    var instrucao = `
    SELECT
    COUNT(CASE WHEN problema = 'Travamento' THEN 1 END) AS Travamento,
    COUNT(CASE WHEN problema = 'Lentidão' THEN 1 END) AS Lentidao,
    COUNT(CASE WHEN problema = 'Desligamento' THEN 1 END) AS Desligamento,
    COUNT(CASE WHEN problema = 'Superaquecimento' THEN 1 END) AS Superaquecimento,
    COUNT (*) AS Total
    FROM reporteProblema WHERE fkMaquina = ${idMaquina};
  
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function nameMaquinaById(idUsuario) {
    console.log("ACESSEI O AVISO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function nameMaquinaById():", idUsuario);
    var instrucao = `
    SELECT m.* FROM usuario inner join editorVideo ev on idUsuario = ev.fkUsuario  INNER JOIN maquina m on ev.idEditorVideo = m.fkEditorVideo WHERE idUsuario = ${idUsuario};
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);

}

function listReporte(idUsuario){
    console.log("ACESSEI O AVISO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listReporte():", idUsuario);
    var instrucao = `
    SELECT rp.frequencia, rp.problema, rp.fkMaquina  , FORMAT(rp.data, 'dd/MM/yyyy') as data , m.* FROM usuario inner join editorVideo ev on idUsuario = ev.fkUsuario  INNER JOIN maquina m on ev.idEditorVideo = m.fkEditorVideo inner join reporteProblema rp on rp.fkMaquina = m.idMaquina WHERE idUsuario = ${idUsuario};

    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function listMaqCadastra(){
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listMaqCadastra():");
    
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucao = `
    SELECT m.*, ev.username FROM maquina m INNER JOIN editorVideo ev  ON ev.idEditorVideo  = m.fkEditorVideo  WHERE nome = '---' AND modelo = '---' AND tipo = '---';
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function reporteProblema(data, frequencia, problema, fkMaquina){
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function reporteProblema():", data, frequencia, problema, fkMaquina);
    
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucao = `
    INSERT INTO reporteProblema(data, frequencia, problema, fkMaquina) VALUES ('${data}', '${frequencia}', '${problema}', '${fkMaquina}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function atualizarPadronizacao(idPadronizacaoMaquina, fkMaquina){
    var instrucao = `
    UPDATE padronizacaoMaquina  SET fkMaquina = ${fkMaquina} WHERE idPadronizacaoMaquina = ${idPadronizacaoMaquina};
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function listReporteById(idMaquina){

    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listReporteById():", idMaquina);
    var instrucao = `
    SELECT rp.frequencia, rp.problema, rp.fkMaquina , FORMAT(rp.data, 'dd/MM/yyyy') as data, m.nome nomeMaquina, ev.username FROM maquina m INNER JOIN reporteProblema rp ON m.idMaquina = rp.fkMaquina INNER JOIN editorVideo ev  ON ev.idEditorVideo = m.fkEditorVideo WHERE m.idMaquina = ${idMaquina}; 
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function listarEstado(idMaquina){
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listarEstado():", idMaquina);
    var instrucao = `
    select * from 
	(select top 1 fkMaquina as id, idCPU as idTipo, utilizacao as leitura, 'CPU' as tipo, cpu.qtdProcessos as adicional from cpu WHERE fkMaquina = ${idMaquina} order by idCPU DESC) as c
inner join parametrizacaoMetrica pm on pm.fkMaquina = id and upper(pm.nome) = tipo
union select * from (select TOP 1 fkMaquina as id, idRAM as idTipo, utilizacao as leitura, 'RAM' as tipo, ram.total as adicional from ram WHERE fkMaquina = ${idMaquina} order by idRam DESC) as r
inner join parametrizacaoMetrica pm on pm.fkMaquina = id and upper(pm.nome) = tipo
union select * from (select TOP 1 fkMaquina as id, idDisco as idTipo, taxaTransferencia as leitura, 'DISCO' as tipo, disco.velocidadeGravacao as adicional from disco WHERE fkMaquina = ${idMaquina} order by idDisco DESC) as d
inner join parametrizacaoMetrica pm on pm.fkMaquina = id and upper(pm.nome) = tipo;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function verifcarPadraoMaq(idPadronizacaoMaquina, idMaquina){

    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function verifcarPadraoMaq():", idPadronizacaoMaquina, idMaquina);
    var instrucao = `
    SELECT m.*, 'MAQ' as tipoVer
FROM maquina m
INNER JOIN editorVideo ev ON m.fkEditorVideo = ev.idEditorVideo
INNER JOIN empresa e ON e.idEmpresa = ev.fkEmpresa
WHERE m.idMaquina = ${idMaquina}
UNION ALL
SELECT m.*, 'PADRAO' as tipoVer
FROM padronizacaoMaquina pm
INNER JOIN maquina m ON m.idMaquina = pm.fkMaquina
INNER JOIN editorVideo ev ON ev.idEditorVideo = m.fkEditorVideo
INNER JOIN empresa e ON e.idEmpresa = ev.fkEmpresa
WHERE pm.idPadronizacaoMaquina = ${idPadronizacaoMaquina};
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    listarMaquina,
    deletar,
    listarByIdMaquina,
    nameMaquinaById,
    listReporte,
    reporteProblema,
    listarByIdDetalhe,
    listMaqCadastra,
    cadastroFinalizado,
    atualizarPadronizacao,
    contReportProb,
    listReporteById,
    listarEstado,
    verifcarPadraoMaq
};