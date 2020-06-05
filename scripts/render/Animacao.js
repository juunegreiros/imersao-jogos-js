class Animacao extends Render {
  constructor(imagem, recorte, linhas, colunas) {
    super(imagem, recorte);
    this.linhas = linhas;
    this.colunas = colunas;
    this.linhaAtual = 0;
    this.colunaAtual = 0;
    this.frames = 0;
  }

  update() {
    this.recorte.x = this.recorte.largura * this.colunaAtual;
    this.recorte.y = this.recorte.altura * this.linhaAtual;

    this.frames++;
    this.colunaAtual = this.frames % this.colunas;
    this.linhaAtual = parseInt((this.frames / this.colunas) % this.linhas);
  }

  render() {
    this.update();
    image(
      this.imagem,
      this.transform.posicao.x,
      this.transform.posicao.y,
      this.recorte.largura * this.transform.escala.x,
      this.recorte.altura * this.transform.escala.y,
      this.recorte.x,
      this.recorte.y,
      this.recorte.largura,
      this.recorte.altura
    );
  }
}
