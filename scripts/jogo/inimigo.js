class Inimigo {
  constructor(escala, render, velocidade, offsetX) {
    this.renderizador = render;
    this.transform = new Transform(width - this.offsetX, 0, escala.x, escala.y);
    this.renderizador.setTransform(this.transform);
    this.transform.posicao.y = height - this.renderizador.altura;

    this.velocidade = velocidade;
    this.offsetX = offsetX;
  }

  mudaVelocidade(novaVelocidade) {
    this.velocidade = novaVelocidade;
  }

  mudaDelay(novoValor) {
    this.offsetX = novoValor;
  }

  move() {
    this.transform.posicao.x -= this.velocidade;
    if (this.transform.posicao.x < this.offsetX) {
      this.transform.posicao.x = width;
    }
  }

  show() {
    this.renderizador.render();
  }
}
