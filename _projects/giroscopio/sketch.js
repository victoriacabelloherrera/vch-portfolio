let particulas = [];

let cantidad = 3; // num de particulas
let tamano = 40; 
let velocidad = 0.002; 
let grosor = 5; 
let colores; 

function setup() {
  let canvas = createCanvas(512, 512, WEBGL); 
  canvas.parent('simple-sketch-holder');
  for (let i = 0; i < cantidad; i++) {
    particulas.push(new Mover(0.01, 0.05, i));
  }

  colores = new Colorear(); 
  
  noStroke();
  background(0, 255); 
}

function draw() {
   background(0, 20);
  let angulo = map(sin(frameCount * velocidad), -1, 1, -QUARTER_PI, QUARTER_PI);
  
  colores.actualizar();
  let cr = colores.r; 
  let cg = colores.g; 
  let cb = colores.b; 
  
  directionalLight(0, 0, cb, -width / 2, -height / 2, 0);
  directionalLight(255 - cr, 255 - cg, 0, -width / 2, height / 2, 0);
  

  specularMaterial(cr, cg, cb);
  
  // rotacion de espacio 3D
  rotateX(angulo * 10);
  rotateY(angulo * 10);
  rotateZ(angulo * 10);
  

  particulas[0].actualizar();
  

  translate(particulas[0].posx, particulas[0].posy, particulas[0].posz);
  push();

  // dibujo de particulas
  for (let i = 0; i < particulas.length; i++) {
    rotateX(angulo); 
    rotateY(angulo); 
    rotateZ(angulo); 
    push();
    rotateX(angulo * (i + 0.25) * 10); 
    rotateY(angulo * (i + 0.25) * 10);
    rotateZ(angulo * (i + 0.25) * 10);
    pop();
    
    // diferentes tamaños de torus
    torus((tamano * i + tamano) * 0.5, grosor); // Toro más pequeño
    torus(tamano * i + tamano, grosor, 4, 12); // Toro más grande
  }
  pop();
}


function Mover(r, s, i) {
  this.posx = random(-width / 2, width / 2);  
  this.posy = random(-height / 2, height / 2);  
  this.posz = random(-height / 2, 0); 


  this.xn = 0.001 * i + 0.001;
  this.yn = 0.001 * i + 0.001;
  this.zn = 0.001 * i + 0.001;

  // angulos de rotación
  this.thetaX = random(-PI, PI);
  this.thetaY = random(-PI, PI);
  this.thetaZ = random(-PI, PI);

 
  this.thetaxl = s;
  this.thetayl = s;
  this.thetazl = s;
  this.rate = s; 

  // funcion para actualizar la posicion de la partícula
  this.actualizar = function() {
    if (random(1) < this.rate) {
      this.thetaxl *= -1; 
    }
    if (random(1) < this.rate) {
      this.thetayl *= -1; 
    }
    if (random(1) < this.rate) {
      this.thetazl *= -1; 
    }
    

    this.thetaX += this.thetaxl;
    this.thetaY += this.thetayl;
    this.thetaZ += this.thetazl;
    
    this.xn += 0.01;
    this.yn += 0.01;
    this.zn += 0.01;

  
    this.posx = map(noise(this.xn), 0, 1, -width * 0.6, width * 0.6);
    this.posy = map(noise(this.yn), 0, 1, -height * 0.6, height * 0.6);
    this.posz = map(noise(this.zn), 0, 1, -height * 0.6, 0);
  }
}

// Clase para manejar colores dinámicos
function Colorear() {
  this.r = random(255); 
  this.g = random(255); 
  this.b = random(255); 
  
  //  ruido para los colores
  this.rn = random(100);
  this.gn = random(100);
  this.bn = random(100);
  
  // actualizar los colores
  this.actualizar = function() {
    this.rn += 0.1;
    this.gn += 0.1;
    this.bn += 0.1;
    
    this.r = map(noise(this.rn), 0, 1, 50, 255); 
    this.g = map(noise(this.gn), 0, 1, 50, 255);  
    this.b = map(noise(this.bn), 0, 1, 50, 255); 
  }
}
