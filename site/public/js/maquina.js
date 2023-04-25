var idSuporteTI = sessionStorage.ID_USUARIO;
var listMaq = [];
var idMaquina = 0;

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


function deletar() {
    fetch(`/maquinas/deletarMaquina/${idMaquina}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json"
        },
    }).then(function (resposta) {

        if (resposta.ok) {
            window.alert("Maquina deletada com sucesso");
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

function getByIdMaquina(idMaquina){

    this.idMaquina = idMaquina;

}