class Personagem {
  constructor() {
    this.altura = 135
    this.largura = 110
    this.x = 20
    this.yInicial = height - this.altura
    this.y = this.yInicial
    this.gravidade = 3
    this.vy = 0
    this.imagemX = 0
    this.imagemY = 0
  }

  pula() {
    if (this.y == height - this.altura) {
      this.vy = -35;
    }
  }

  colide(obstaculo) {
    let precisao = .8
    let personagemX = this.x;
    let personagemY = this.y;
    let obstaculoX = obstaculo.x;
    let obstaculoY = obstaculo.y;
    return false
    return collideRectRect(personagemX, personagemY, this.largura * precisao, this.altura * precisao, obstaculoX, obstaculoY, obstaculo.largura * precisao, obstaculo.altura * precisao);
  }

  move() {
    this.y += this.vy
    this.vy += this.gravidade

    if(this.y > this.yInicial) {
      this.y = this.yInicial
    }
  }

  show() {
    image(imagemPersonagem, this.x, this.y, this.largura, this.altura, this.imagemX, this.imagemY, 220, 270);

    this.imagemX+=220
    if(this.imagemX > 220 * 3) {
      this.imagemX = 0
      this.imagemY += 270
    }
    if(this.imagemY > 270 * 3) {
      this.imagemY = 0
    }
  }
}
