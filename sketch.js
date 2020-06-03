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
  const inimigoPequeno = new Inimigo(50, 50, 10, -100)
  inimigoPequeno.sprite(imagemInimigoPequeno, 105, 100, 4, 7)

  const inimigoGrande = new Inimigo(100,100, 10, -500)
  inimigoGrande.sprite(imagemInimigoPequeno, 105, 100, 4, 7)

  inimigos.push(inimigoPequeno)
  inimigos.push(inimigoGrande)

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
