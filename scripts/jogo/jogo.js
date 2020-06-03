//cenario
let imagemBackground;
let x1 = 0;
let x2 = 0;
let velocidadeCenario = 3;
let cenario
//personagem
let personagem;
let imagemPersonagem;
let images = [];

function iniciaJogo() {
  cenario.show()
  cenario.move()

  inimigos.forEach(inimigo => {
    if (personagem.colide(inimigo)) {
      image(imagemGameOver, width / 2 - 200, height / 2)
      noLoop()
    }

    inimigo.show()
    inimigo.move()
  })
  personagem.show()
  personagem.move()
}
