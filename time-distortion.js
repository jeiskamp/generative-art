function setup() {
    createCanvas(400, 400);
    noLoop();
  }
  
  var bday = 2
  var bmonth = 2
  var byear = 1999
  
  var r = bday * 8
  var g = bmonth * 21
  var b = (byear / 8) - (bday * 6)
  
  
  
  
  function draw() {
    background(r, g, b);
    //Top Left Strobe
    for (var i = 0; i < 72; i++){
      var x = 20 + (i * 5)
      var y = 20 + (i * 5)
      
      var x2 = 40 + (i * 10)
      var y2 = 20 + (i * 5)
      
      stroke(b, g, r);
      line(x, y, x2, y2);
    }
    //Top Right Strobe
    for (var j = 0; j < 72; j++){
      var x = 380 - (j * 5)
      var y = 19 + (j * 5)
      
      var x2 = 360 - (j * 10)
      var y2 = 19 + (j * 5)
      
      stroke(b, g, r);
      line(x, y, x2, y2);
    }
    //Bottom Right Strobe
    for (var k = 0; k < 72; k++){
      var x = 380 - (k * 5)
      var y = 378 - (k * 5)
      
      var x2 = 360 - (k * 10)
      var y2 = 378 - (k * 5)
      
      stroke(g, b, r);
      line(x, y, x2, y2);
    }
    //Bottom Left Strobe
    for (var l = 0; l < 72; l++){
      var x = 17.5 + (l * 5)
      var y = 377 - (l * 5)
      
      var x2 = 17.5 + (l * 10)
      var y2 = 377 - (l * 5)
      
      stroke(g, b, r);
      line(x, y, x2, y2);
    }
  //   //Top Triangle
  //   for (var m = 0; m < 36; m++){
  //     var x = 20 + (m * 5)
  //     var y = 21 + (m * 5)
      
  //     var x2 = 380 - (m * 5)
  //     var y2 = 21 + (m * 5)
      
  //     stroke(g, b, r);
  //     line(x, y, x2, y2);
  //   }
  }