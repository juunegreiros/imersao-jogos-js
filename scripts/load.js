function loadFiles() {
  imagemBackground = loadImage("https://raw.githubusercontent.com/juunegreiros/imersao-jogos-js/master/assets/background/1.png");
  imagemPersonagem = loadImage("https://raw.githubusercontent.com/juunegreiros/imersao-jogos-js/master/assets/personagens/1/run.png")
  imagemInimigoPequeno = loadImage('https://raw.githubusercontent.com/juunegreiros/imersao-jogos-js/master/assets/inimigos/pequeno/walk.png')
  imagemGameOver = loadImage("https://raw.githubusercontent.com/juunegreiros/imersao-jogos-js/master/assets/gameover.png");
  imagemAbertura = loadImage("https://raw.githubusercontent.com/juunegreiros/imersao-jogos-js/master/assets/imgAbertura.png");
  trilhaSonora = loadSound('https://raw.githubusercontent.com/juunegreiros/imersao-jogos-js/master/assets/trilha_jogo.mp3');
  somDaColisao = loadSound('https://raw.githubusercontent.com/juunegreiros/imersao-jogos-js/master/assets/somColisao.mp3');
  somDoPulo = loadSound('https://raw.githubusercontent.com/juunegreiros/imersao-jogos-js/master/assets/somPulo.mp3');
}