let angulo = 0;

function setup() {
  let canvas = createCanvas(512, 512);
  canvas.parent('simple-sketch-holder');
  rectMode(CENTER);
}

function draw() {
  background(0);
  let centroX = width / 2;
  let centroY = height / 2;
  let espacio = 65; 
  let inicioX = centroX - 3 * espacio; 
  let inicioY = centroY - 3 * espacio;

  for (let i = inicioX; i <= centroX + 3 * espacio; i += espacio) {
    for (let j = inicioY; j <= centroY + 3 * espacio; j += espacio) {
      let distancia = dist(centroX, centroY, i, j);

      noFill();
      stroke(200 - i % 255, i % 255, 200 - j % 255);
      strokeWeight(3);
      let movGrande = map(sin(angulo + distancia), -1, 1, -20, 20); 
      let recGrande = 40 + movGrande; 
      rect(i, j, recGrande, recGrande);

      stroke(255, 0, 0);
      let movChico = map(cos(angulo + distancia), -1, 1, -10, 10); 
      let recChico = 15 + movChico; 
      rect(i, j, recChico, recChico);
    }
  }
  angulo += 0.1;
}

