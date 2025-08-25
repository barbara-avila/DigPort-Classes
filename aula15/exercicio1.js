//1. Crie um array chamado listaDeTarefas. Ele será utilizado para guardar as tarefas que o usuário adicionar. 
//2. Crie uma função chamada adicionarTarefa().
//Pense: Quais parâmentros essa função precisa para funcionar? 
// O que deve acontecer dentro do corpo da função para que a nova tarefa seja incluída na lista?
//3. Depois, teste seu código: Adicione pelo menos uma tarefa usando a função. 
// Mostre a lista completa no console para verificar se deu certo. 

let listaDeTarefas = [];

function adicionarItem(item) {
    listaDeTarefas.push(item);
}

adicionarItem("estudar fundamentos de programação");
adicionarItem("entregar tarefa");

console.log(listaDeTarefas);

