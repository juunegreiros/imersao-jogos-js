class Inimigo {
  constructor() {
    this.largura =  50
    this.altura = 50
    this.x = width
    this.y = height - this.altura
    this.velocidade = 10;
    this.imagemX = 0
    this.imagemY = 0
    this.proporcaoX = 105
    this.proporcaoY = 100
  }

  move() {
    this.x -= this.velocidade;
    if (this.x < -150) {
      this.x = 550;
    }
  }

  show() {
    image(imagemInimigo, this.x, this.y, this.largura, this.altura, this.imagemX, this.imagemY, this.proporcaoX, this.proporcaoY);

    this.imagemX+=this.proporcaoX
    if(this.imagemX > this.proporcaoX * 3) {
      this.imagemX = this.proporcaoY
      this.imagemY += this.proporcaoY
    }
    if(this.imagemY > this.proporcaoY * 6) {
      this.imagemY = 0
    }
  }
}
