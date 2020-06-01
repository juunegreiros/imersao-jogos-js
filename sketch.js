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


//obstaculo
let obstaculo;
let imagesObstaculo = [];
let numeroFantasiaObstaculo = 0;


//goblin
let imagensGoblins = [];
let numeroFantasiaGoblin = 0;
let posicaoXGoblin = 800;
let velocidadeGoblin = 3;

//coracao
let imagemCoracao;
let totalDeVidas = 3;

function preload(){
  bgImg = loadImage("https://raw.githubusercontent.com/juunegreiros/imersao-jogos-js/master/assets/background/1.png");
  bgImg2 = loadImage("https://raw.githubusercontent.com/juunegreiros/imersao-jogos-js/master/assets/background/1.png");
  imagemPersonagem = loadImage("https://raw.githubusercontent.com/juunegreiros/imersao-jogos-js/master/assets/personagens/1/run.png")
  imagemObstaculo = loadImage('https://raw.githubusercontent.com/juunegreiros/imersao-jogos-js/master/assets/obstaculos/poring.png')
  // imagemCoracao = loadImage("assets/heart.png");
}

function setup() {
  createCanvas(600, 400);
  x2 = width;
  frameRate(32);
  personagem = new Personagem();
  obstaculo = new Obstaculo();
}

function keyPressed() {
  if (key == 'ArrowUp') {
    personagem.pula()
  }
}

function draw() {
  carregaCenario();
  movimentaCenario();

  obstaculo.show()
  obstaculo.move()

  if(personagem.colide(obstaculo)){
    noLoop()
  }
  //animacaoGoblins();
  exibeTotalDeVidas();

  personagem.show();
  personagem.move()
}


function animacaoGoblins(){
  image(imagensGoblins[numeroFantasiaGoblin], posicaoXGoblin, 215, 200, 200);
  numeroFantasiaGoblin++;
   if (numeroFantasiaGoblin > 27) {
     numeroFantasiaGoblin = 0;
   }
  posicaoXGoblin -= velocidadeGoblin;
  if (posicaoXGoblin < -400) {
     posicaoXGoblin = 550;
   }
}

// function exibeTotalDeVidas(){
//   if (totalDeVidas == 3){
//     image(imagemCoracao, 20, 20, 25, 25);
//     image(imagemCoracao, 50, 20, 25, 25);
//     image(imagemCoracao, 80, 20, 25, 25);
//   } else if (totalDeVidas == 2){
//     image(imagemCoracao, 20, 20, 25, 25);
//     image(imagemCoracao, 50, 20, 25, 25);
//   }  else if (totalDeVidas == 1){
//     image(imagemCoracao, 20, 20, 25, 25);
//   }
// }

function carregaCenario(){
  image(bgImg, x1, 0, width, height);
  image(bgImg2, x2, 0, width, height);
}

function movimentaCenario(){
  x1 -= velocidadeCenario;
  x2 -= velocidadeCenario;

  if (x1 < -width){
    x1 = width;
  }
  if (x2 < -width){
    x2 = width;
  }
}
