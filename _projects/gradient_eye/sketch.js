let angle = 0;
let movimiento = 10;
let radio = 60;
let cx1 = 30;
let cy1 = 500;

function setup() {
  createCanvas(600, 600);
  frameRate(20); //velocidad
  angleMode(DEGREES);
}

function draw() {
  push();

  // PRIMER FOR: Bucle for para iterar sobre los valores de la variable "x" desde 0 hasta ocupar todo el ancho de la pantalla (width).

  for (let x = 0; x < width; x++) {
    let c = lerpColor(color(92, 178, 112), color(244, 242, 105), x / width);
    stroke(c);
    line(x, 0, x, height);
  }
  pop();

  strokeWeight(1);
  //console.log("X: " + mouseX + " Y:" + mouseY);
  //rectangulos
  fill(34, 111, 84);
  rect(482, 10, 20, 200);
  fill(135, 195, 143);
  rect(430, 50, 20, 200);
  fill(218, 44, 56);
  rect(530, 36, 100, 130);
  fill(0);
  rect(50, 400, 5, 200);
  fill(51, 0, 102);

  //rectangulos
  push();

  noStroke();
  let x = 200;
  let y = 300;
  let ancho = 150;
  let altura = 150;

  // SEGUNDO FOR: Bucle for para iterar a través de los valores de i desde el valor inicial de x (200) hasta el valor final de x + ancho (200 + 150)

  for (let i = x; i < x + ancho; i++) {
    let t = (i - x) / ancho; // var t para controlar interpolacion de gradientes, "t" variará entre 0 y 1 a medida que "i" se mueve a través de los valores de "x" a "x + ancho".
    let c1 = color(159, 134, 192); //lila
    let c2 = color(94, 84, 142); //lila oscuro
    let c = lerpColor(c1, c2, t);
    fill(c);
    rect(i, y, 1, altura); //  La posición horizontal del rectángulo se especifica con la variable "i", y de eje vertical del rectangulo, 1 de dibuja un rectángulo de ancho 1 (píxel), altura del rectangulo.
  }

  //if (mouseX < 100) {
  //cuando en la x llego a 100 aparece el cuadrado lila oscuro
  //fill(159, 134, 192); //relleno lila
  //rect(200, 300, 150, 150); // cuadrado 1
  // } else if (mouseX >= 100 && mouseX < 300) {
  // Usando "&&" para combinar ambos valores. Else para que se muestre el segundo cuadrado y el tercero por si avanzamos a 300 en la variable x
  // fill(94, 84, 142); // relleno lila oscuro
  //rect(230, 323, 90, 90); // cuadrado 2
  // } else if (mouseX >= 300) {
  // fill(35, 25, 66); // relleno violeta
  //rect(255, 350, 40, 40); //cuadrado 3
  // }
  pop();

  // demás rectangulos
  fill(0);
  rect(50, 400, 130, 10);
  rect(100, 500, 50, 86);
  rect(285, 152, 50, 143);
  rect(482, 391, 30, 90);
  rect(347, 633, 61, 60);

  //esfera
  push();
  noStroke();
  fill(22, 138, 173);
  ellipse(
    350,
    100,
    100 + 5 * sin(((movimiento + 1) * frameCount) / 1),
    100 + 5 * sin(((movimiento + 1) * frameCount) / 1)
  );

  fill(0, 102);
  ellipse(
    365,
    120,
    100 + 5 * sin(((movimiento + 1) * frameCount) / 4),
    100 + 10 * sin(((movimiento + 100) * frameCount) / 4)
  );
  pop();

  fill(255, 153, 51);
  ellipse(325, 190, 50, 50);
  fill(255);
  strokeWeight(3);
  fill(255, 255, 0);
  //triangle(200, 52, 630, 320, 640, 380);
  fill(255);

  //todo el tema ojo
  push();
  translate(500, 300); //con esto ubico el circulo en el sketch
  rotate(angle); //variable
  angle++;
  ellipse(0, 0, 200, 100); //los dos primeros parametros marcan en que radio quiero que se mueva, en este caso yo queria que se mueva sobre si mismo y por eso es doble 0
  pop();

  fill(0, 0, 255);
  ellipse(500, 300, 100, 100);
  fill(255, 0, 127);
  ellipse(500, 300, 40, 40);
  fill(10);
  ellipse(500, 300, 10, 10);

  strokeWeight(1);
  fill(255);
  strokeWeight(0);
  ellipse(140, 540, 10, 10);

  //linea
  strokeWeight(1);
  line(10, 500, 310, 30);
  strokeWeight(2);
  line(20, 20, 200, 200);
  line(300, 300, 30, 200);
  line(588, 10, 20, 200);
  line(400, 330, 200, 20);
  line(400, 400, 200, 20);
  line(240, 40, 40, 40);
  strokeWeight(8);
  line(200, 500, 900, 400);
  strokeWeight(3);
  line(200, 200, 200, 55);
  line(200, 600, 900, 400);

  //bezier
  //cx1 = mouseX;
  fill(188, 71, 73);
  cy1 = mouseY;
  bezier(200, 500, 200, 20, cx1, cy1, 50, 50);
}
