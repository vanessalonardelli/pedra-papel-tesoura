<div align="center">

# Pedra, Papel, Tesoura, Lagarto, Spock

**A versão nerd do clássico, com cinco opções e menos empates.**

[Jogar agora](https://vanessalonardelli.github.io/pedra-papel-tesoura/)

</div>

---

## Sobre o jogo

Uma versão do pedra, papel e tesoura com duas opções a mais: lagarto e Spock. Cada opção vence duas e perde para outras duas, então os empates ficam bem mais raros. O jogo foi criado por Sam Kass e Karen Bryla e ficou famoso na série The Big Bang Theory.

O visual é inspirado no clima da série: um quadro de físico cheio de equações, um átomo girando na arena e um sofá com lugar reservado. Tudo desenhado com código, sem imagens da série.

## Regras

| Quem vence | Ação | Quem perde |
| --- | --- | --- |
| Tesoura | corta | Papel |
| Papel | cobre | Pedra |
| Pedra | esmaga | Lagarto |
| Lagarto | envenena | Spock |
| Spock | quebra | Tesoura |
| Tesoura | decapita | Lagarto |
| Lagarto | come | Papel |
| Papel | refuta | Spock |
| Spock | vaporiza | Pedra |
| Pedra | quebra | Tesoura |

## Como jogar

1. Clique em uma das cinco opções. O computador escolhe ao mesmo tempo.
2. A arena mostra a jogada de cada um, e a mensagem diz quem venceu e como.
3. Quem fizer **3 pontos** primeiro vence a partida.
4. Clique em **Jogar de novo** para começar outra partida sem recarregar a página.

## Estrutura do projeto

| Arquivo | O que faz |
| --- | --- |
| `index.html` | Estrutura da página, diagrama das regras, arena e placar |
| `css/estilo.css` | Visual inspirado na série, animação do átomo e responsividade |
| `js/jogo.js` | Regras, escolha do computador, placar, fim de jogo e reinício |

Feito com **HTML, CSS e JavaScript puro**, sem bibliotecas ou frameworks.

## Uso de inteligência artificial

Usei o Claude (assistente de IA) como apoio durante todo o projeto: para organizar as etapas e os commits, sugerir e explicar o código de cada parte (HTML, CSS e JavaScript), adaptar o jogo para as cinco opções, criar o visual a partir das minhas referências e corrigir erros encontrados nos testes.

As decisões sobre o jogo foram minhas: a troca para a versão com lagarto e Spock, o tema inspirado na série e os ajustes de visual.