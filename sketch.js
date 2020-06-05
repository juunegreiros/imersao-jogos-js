//inimigo
// let inimigo;
let inimigos = [];
let numeroFantasiaInimigo = 0;

//cenas
let imagemGameOver;
let imagemAbertura;
let cenaAtual = "abertura";
const cenas = {
  abertura,
  jogo: iniciaJogo,
};

let trilhaSonora;
let somDaColisao;
let somDoPulo;

function preload() {
  loadFiles();
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(32);
  personagem = new Personagem(createVector(0.5, 0.5));
  const inimigoPequeno = new Inimigo(createVector(0.5, 0.5), 10, -100);
  inimigoPequeno.sprite(imagemInimigoPequeno, 105, 100, 4, 7);

  const inimigoGrande = new Inimigo(createVector(1, 1), 10, -500);
  inimigoGrande.sprite(imagemInimigoPequeno, 105, 100, 4, 7);

  inimigos.push(inimigoPequeno);
  inimigos.push(inimigoGrande);

  cenario = new Cenario();
}

function keyPressed() {
  if (key == "ArrowUp") {
    personagem.pula();
    somDoPulo.play();
  }
}

function mouseClicked() {
  if (cenaAtual === "abertura") {
    trilhaSonora.loop();
    mudarCena("jogo");
  }
}

function draw() {
  cenas[cenaAtual]();
}

function mudarCena(novaCena) {
  cenaAtual = novaCena;
}
