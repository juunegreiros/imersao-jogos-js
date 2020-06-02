class Cenario {
  constructor() {
    this.imagem = imagemBackground
    this.velocidade = 3
    this.x1 = 0
    this.x2 = width
  }

  show() {
    image(this.imagem, this.x1, 0, width, height);
    image(this.imagem, this.x2, 0, width, height);
  }

  move() {
    this.x1 = this.x1 - this.velocidade
    this.x2 -= this.velocidade

    if (this.x1 < -width){
      this.x1 = width;
    }
    if (this.x2 < -width){
      this.x2 = width;
    }
  }

  mudaVelocidade(novaVelocidade) {
    this.velocidade = novaVelocidade
  }
}
// function carregaCenario(){
//   image(imagemBackground, x1, 0, width, height);
//   image(imagemBackground, x2, 0, width, height);
// }
//
// function movimentaCenario(){
//   x1 -= velocidadeCenario;
//   x2 -= velocidadeCenario;
//
//   if (x1 < -width){
//     x1 = width;
//   }
//   if (x2 < -width){
//     x2 = width;
//   }
// }
