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

  const spritePersonagem = new Sprite(
    imagemPersonagem,
    new Recorte(0, 0, 270, 220)
  );
  const escalaPersonagem = createVector(0.5, 0.5);
  personagem = new Personagem(escalaPersonagem, spritePersonagem);

  const animacaoInimigo = new Animacao(
    imagemInimigoPequeno,
    new Recorte(0, 0, 100, 105),
    7,
    4
  );
  const animacaoInimigoGrande = new Animacao(
    imagemInimigoPequeno,
    new Recorte(0, 0, 100, 105),
    7,
    4
  );
  const escalaInimigoPequeno = createVector(0.5, 0.5);
  const escalaInimigoGrande = createVector(1, 1);

  const inimigoPequeno = new Inimigo(
    escalaInimigoPequeno,
    animacaoInimigo,
    10,
    -100
  );

  const inimigoGrande = new Inimigo(
    escalaInimigoGrande,
    animacaoInimigoGrande,
    10,
    -500
  );

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
