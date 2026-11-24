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

const placar = {
  jogador: 0,
  computador: 0
};

const pontosParaVencer = 3;

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
const pontosJogador = document.querySelector('#pontos-jogador');
const pontosComputador = document.querySelector('#pontos-computador');
const botaoReiniciar = document.querySelector('#botao-reiniciar');

function atualizarPlacar() {
  pontosJogador.textContent = placar.jogador;
  pontosComputador.textContent = placar.computador;
}

function mudarCorResultado(classe) {
  textoResultado.classList.remove('vitoria', 'derrota', 'empate');
  if (classe) {
    textoResultado.classList.add(classe);
  }
}

function travarBotoes(travar) {
  for (const botao of botoesEscolha) {
    botao.disabled = travar;
  }
}

function verificarFimDeJogo() {
  if (placar.jogador === pontosParaVencer) {
    textoResultado.textContent = 'Fim de jogo! Você venceu a partida por ' + placar.jogador + ' a ' + placar.computador + '.';
    travarBotoes(true);
  } else if (placar.computador === pontosParaVencer) {
    textoResultado.textContent = 'Fim de jogo! O computador venceu por ' + placar.computador + ' a ' + placar.jogador + '.';
    travarBotoes(true);
  }
}

function reiniciarJogo() {
  placar.jogador = 0;
  placar.computador = 0;
  atualizarPlacar();

  jogadaJogador.textContent = '?';
  jogadaComputador.textContent = '?';
  textoResultado.textContent = 'Faça sua jogada!';
  mudarCorResultado();

  travarBotoes(false);
}

function jogarRodada(escolhaJogador) {
  const escolhaComputador = escolhaDoComputador();
  const vencedor = verificarVencedor(escolhaJogador, escolhaComputador);
  jogadaJogador.textContent = escolhaJogador;
  jogadaComputador.textContent = escolhaComputador;

  if (vencedor === 'empate') {
    textoResultado.textContent = 'Empate! Os dois escolheram ' + escolhaJogador + '.';
    mudarCorResultado('empate');
  } else if (vencedor === 'jogador') {
    placar.jogador++;
    textoResultado.textContent = 'Você venceu! ' + escolhaJogador + ' vence ' + escolhaComputador + '.';
    mudarCorResultado('vitoria');
  } else {
    placar.computador++;
    textoResultado.textContent = 'Você perdeu! ' + escolhaComputador + ' vence ' + escolhaJogador + '.';
    mudarCorResultado('derrota');
  }

  atualizarPlacar();
  verificarFimDeJogo();
}

for (const botao of botoesEscolha) {
  botao.addEventListener('click', function () {
    jogarRodada(botao.dataset.escolha);
  });
}

botaoReiniciar.addEventListener('click', reiniciarJogo);