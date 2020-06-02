//cenario
let imagemBackground;
let x1 = 0;
let x2 = 0;
let velocidadeCenario = 3;

//personagem
let personagem;
let imagemPersonagem;
let images = [];

function iniciaJogo() {
  const cenario = new Cenario(imagemBackground)
  cenario.show()
  cenario.move()
  // carregaCenario()
  // movimentaCenario()

  inimigo.show()
  inimigo.move()
  personagem.show();
  personagem.move()

  if (personagem.colide(inimigo)) {
    image(imagemGameOver, width / 2 - 200, height / 2);
    noLoop();
  }


}
