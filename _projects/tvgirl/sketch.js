let ojo1 = 240;
let ojo2 = 350;
let velocidad = 1; 
let limiteizq = 214;
let limiteder = 262;
let movdeOjos = true;
let clickmovimiento = false;
let movdeBoca = false;

function setup() {
  let canvas = createCanvas(512, 512);
  canvas.parent('simple-sketch-holder');
}

function draw() {
  background("#FA3869");

  // cara
  noFill();
  stroke("#000000");
  strokeWeight(2);
  bezier(391, 188, 408, 391, 392, 368, 262, 355);
  line(212, 312, 262, 354);

  // sombras de la cara/decorado
  noStroke();
  fill("#FA4C78");
  quad(248, 75, 336, 359, 382, 166, 249, 77);
  quad(364, 228, 397, 230, 388, 325, 339, 359);
  quad(184, 191, 244, 242, 308, 265, 249, 76);
  fill("#285DB4");
  quad(188, 233, 247, 274, 359, 387, 187, 45);

  // ojos
  fill("#ffffff");
  noStroke();

  fill(0);
  ellipse(ojo1, 201, 20, 20);
  ellipse(ojo2, 201, 20, 20);

  if (clickmovimiento) {
    if (movdeOjos) {
      ojo1 += velocidad;
      ojo2 += velocidad;
    } else {
      ojo1 -= velocidad;
      ojo2 -= velocidad;
    }

    if (ojo1 >= limiteder || ojo1 <= limiteizq) {
      movdeOjos = !movdeOjos;
    }
  }

  bezier(278, 194, 255, 188, 228, 187, 210, 197); //ojo izq
  bezier(386, 190, 368, 185, 339, 188, 331, 196); // ojo der
  bezier(200, 194, 226, 180, 254, 180, 281, 189); //sombra izq
  bezier(330, 193, 350, 182, 381, 181, 388, 185); //sombra der
  bezier(265, 206, 242, 213, 222, 211, 209, 206); // parte de abajo
  bezier(373, 200, 360, 210, 346, 213, 336, 209); //parte de abajo

  //nariz
  bezier(351, 250, 353, 257, 329, 253, 351, 249);
  bezier(334, 257, 322, 260, 322, 253, 333, 252);

  //boca
  bezier(317, 304, 399, 292, 361, 295, 366, 291);
  bezier(373, 316, 355, 323, 362, 306, 343, 323);
  if (movdeBoca) {
    bezier(303, 299, 312, 301, 319, 303, 335, 299);
  }

  // cejas
  bezier(287, 170, 268, 157, 236, 159, 208, 173);
  bezier(375, 161, 365, 139, 331, 165, 323, 170);

  // flequillo y pelo
  fill(0);
  stroke("#000000");
  strokeWeight(2);
  beginShape();
  vertex(395, 168);
  bezierVertex(423, 213, 441, 261, 435, 359);
  endShape(CLOSE);

  fill(0);
  stroke("#000000");
  strokeWeight(2);
  beginShape();
  vertex(262, 35);
  bezierVertex(367, 29, 412, 67, 414, 203);
  endShape(CLOSE);

  fill(0);
  stroke("#000000");
  strokeWeight(2);
  beginShape();
  vertex(268, 38);
  bezierVertex(214, 131, 188, 212, 101, 289);
  endShape(CLOSE);

  fill(0);
  stroke("#000000");
  strokeWeight(2);
  beginShape();
  vertex(268, 38);
  bezierVertex(214, 131, 188, 212, 101, 289);
  endShape(CLOSE);

  fill(0);
  stroke("#000000");
  strokeWeight(2);
  beginShape();
  vertex(265, 41);
  bezierVertex(171, 42, 171, 42, 98, 288);
  endShape(CLOSE);

  fill(0);
  stroke("#000000");
  strokeWeight(2);
  beginShape();
  vertex(226, 61);
  bezierVertex(295, 103, 400, 173, 300, 46);
  endShape(CLOSE);

  fill(0);
  stroke("#000000");
  strokeWeight(2);
  beginShape();
  vertex(209, 43);
  bezierVertex(101, 53, 76, 130, 114, 216);
  endShape(CLOSE);

  //mas pelo
  bezier(188, 183, 184, 333, 212, 523, 58, 333);
  bezier(187, 247, 222, 279, 209, 314, 186, 318);
  bezier(222, 332, 214, 365, 187, 100, 164, 406);
  bezier(100, 114, 69, 184, 56, 249, 190, 328);
  bezier(79, 196, 54, 251, 58, 279, 179, 312);
  bezier(407, 224, 394, 271, 404, 376, 434, 416);
  bezier(415, 230, 452, 261, 462, 338, 425, 387);
  bezier(395, 187, 450, 225, 406, 291, 424, 338);
  bezier(395, 187, 374, 225, 406, 291, 424, 338);
  bezier(401, 272, 382, 331, 382, 396, 424, 393);
  bezier(398, 343, 204, 400, 383, 462, 425, 392);
  bezier(211, 311, 288, 353, 259, 358, 207, 341);
  bezier(73, 252, 16, 391, 72, 413, 151, 400);
  bezier(188, 207, 115, 185, 80, 291, 178, 173);

  // rellenando partes vacias del pelo
  ellipse(86, 266, 60, 60);
  ellipse(149, 212, 60, 60);
  ellipse(396, 187, 30, 100);
  ellipse(418, 311, 30, 100);
  ellipse(418, 311, 30, 100);
  ellipse(410, 271, 30, 30);
  ellipse(264, 50, 30, 30);

  // cuello y otros arreglos
  bezier(336, 363, 300, 391, 313, 421, 311, 465);
  bezier(256, 339, 181, 356, 313, 359, 337, 363);
}

function mousePressed() {
  clickmovimiento = !clickmovimiento;
  if (mouseButton === RIGHT) {
    movdeBoca = !movdeBoca;
}
}

document.oncontextmenu = function () {
    return false;
  };
