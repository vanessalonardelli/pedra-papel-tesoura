// Opções possíveis do jogo
const opcoes = ['pedra', 'papel', 'tesoura'];

// Sorteia uma das opções para o computador
function escolhaDoComputador() {
  const indice = Math.floor(Math.random() * opcoes.length);
  return opcoes[indice];
}