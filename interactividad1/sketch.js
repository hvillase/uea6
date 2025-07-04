let frase1=" ";
let frase2=" ";
let img1;
let img2;
let estado = 0;

function preload(){
  img1 = loadImage('assets/01.png');
  img2 = loadImage('assets/02.png');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  textSize(50);
  text(frase1, 200, 200);
  text(frase2, 200, 300);

  if(estado == 1){
    image(img1, 0, 0);
  }
  
  if(estado == 2){
    image(img2, 0, 0);
  }
  
}

function keyPressed(){
  if(key === 'q'){
    frase1="una frase con la letra q"
  }
  if(key === 'w'){
    frase2="otra frase con letra W"
  }
  if(key === 'e'){
    estado=1;
  }
  if(key==='r'){
    estado=2;
  }
  if(key==='t'){
    estado=0;
    frase1=" ";
    frase2=" ";
  }
}

// colaca interacción con las letras de la primera linea del teclado

// me gustaría que cuando la usuaria presione el teclado pase esto:

// por qué tal color o tal forma, qué quiero decir con eso