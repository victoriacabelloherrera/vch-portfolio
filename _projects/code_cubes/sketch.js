
function setup() {
  let canvas = createCanvas(512, 512); 
  canvas.parent('simple-sketch-holder');
  
}

function draw() {
  background(220);

  
  // Dibujar un fondo oscuro
  fill(0);
  rect(0, 0, width, height);
  
  fill(255);
  noStroke();
  arc(200, 200, 200, 200, 0, PI);
  fill(173, 181, 189)
  arc(200, 200, 200, 200, PI, 0);
   
}
