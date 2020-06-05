class Personagem extends GameObject {
  constructor(escala) {
    super();
    this.recorte = new Recorte(0, 0, 270, 220);
    this.yInicial = height - this.recorte.altura * escala.y;
    this.transform = new Transform(20, this.yInicial, escala.x, escala.y);
    this.altura = this.recorte.altura * this.transform.escala.y;
    this.largura = this.recorte.largura * this.transform.escala.x;

    this.gravidade = 3;
    this.vy = 0;
  }

  pula() {
    if (this.transform.posicao.y == this.yInicial) {
      this.vy = -35;
    }
  }

  colide(obstaculo) {
    let precisao = 0.8;
    let personagemX = this.x;
    let personagemY = this.y;
    let obstaculoX = obstaculo.x;
    let obstaculoY = obstaculo.y;
    return false;
    return collideRectRect(
      personagemX,
      personagemY,
      this.largura * precisao,
      this.altura * precisao,
      obstaculoX,
      obstaculoY,
      obstaculo.largura * precisao,
      obstaculo.altura * precisao
    );
  }

  move() {
    this.transform.posicao.y += this.vy;
    this.vy += this.gravidade;

    if (this.transform.posicao.y > this.yInicial) {
      this.transform.posicao.y = this.yInicial;
    }
  }

  show() {
    this.desenhaImagem(imagemPersonagem, this.transform, this.recorte);
    /*this.imagemX += 220;
    if (this.imagemX > 220 * 3) {
      this.imagemX = 0;
      this.imagemY += 270;
    }
    if (this.imagemY > 270 * 3) {
      this.imagemY = 0;
    }
    */
  }
}
