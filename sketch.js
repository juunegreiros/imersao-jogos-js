//inimigo
// let inimigo;
let inimigos = [];
let numeroFantasiaInimigo = 0;

//cenas
let imagemGameOver;
let imagemAbertura;
let cenaAtual = 'abertura'
const cenas = {
  abertura,
  jogo: iniciaJogo
}

function preload(){
  loadFiles()
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(32);
  personagem = new Personagem()
  inimigos.push(new Inimigo())
  
  cenario = new Cenario()
}

function keyPressed() {
  if (key == 'ArrowUp') {
    personagem.pula()
  }
}

function mouseClicked() {
  if(cenaAtual === 'abertura') {
    mudarCena('jogo')
  }
}

function draw() {
  cenas[cenaAtual]()
}

function mudarCena(novaCena) {
  cenaAtual = novaCena
}
