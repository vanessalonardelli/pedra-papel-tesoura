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