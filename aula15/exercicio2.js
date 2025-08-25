//para o mesmo array de listaDeTarefas crie uma função chamada removerTarefa().

let listaDeTarefas = [];

function adicionarItem(item) {
    listaDeTarefas.push(item);
}

adicionarItem("estudar fundamentos de programação");
adicionarItem("entregar tarefa");

console.log(listaDeTarefas);


// Função para remover uma tarefa.
function removerTarefa(tarefa) {
    // Encontra o índice da tarefa no array.
    let posição = listaDeTarefas.indexOf(tarefa);

    // Se a tarefa for encontrada (index diferente de -1), remove a tarefa.
    if (posição !== -1) {
        listaDeTarefas.splice(posição, 1);
    } else {
        console.log("Tarefa não encontrada!");
    }
}

removerTarefa("entregar tarefa");
console.log(listaDeTarefas);