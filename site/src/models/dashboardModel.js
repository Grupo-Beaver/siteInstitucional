var database = require("../database/config")

function buscarMedidaCpu(idMaquina){
    console.log("ACESSEI O AVISO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function buscarMedidaCpu():", idMaquina);
    var instrucao = `
    SELECT TOP 6 cpu.*, pm.*, m.nome nomeMaquina, ev.username
    FROM maquina m
    INNER JOIN parametrizacaoMetrica pm ON m.idMaquina = pm.fkMaquina
    INNER JOIN cpu ON cpu.fkMaquina = m.idMaquina
    INNER JOIN editorVideo ev ON ev.idEditorVideo = m.fkEditorVideo 
    WHERE idMaquina = ${idMaquina} AND pm.nome = 'Cpu'
    ORDER BY cpu.idCPU DESC;

    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    buscarMedidaCpu
};