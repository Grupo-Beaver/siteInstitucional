var database = require("../database/config")

function getEmpresa(idUsuario) {
    console.log("ACESSEI O AVISO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function getEmpresa():", idUsuario);
    var instrucao = `
    SELECT e.*, st.idSuporteTI, pm.idPadronizacaoMaquina, pm.fkMaquina maquinaPadrao FROM usuario u INNER JOIN suporteTI st ON u.idUsuario = st.fkUsuario INNER JOIN empresa e ON e.idEmpresa = st.fkEmpresa INNER JOIN padronizacaoMaquina pm ON pm.fkEmpresa = e.idEmpresa WHERE u.idUsuario = ${idUsuario};
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);

}

function cadastrar(nome, cnpj) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", nome, cnpj);
    
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucao = `
    INSERT INTO empresa(nome, cnpj) VALUES ('${nome}', '${cnpj}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function listPadronizacaoMaquina(idEmpresa){
    console.log("ACESSEI O AVISO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listPadronizacaoMaquina():", idEmpresa);
    var instrucao = `
    SELECT m.idMaquina, m.nome nomeMaquina, e.nome nomeEmpresa FROM padronizacaoMaquina pm INNER JOIN maquina m ON pm.fkMaquina = m.idMaquina INNER JOIN empresa e ON pm.fkEmpresa = e.idEmpresa WHERE e.idEmpresa = ${idEmpresa};
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function atualizarParametrizacaoMetrica(minAtencao, maxAtencao ,idParametrizacaoMetrica){
    console.log("ACESSEI O AVISO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function atualizarParametrizacaoMetrica():", minAtencao, maxAtencao, idParametrizacaoMetrica);
    var instrucao = `
    UPDATE parametrizacaoMetrica SET minAtencao = ${minAtencao}, maxAtencao = ${maxAtencao} WHERE idParametrizacaoMetrica = ${idParametrizacaoMetrica};
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function listMetricas(idMaquina){
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listMetricas():", idMaquina);
    
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucao = `
    SELECT pm.*, m.nome nomeMaquina, ev.username FROM maquina m INNER JOIN parametrizacaoMetrica pm ON m.idMaquina = pm.fkMaquina INNER JOIN editorVideo ev ON ev.idEditorVideo = m.fkEditorVideo WHERE m.idMaquina = ${idMaquina};
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function verificarCnpj(cnpj) {
    console.log("ACESSEI O AVISO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function verificarCnpj():", cnpj);
    var instrucao = `
    select * from empresa WHERE cnpj = ${cnpj};
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);

}


module.exports = {
    cadastrar,
    verificarCnpj,
    getEmpresa,
    listPadronizacaoMaquina,
    listMetricas,
    atualizarParametrizacaoMetrica
};