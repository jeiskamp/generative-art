function setup() {
    createCanvas(400, 400);
    noLoop();
  }
  
  function draw() {
    background(134, 31, 255);
    for (var i = 0; i < 20; i++){
      var x1 = i * 10
      var y1 = 400 - (i * 7)
      var x2 = 200
      var y2 = 0 + (i * 13)
      var x3 = 400 - (i * 10)
      var y3 = 400 - (i * 7)
  
      var r = map(i, 30, 7, 0, 255)
      var g = map(i, 0, 7, 255, 0)
      var b = map(i, 0, 60, 0, 255)
  
      fill(r, g, b);
      triangle(x1 ,y1 ,x2, y2, x3, y3);
    }
    for (var j = 0; j < 13; j++){
      var x1 = j * 5.5
      var y1 = 400 - (j * 25)
      var x2 = 0 + (j * 5)
      var y2 = 0 + (j * 7)
      var x3 = 200 - (j * 10)
      var y3 = 0 + (j * 7)
  
      var r = map(j, 30, 7, 0, 255)
      var g = map(j, 0, 7, 255, 0)
      var b = map(j, 0, 60, 0, 255)
  
      fill(r, g, b);
      triangle(x1 ,y1 ,x2, y2, x3, y3);
    }
    for (var k = 0; k < 13; k++){
      var x1 = 400 - (k * 5.5)
      var y1 = 400 - (k * 25)
      var x2 = 400 - (k * 5)
      var y2 = 0 + (k * 7)
      var x3 = 200 + (k * 10)
      var y3 = 0 + (k * 7)
  
      var r = map(k, 30, 7, 0, 255)
      var g = map(k, 0, 7, 255, 0)
      var b = map(k, 0, 60, 0, 255)
  
      fill(r, g, b);
      triangle(x1 ,y1 ,x2, y2, x3, y3);
    }
    save('threepoints.png');
  }