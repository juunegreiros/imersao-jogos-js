class Inimigo {
  constructor() {
    this.largura =  50
    this.altura = 50
    this.x = width
    this.y = height - this.altura -20

    this.velocidade = 10;

    this.delay = -100

    // sprite
    this.imagem = imagemInimigo
    this.linhas = 4
    this.colunas = 7
    this.imagemX = 0
    this.imagemY = 0
    this.larguraImagem = 105
    this.alturaImagem = 100
  }

  sprite(imagem, larguraImagem, alturaImagem, linhas, colunas){
    this.imagem = imagem
    this.larguraImagem = larguraImagem
    this.alturaImagem = alturaImagem
    this.linhas = linhas
    this.colunas = colunas
  }

  velocidade(novaVelocidade) {
    this.velocidade = novaVelocidade
  }

  delay(novoValor) {
    this.delay = novoValor
  }

  move() {
    this.x -= this.velocidade;
    if (this.x < this.delay) {
      this.x = width;
    }
  }

  show() {
    image(this.imagem, this.x, this.y, this.largura, this.altura, this.imagemX, this.imagemY, this.larguraImagem, this.alturaImagem);

    this.imagemX+=this.larguraImagem
    if(this.imagemX > this.larguraImagem * (this.linhas -1)) {
      this.imagemX = this.alturaImagem
      this.imagemY += this.alturaImagem
    }
    if(this.imagemY > this.alturaImagem * (this.colunas - 1)) {
      this.imagemY = 0
    }
  }
}
