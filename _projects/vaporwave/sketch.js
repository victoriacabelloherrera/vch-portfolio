let fondo;
let frameSize = 10; // tamaño inicial del marco
let resonance;

function preload() {
  fondo = loadImage("lineasneon.jpg");
  resonance = loadSound("resonance.wav");
}

function setup() {
  let canvas = createCanvas(600, 400, WEBGL); 
  canvas.parent('simple-sketch-holder');
  resonance.play();
  resonance.loop();
}

function draw() {
  background(250);

  // figuras en el centro
  translate(0, 0, 0);

  // material normal
  normalMaterial();

  // dibujar el marco
  push();
  noFill();
  stroke(204, 102, 255); 
  strokeWeight(3);
  translate(0, 0, -80); 
  box(width + frameSize, height + frameSize, frameSize); 
  pop();

  
  frameSize = 10 + sin(frameCount * 0.03) * 20;  
  // cono
  push();
  translate(-120, 0, 0);
  rotateZ(frameCount * 0.01);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.1);
  cone(40, 70);
  pop();

  // torus
  push();
  translate(120, 0, 0);
  rotateZ(frameCount * 0.01);
  rotateX(frameCount * 0.04);
  rotateY(frameCount * 0.04);
  torus(40, 10);
  pop();

  
  push();
  translate(0, 0, -90); 
  texture(fondo);
  plane(width, height); 
  pop();
}
