class Personagem {
  constructor(escala, render) {
    this.transform = new Transform(20, 0, escala.x, escala.y);
    this.renderizador = render;
    this.renderizador.setTransform(this.transform);

    this.yInicial = height - this.renderizador.altura;
    this.transform.posicao.y = this.yInicial;
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
    this.renderizador.render();
  }
}
