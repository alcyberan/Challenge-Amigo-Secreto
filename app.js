//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let listaDeAmigos = [];

function exibirTextoNaTela(tag, texto) {
    let campo = document.getElementById(tag);
    campo.innerHTML = texto;
}

function adicionarAmigo() {
    let nome = document.querySelector('input').value;

    if (nome.length == 0) {
        alert('Digite um nome válido!');
        limparCampo();
    } else {
        nome = nome.trim().toLocaleUpperCase();

        if (listaDeAmigos.includes(nome)) {
            alert('Esse nome já existe na lista!');
            limparCampo();
        }
        else {
            listaDeAmigos.push(nome);
            exibirTextoNaTela('listaAmigos', listaDeAmigos.join('<br>'));
            limparCampo();
        }
    }
}

function sortearAmigo() {
    if (listaDeAmigos.length == 0) {
        alert('Nenhum amigo foi adicionado!');
    } else {
        amigoSorteado = listaDeAmigos[parseInt(Math.random() * (listaDeAmigos.length))];
        exibirTextoNaTela('resultado', `O amigo sorteado foi... ${amigoSorteado}! Parabéns!!!`);
    }
}

function limpeza() {
    listaDeAmigos = [];
    exibirTextoNaTela('listaAmigos', 'LISTA DE AMIGOS');
    exibirTextoNaTela('resultado', '');
}

function limparCampo() {
    nome = document.querySelector('input');
    nome.value = '';
}