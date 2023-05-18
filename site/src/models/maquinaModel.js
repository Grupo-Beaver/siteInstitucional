var database = require("../database/config")

function listarMaquina(idUsuario) {
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

function listarByIdMaquina(idMaquina) {
    console.log("ACESSEI O AVISO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listarByIdMaquina():", idMaquina);
    var instrucao = `
    select maquina.*, editor.nome as nomeEditor from editorVideo AS editor INNER JOIN maquina ON editor.idEditorVideo = maquina.fkEditorVideo WHERE maquina.idMaquina = ${idMaquina};
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
    SELECT rp.frequencia, rp.problema, rp.fkMaquina  , FORMAT(rp.data, 'dd/MM/yyyy') as data , m.nome FROM usuario inner join editorVideo ev on idUsuario = ev.fkUsuario  INNER JOIN maquina m on ev.idEditorVideo = m.fkEditorVideo inner join reporteProblema rp on rp.fkMaquina = m.idMaquina WHERE idUsuario = ${idUsuario};

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

module.exports = {
    listarMaquina,
    deletar,
    listarByIdMaquina,
    nameMaquinaById,
    listReporte,
    reporteProblema
};