class Render {
  constructor(imagem, recorte) {
    if (this.constructor == Render) {
      throw new Error("Não deve instanciar classe abstrata");
    }
    this.transform;
    this.recorte = recorte;
    this.imagem = imagem;
  }

  get altura() {
    return this.recorte.altura * this.transform.escala.y;
  }
  get largura() {
    return this.recorte.largura * this.transform.escala.x;
  }
  setTransform(transform) {
    this.transform = transform;
  }

  render() {}
}
