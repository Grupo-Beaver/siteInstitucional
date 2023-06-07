var idSuporteTI = sessionStorage.ID_USUARIO;
var listMaq = [];
var idMaquina = sessionStorage.ID_MAQUINA;
var maquina;
var etd = [];
var pd = [];

async function listarMaquinaByIdSuporte() {
    await fetch(`/maquinas/listarMaquina/${idSuporteTI}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        },

    })
        .then(resposta => {

            if (resposta.ok) {
                console.log(resposta);

                resposta.json().then(json => {
                    console.log(json);
                    console.log(JSON.stringify(json));
                    for (var i = 0; i < json.length; i++) {
                        verifcarPadraoMaq(json[i].idMaquina);
                        estado(json[i].idMaquina);
                        listMaq.push(json[i]);
                    }
                })
            } else {
                console.error('Nenhum dado encontrado ou erro na API');
            }
        }).catch(function (error) {
            console.error(`Erro na obtenção dos dados da maquina: ${error.message}`);
        });


}



function verifcarPadraoMaq(idMaquina){
    fetch(`/maquinas/verifcarPadraoMaq?idMaquina=${idMaquina}&idPadronizacaoMaquina=${sessionStorage.ID_PADRONIZACAO}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    })
    
        .then(resposta => {

            if (resposta.ok) {
                console.log(resposta);

                resposta.json().then(json => {
                    console.log(json);
                    console.log(JSON.stringify(json));
                    var memoriaRamMaq = "";
                    var memoriaDicMaq = "";
                    var memoriaRamPad = "";
                    var memoriaDicPad = ""; 
                    for(var i = 0; i < json.length; i++){
                        if(json[i].tipoVer == "MAQ"){
                            memoriaRamMaq = json[i].memoriaRAMTotal;
                            memoriaDicMaq = json[i].memoriaDiscoTotal;
                        }else{
                            memoriaRamPad = json[i].memoriaRAMTotal * 0.95;
                            memoriaDicPad = json[i].memoriaDiscoTotal * 0.95;   
                        }
                    }
                    if(memoriaDicMaq >= memoriaDicPad && memoriaRamMaq >= memoriaRamPad){
                        pd.push(0);
                    }else{
                        pd.push(1);
                    }
                });
            } else {
                console.error('Nenhum dado encontrado ou erro na API');
            }
        })
        .catch(function (error) {
            console.error(`Erro na obtenção dos dados da maquina: ${error.message}`);
        });
}

function estado(idMaquina) {

    fetch(`/maquinas/listarEstado/${idMaquina}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        },

    })
        .then(resposta => {
            if (resposta.ok) {
                console.log(resposta.length);

                resposta.json().then(json => {
                    console.log(json);
                    console.log(JSON.stringify(json));
                    var total = 0;
                    
                    for (var i = 0; i < json.length; i++) {

                        var tipo = json[i].tipo;
                        var minAtencao = json[i].minAtencao;
                        var maxAtencao = json[i].maxAtencao;
                        var leitura = json[i].leitura;
                        var adicional = json[i].adicional;

                        if (tipo == "CPU") {
                            if (leitura <= minAtencao) {
                                total += 0
                            } else if (leitura <= maxAtencao) {
                                total += 1
                            } else {
                                total += 2
                            }
                        } else if (tipo == "RAM") {
                            var utilizacao = (leitura * 100) / adicional;
                            if (utilizacao <= minAtencao) {
                                total += 0
                            } else if (utilizacao <= maxAtencao) {
                                total += 1
                            } else {
                                total += 2
                            }
                        }else if(tipo == "DISCO"){
                            if (leitura >= minAtencao) {
                                total += 0
                            } else if (leitura >= maxAtencao) {
                                total += 1
                            } else {
                                total += 2
                            }
                        } 
                        else{
                            total += 0;
                        }

                    }

                    if(total == 1){
                        etd.push('Atenção')
                    }else if(total >= 2){
                        etd.push('Critico')
                    }else{
                        etd.push('Saudavel')
                    }

                });


            } else {
                console.error('Nenhum dado encontrado ou erro na API');
            }
        })

}

function listarByIdMaquina() {

    fetch(`/maquinas/listarByIdMaquina/${idMaquina}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        },

    })
        .then(resposta => {

            if (resposta.ok) {
                console.log(resposta);

                resposta.json().then(json => {
                    console.log(json);
                    console.log(JSON.stringify(json));
                    maquina = json;
                    adicionarCampos();
        
                });
            } else {
                console.error('Nenhum dado encontrado ou erro na API');
            }
        })
        .catch(function (error) {
            console.error(`Erro na obtenção dos dados da maquina: ${error.message}`);
        });


}


function deletar() {
    if(sessionStorage.ID_MAQUINA_PADRAO == idMaquina){
        alert("Essa maquina de padronização, então não e possivel deletar")
    }else{
    fetch(`/maquinas/deletarMaquina/${idMaquina}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json"
        },
    }).then(function (resposta) {

        if (resposta.ok) {  
            etd.length = 0;
            pd.length = 0;
            location.reload();
        } else if (resposta.status == 404) {
            window.alert("Deu 404!");
        } else {
            throw ("Houve um erro ao tentar realizar o excluir! Código da resposta: " + resposta.status);
        }
    }).catch(function (resposta) {
        console.log(`#ERRO: ${resposta}`);
    });
}
}

function getByIdSession(id){
    sessionStorage.ID_MAQUINA = id;

}

function getByIdMaq(id){
    idMaquina = id;

}
