class Inimigo {
  constructor(largura, altura, velocidade, delay) {
    this.largura =  largura
    this.altura = altura

    this.velocidade = velocidade;

    this.delay = delay

    this.x = width - this.delay
    this.y = height - this.altura -20

    this.imagem
    this.linhas
    this.colunas
    this.imagemX = 0
    this.imagemY = 0
    this.larguraImagem
    this.alturaImagem
  }

  sprite(imagem, larguraImagem, alturaImagem, linhas, colunas){
    this.imagem = imagem
    this.larguraImagem = larguraImagem
    this.alturaImagem = alturaImagem
    this.linhas = linhas
    this.colunas = colunas
  }

  mudaVelocidade(novaVelocidade) {
    this.velocidade = novaVelocidade
  }

  mudaDelay(novoValor) {
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
