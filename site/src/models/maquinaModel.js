var database = require("../database/config")

function listarMaquina(idSuporteTI) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listarMaquina(idSuporteTI)");
    var instrucao = `
    SELECT maquina.*, editor.nome as nomeEditor, empresa.nome as nomeEmpresa
    FROM editorVideoSuporteTI AS editorSP
    INNER JOIN editorVideo AS editor
        ON editor.idEditorVideo = editorSP.fkEditorVideo
    INNER JOIN maquina
        ON editor.idEditorVideo = maquina.fkEditorVideo
    INNER JOIN empresa
        ON empresa.idEmpresa = editor.fkEmpresa
    WHERE editorSP.fkSuporteTI = ${idSuporteTI};    
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function deletar(idMaquina) {
    console.log("ACESSEI O AVISO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function deletar():", idMaquina);
    var instrucao = `
        DELETE FROM maquina WHERE idMaquina = ${idMaquina};
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    listarMaquina,
    deletar
};