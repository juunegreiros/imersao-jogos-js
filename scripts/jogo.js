function iniciaJogo() {
  carregaCenario();
  movimentaCenario();

  inimigo.show()
  inimigo.move()

  if (personagem.colide(inimigo)) {
    image(imagemGameOver, width / 2 - 200, height / 2);
    noLoop();
  }

  personagem.show();
  personagem.move()
}

function carregaCenario(){
  image(bgImg, x1, 0, width, height);
  image(bgImg2, x2, 0, width, height);
}

function movimentaCenario(){
  x1 -= velocidadeCenario;
  x2 -= velocidadeCenario;

  if (x1 < -width){
    x1 = width;
  }
  if (x2 < -width){
    x2 = width;
  }
}
