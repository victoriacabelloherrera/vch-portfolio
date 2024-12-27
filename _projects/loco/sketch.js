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
  for (let i = 50; i < 400; i += 50) {
    for (let j = 50; j < 400; j += 50) {
      let distancia = dist(centroX, centroY, i, j);
      

      noFill();
      stroke(200 - i, i, 200 - j);
      strokeWeight(3);
      let offsetBig = map(sin(angulo + distancia), -1, 1, -20, 20);
      let rBig = 25 + offsetBig;
      rect(i, j, rBig, rBig);


      stroke(255, 0, 0); 
      let offsetSmall = map(cos(angulo + distancia), -1, 1, -10, 10);
      let rSmall = 10 + offsetSmall;
      rect(i, j, rSmall, rSmall);
    }
  }
  angulo += 0.1;
}
