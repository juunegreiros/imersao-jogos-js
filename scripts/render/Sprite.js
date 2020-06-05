class Sprite extends Render {
  constructor(imagem, recorte) {
    super(imagem, recorte);
  }

  render() {
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
