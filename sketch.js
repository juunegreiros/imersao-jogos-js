//cenario
let bgImg;
let x1 = 0;
let x2;
let velocidadeCenario = 3;

//personagem
let personagem;
let imagemPersonagem;
let images = [];
// let fantasiaPersonagem = 1;

//inimigo
let inimigo;
let imagesInimigo = [];
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
  x2 = width;
  frameRate(32);
  personagem = new Personagem();
  inimigo = new Inimigo();
}

function keyPressed() {
  if (key == 'ArrowUp') {
    personagem.pula()
  }
}

function mouseClicked() {
  if(cenaAtual === 'abertura') {
    mudarCena('jogo')
  } else {
    mudarCena('abertura')
  }
}

function draw() {
  cenas[cenaAtual]()
}

function mudarCena(novaCena) {
  cenaAtual = novaCena
}
