let img;

function preload() {
    fondo = loadImage("thumbnail.png");
  }

  function setup() {
    let canvas = createCanvas(512, 512); 
  canvas.parent('simple-sketch-holder');
  }
  
  function draw() {
    background(220);
    

    imageMode(CENTER);
    image(fondo, width / 2, height / 2);
  }