var idSuporteTI = sessionStorage.ID_USUARIO;
var listMaq = [];
var idMaquina = sessionStorage.ID_MAQUINA;
var maquina;

function listarMaquinaByIdSuporte() {
    fetch(`/maquinas/listarMaquina/${idSuporteTI}`, {
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
                        listMaq.push(json[i]);
                    }
                    verificarLista();
                });
            } else {
                console.error('Nenhum dado encontrado ou erro na API');
            }
        })
        .catch(function (error) {
            console.error(`Erro na obtenção dos dados da maquina: ${error.message}`);
        });


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
