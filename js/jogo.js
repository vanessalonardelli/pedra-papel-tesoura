// opções do jogo
const opcoes = ['pedra', 'papel', 'tesoura'];

// sorteia a jogada do computador
function escolhaDoComputador() {
  const indice = Math.floor(Math.random() * opcoes.length);
  return opcoes[indice];
}

// quem cada opção vence
const regras = {
  pedra: 'tesoura',
  papel: 'pedra',
  tesoura: 'papel'
};

// vê quem ganhou a rodada
function verificarVencedor(jogador, computador) {
  if (jogador === computador) {
    return 'empate';
  } else if (regras[jogador] === computador) {
    return 'jogador';
  } else {
    return 'computador';
  }
}

// elementos da tela
const botoesEscolha = document.querySelectorAll('.botao-escolha');
const textoResultado = document.querySelector('#resultado');

// joga uma rodada
function jogarRodada(escolhaJogador) {
  const escolhaComputador = escolhaDoComputador();
  const vencedor = verificarVencedor(escolhaJogador, escolhaComputador);

  if (vencedor === 'empate') {
    textoResultado.textContent = 'Empate! Os dois escolheram ' + escolhaJogador + '.';
  } else if (vencedor === 'jogador') {
    textoResultado.textContent = 'Você venceu! ' + escolhaJogador + ' vence ' + escolhaComputador + '.';
  } else {
    textoResultado.textContent = 'Você perdeu! ' + escolhaComputador + ' vence ' + escolhaJogador + '.';
  }
}

// coloca o clique em cada botão
for (const botao of botoesEscolha) {
  botao.addEventListener('click', function () {
    jogarRodada(botao.dataset.escolha);
  });
}