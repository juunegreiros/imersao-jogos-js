class Inimigo extends GameObject {
  constructor(escala, velocidade, delay) {
    super();
    this.recorte = new Recorte(0, 0, 100, 105);

    this.tranform = new Transform(
      width - this.delay,
      height - this.recorte.altura * escala.y - 20,
      escala.x,
      escala.y
    );

    this.largura = this.recorte.largura * this.tranform.escala.x;
    this.altura = this.recorte.altura * this.tranform.escala.y;

    this.velocidade = velocidade;

    this.delay = delay;

    this.imagem;
    this.linhas;
    this.colunas;
    this.imagemX = 0;
    this.imagemY = 0;
    this.larguraImagem;
    this.alturaImagem;
  }

  sprite(imagem, larguraImagem, alturaImagem, linhas, colunas) {
    this.imagem = imagem;
    this.larguraImagem = larguraImagem;
    this.alturaImagem = alturaImagem;
    this.linhas = linhas;
    this.colunas = colunas;
  }

  mudaVelocidade(novaVelocidade) {
    this.velocidade = novaVelocidade;
  }

  mudaDelay(novoValor) {
    this.delay = novoValor;
  }

  move() {
    this.tranform.posicao.x -= this.velocidade;
    if (this.tranform.posicao.x < this.delay) {
      this.tranform.posicao.x = width;
    }
  }

  show() {
    this.desenhaImagem(this.imagem, this.tranform, this.recorte);
    /*
    this.imagemX += this.larguraImagem;
    if (this.imagemX > this.larguraImagem * (this.linhas - 1)) {
      this.imagemX = this.alturaImagem;
      this.imagemY += this.alturaImagem;
    }
    if (this.imagemY > this.alturaImagem * (this.colunas - 1)) {
      this.imagemY = 0;
    }
    */
  }
}
