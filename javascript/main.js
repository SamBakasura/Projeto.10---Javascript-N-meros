'use strict'


const botaoExibir = document.getElementById('Exibir')
const botao100vendas = document.getElementById('v100endas')

const num = [71, 50, 25, 33, 49, 82, 67, 25,];

function limparContainer(){
    const container = document.getElementById('data-container');
    container.textContent = '';
}
function criarCard(data) {
    const container = document.getElementById('data-container')
    const card = document.createElement('div');
    card.textContent = data;
    container.appendChild(card);
}

function Exibir() {
    limparContainer();
    num.forEach(criarCard);
}

function v100endas(){
    limparContainer();
    const num100 = [254 , 500, 5, 84, 33, 45, 72, 85,];
    num100.forEach(criarCard);
}

botaoExibir.addEventListener('click', Exibir);
botao100vendas.addEventListener('click', v100endas);
