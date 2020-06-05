class GameObject {
  desenhaImagem(imagem, transform, recorte) {
    image(
      imagem,
      transform.posicao.x,
      transform.posicao.y,
      recorte.largura * transform.escala.x,
      recorte.altura * transform.escala.y,
      recorte.x,
      recorte.y,
      recorte.largura,
      recorte.altura
    );
  }
}
