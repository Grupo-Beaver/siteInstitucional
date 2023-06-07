var database = require("../database/config")

function buscarMedidaCpu(idMaquina){
    console.log("ACESSEI O AVISO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function buscarMedidaCpu():", idMaquina);
    var instrucao = `
    SELECT *
    FROM (
        SELECT TOP 6 cpu.idCPU, cpu.utilizacao, cpu.qtdProcessos, cpu.threads, cpu.velocidade, cpu.data, pm.*, m.nome AS nomeMaquina, ev.username
        FROM maquina m
        INNER JOIN parametrizacaoMetrica pm ON m.idMaquina = pm.fkMaquina
        INNER JOIN cpu ON cpu.fkMaquina = m.idMaquina
        INNER JOIN editorVideo ev ON ev.idEditorVideo = m.fkEditorVideo 
        WHERE m.idMaquina = ${idMaquina} AND pm.nome = 'Cpu'
        ORDER BY cpu.idCPU DESC
    ) AS subquery
    ORDER BY idCPU ASC;

    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function buscarUltimaMedidaCpu(idMaquina){
    console.log("ACESSEI O AVISO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function buscarUltimaMedidaCpu():", idMaquina);
    var instrucao = `
    SELECT TOP 1 cpu.idCPU, cpu.utilizacao, cpu.qtdProcessos, cpu.threads, cpu.velocidade, cpu.data, pm.*, m.nome AS nomeMaquina, ev.username
    FROM maquina m
    INNER JOIN parametrizacaoMetrica pm ON m.idMaquina = pm.fkMaquina
    INNER JOIN cpu ON cpu.fkMaquina = m.idMaquina
    INNER JOIN editorVideo ev ON ev.idEditorVideo = m.fkEditorVideo 
    WHERE m.idMaquina = ${idMaquina} AND pm.nome = 'Cpu'
    ORDER BY cpu.idCPU DESC;

    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function buscarMedidaJanela(idMaquina){
    console.log("ACESSEI O AVISO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function buscarMedidaJanela():", idMaquina);
    var instrucao = `
    SELECT *
    FROM (
        SELECT TOP 1 j.idJanela, j.totalJanelas, j.nomeJanela , pm.*, m.nome AS nomeMaquina, ev.username
        FROM maquina m
        INNER JOIN parametrizacaoMetrica pm ON m.idMaquina = pm.fkMaquina
        INNER JOIN janela j ON j.fkMaquina = m.idMaquina
        INNER JOIN editorVideo ev ON ev.idEditorVideo = m.fkEditorVideo 
        WHERE m.idMaquina = 19 AND pm.nome = 'Janela'
        ORDER BY j.idJanela DESC
    ) AS subquery
    ORDER BY idJanela ASC;

    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function buscarMedidaRam(idMaquina){
    console.log("ACESSEI O AVISO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function buscarMedidaRam():", idMaquina);
    var instrucao = `
    
    SELECT *
    FROM (
        SELECT TOP 1  r.idRAM, r.total, r.utilizacao, r.disponivel, r.[data] , pm.*, m.nome AS nomeMaquina, ev.username
        FROM maquina m
        INNER JOIN parametrizacaoMetrica pm ON m.idMaquina = pm.fkMaquina
        INNER JOIN ram r ON r.fkMaquina = m.idMaquina
        INNER JOIN editorVideo ev ON ev.idEditorVideo = m.fkEditorVideo 
        WHERE m.idMaquina = ${idMaquina} AND pm.nome = 'Ram'
        ORDER BY r.idRAM DESC
    ) AS subquery
    ORDER BY idRam ASC;

    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function buscarMedidaDisco(idMaquina){
    console.log("ACESSEI O AVISO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function buscarMedidaDisco():", idMaquina);
    var instrucao = `
    
    SELECT *
    FROM (
        SELECT TOP 6 d.idDisco, d.velocidadeGravacao, d.velocidadeLeitura, d.taxaTransferencia, d.data, pm.*, m.nome AS nomeMaquina, ev.username
        FROM maquina m
        INNER JOIN parametrizacaoMetrica pm ON m.idMaquina = pm.fkMaquina
        INNER JOIN disco d  ON d.fkMaquina = m.idMaquina
        INNER JOIN editorVideo ev ON ev.idEditorVideo = m.fkEditorVideo 
        WHERE m.idMaquina = ${idMaquina} AND pm.nome = 'Disco'
        ORDER BY d.idDisco DESC
    ) AS subquery
    ORDER BY idDisco ASC;
    
   SELECT * from disco d ;

    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function buscarUltimaMedidaDisco(idMaquina){
    console.log("ACESSEI O AVISO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function buscarUltimaMedidaDisco():", idMaquina);
    var instrucao = `
    SELECT TOP 1 d.idDisco, d.velocidadeGravacao, d.velocidadeLeitura, d.taxaTransferencia, d.data, pm.*, m.nome AS nomeMaquina, ev.username
    FROM maquina m
    INNER JOIN parametrizacaoMetrica pm ON m.idMaquina = pm.fkMaquina
    INNER JOIN disco d  ON d.fkMaquina = m.idMaquina
    INNER JOIN editorVideo ev ON ev.idEditorVideo = m.fkEditorVideo 
    WHERE m.idMaquina = ${idMaquina} AND pm.nome = 'Disco'
    ORDER BY d.idDisco DESC;

    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    buscarMedidaCpu,
    buscarUltimaMedidaCpu,
    buscarMedidaJanela,
    buscarMedidaRam,
    buscarMedidaDisco,
    buscarUltimaMedidaDisco
};