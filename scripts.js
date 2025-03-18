const button = document.querySelector('.button-task')
const input = document.querySelector('.input-task')
const listaCompleta = document.querySelector('.list-task')

let minhaListaDeItens = []

function adiconarNovaTarefa() {
    minhaListaDeItens.push({

        tarefa: input.value,
        concluida: false
    }) //adiciona item

    input.value = '' //apaga item
    mostrarTarefas()

}

function mostrarTarefas() {

    let novaLi = ""

    //['compra café', 'estudar programaçao']

    minhaListaDeItens.forEach((item, posicao) => {
        novaLi = novaLi + `     
                
                <li class="task ${item.concluida && "done"}">
                        <img src="./img/checked.png" alt="check-na-tarefa" onclick="concluirTarefa(${posicao})">
                        <p>${item.tarefa}</p>
                        <img src="./img/trash.png" alt="tarefa-para-lixo" onclick = "deletarItem(${posicao})">
                </li>
                
               `
    })


    listaCompleta.innerHTML = novaLi

    localStorage.setItem("lista", JSON.stringify(minhaListaDeItens))
}
function concluirTarefa(posicao) {
    minhaListaDeItens[posicao].concluida = !minhaListaDeItens[posicao].concluida
    mostrarTarefas()
}

function deletarItem(posicao) {
    minhaListaDeItens.splice(posicao, 1)
    mostrarTarefas()
}

function recarregarTarefas() {
    const tarefasDoLocalStorage = localStorage.getItem('lista')

    if (tarefasDoLocalStorage) {
        minhaListaDeItens = JSON.parse(tarefasDoLocalStorage)
    }
    
    mostrarTarefas()
}

recarregarTarefas()
button.addEventListener('click', adiconarNovaTarefa)