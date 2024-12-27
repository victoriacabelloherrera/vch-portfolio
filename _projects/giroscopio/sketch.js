let particulas = [];
let trail = []; // Array para guardar el rastro de las partículas
let cantidad = 3; // Número de partículas
let tamano = 40; 
let velocidad = 0.002; 
let grosor = 5; 
let colores; 

function setup() {
  let canvas = createCanvas(512, 512, WEBGL); 
  canvas.parent('simple-sketch-holder'); // Vincula el lienzo al contenedor HTML
  
  for (let i = 0; i < cantidad; i++) {
    particulas.push(new Mover(0.01, 0.05, i)); // Inicializa las partículas
  }

  colores = new Colorear(); // Inicializa los colores dinámicos
  
  noStroke();
  background(0); // Fondo negro
}

function draw() {
  // Actualiza el color y las partículas
  let angulo = map(sin(frameCount * velocidad), -1, 1, -QUARTER_PI, QUARTER_PI);
  
  colores.actualizar();
  let cr = colores.r; 
  let cg = colores.g; 
  let cb = colores.b; 
  
  directionalLight(0, 0, cb, -width / 2, -height / 2, 0);
  directionalLight(255 - cr, 255 - cg, 0, -width / 2, height / 2, 0);
  
  specularMaterial(cr, cg, cb); // Material de las partículas
  
  // Rotación del espacio 3D
  rotateX(angulo * 10);
  rotateY(angulo * 10);
  rotateZ(angulo * 10);
  
  // Actualiza la posición de la partícula
  particulas[0].actualizar();
  
  // Guarda la posición de la partícula para crear el rastro
  trail.push(createVector(particulas[0].posx, particulas[0].posy, particulas[0].posz));
  
  // Dibuja el rastro de las partículas
  for (let i = 0; i < trail.length; i++) {
    push();
    let alpha = map(i, 0, trail.length, 255, 0); // Transparencia que se desvanece con el tiempo
    fill(cr, cg, cb, alpha); // Color de las partículas con transparencia
    noStroke();
    translate(trail[i].x, trail[i].y, trail[i].z);
    sphere(tamano * 0.1); // Usamos esferas para el rastro
    pop();
  }

  // Limita el tamaño del rastro
  if (trail.length > 1000) {
    trail.splice(0, 10); // Elimina los elementos más antiguos para no sobrecargar la memoria
  }
  
  // Dibuja las partículas en movimiento
  translate(particulas[0].posx, particulas[0].posy, particulas[0].posz);
  push();
  torus(tamano, grosor); // Dibuja los torus de la partícula
  pop();
}

// Clase para manejar las partículas
function Mover(r, s, i) {
  this.posx = random(-width / 2, width / 2);  
  this.posy = random(-height / 2, height / 2);  
  this.posz = random(-height / 2, 0); 

  this.xn = 0.001 * i + 0.001;
  this.yn = 0.001 * i + 0.001;
  this.zn = 0.001 * i + 0.001;

  this.thetaX = random(-PI, PI);
  this.thetaY = random(-PI, PI);
  this.thetaZ = random(-PI, PI);

  this.thetaxl = s;
  this.thetayl = s;
  this.thetazl = s;
  this.rate = s; 

  // Actualiza la posición de la partícula
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
  
  this.rn = random(100);
  this.gn = random(100);
  this.bn = random(100);
  
  // Actualiza los colores
  this.actualizar = function() {
    this.rn += 0.1;
    this.gn += 0.1;
    this.bn += 0.1;
    
    this.r = map(noise(this.rn), 0, 1, 50, 255); 
    this.g = map(noise(this.gn), 0, 1, 50, 255);  
    this.b = map(noise(this.bn), 0, 1, 50, 255); 
  }
}
