//Circle Packing within Circle

//Global Variables
const viewLength = 600;
const viewWidth = 600;

let circles = [];
z = 0;

function setup() {
  createCanvas(viewLength, viewWidth);
  getCircles();
  
  //Color Palette
  pinkish = color(162, 24, 156)
  purpleish = color(101, 15, 218)
  maroonish = color(182, 34, 34)
  litemaroon = color(218, 15, 15)
  orangeish = color(218, 119, 15)
  tanish = color(216, 87, 55)
  //Colors Array
  colors = [pinkish, purpleish, maroonish, litemaroon, orangeish, tanish];
  
  noLoop();
}

//Are the circles over lapping?
const overLapping = (x, y, r, z) => {
  let overLap = false;
  for (var i = 0; i < circles.length; i++) {
    let c = circles[i];
    const d = dist(x, y, c.x, c.y);
    const rTotal = r + c.r;
    //Circles are over lapping
    if (d < rTotal) {
      overLap = true;
    }
  }
  //Circles are not over lapping
  if(!overLap){
    circles.push({ x: x, y: y, r: r, z: z});
  }
};

//Lets create some circles...
const getCircles = () => {
  const limit = viewWidth - viewWidth / 50;
  const origin = viewWidth / 2;

  for (let i = 0; i < limit; i += 33) {
    for (let j = 0; j < 360; j += 1) {
      //How would we like our circles to look?
      var x = origin + (i * Math.sin((Math.PI * 2 * j) / 360)) / 2;
      var y = origin + (i * Math.cos((Math.PI * 2 * j) / 360)) / 2;
      var r = random(5, 33);
      z = z + 1
      if (z > 5){
        z = 0
      }
      overLapping(x, y, r, z);

    }
  }
};

function draw() {
  background(7, 12, 90);
  
  //Draw Array via iteration
  for (var i = 0; i < circles.length; i++){
    noStroke();
    fill(colors[circles[i].z]);
    ellipse(circles[i].x, circles[i].y, circles[i].r*2);
  }
  
  //Draw Array at once
  // noStroke()
  // circles.map((c) => fill(colors[c.z]));
  // circles.map((c) => ellipse(c.x, c.y, c.r*1.5, c.r*1.5));
  
  //Saving...
  // save('CirclePack.png');
  
}
