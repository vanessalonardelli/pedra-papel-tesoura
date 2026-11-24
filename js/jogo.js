const opcoes = ['pedra', 'papel', 'tesoura'];

function escolhaDoComputador() {
  const indice = Math.floor(Math.random() * opcoes.length);
  return opcoes[indice];
}

const regras = {
  pedra: 'tesoura',
  papel: 'pedra',
  tesoura: 'papel'
};

function verificarVencedor(jogador, computador) {
  if (jogador === computador) {
    return 'empate';
  } else if (regras[jogador] === computador) {
    return 'jogador';
  } else {
    return 'computador';
  }
}

const botoesEscolha = document.querySelectorAll('.botao-escolha');
const textoResultado = document.querySelector('#resultado');
const jogadaJogador = document.querySelector('#jogada-jogador');
const jogadaComputador = document.querySelector('#jogada-computador');


function jogarRodada(escolhaJogador) {
  const escolhaComputador = escolhaDoComputador();
  const vencedor = verificarVencedor(escolhaJogador, escolhaComputador);
  jogadaJogador.textContent = escolhaJogador;
  jogadaComputador.textContent = escolhaComputador;

  if (vencedor === 'empate') {

  if (vencedor === 'empate') {
    textoResultado.textContent = 'Empate! Os dois escolheram ' + escolhaJogador + '.';
  } else if (vencedor === 'jogador') {
    textoResultado.textContent = 'Você venceu! ' + escolhaJogador + ' vence ' + escolhaComputador + '.';
  } else {
    textoResultado.textContent = 'Você perdeu! ' + escolhaComputador + ' vence ' + escolhaJogador + '.';
  }
}

for (const botao of botoesEscolha) {
  botao.addEventListener('click', function () {
    jogarRodada(botao.dataset.escolha);
  });
}