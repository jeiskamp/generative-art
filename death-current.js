var z = 0

function setup() {
  createCanvas(400, 400);
  
  redish = color(255, 10, 43)
  pinkish = color(255, 113, 197)
  orangeish = color(255, 142, 61)
  
  colors = [redish, pinkish, orangeish];
  noLoop()
}


function draw() {
  background(69, 8, 110);
  
  //Black Lines Top
  for (i = 0; i < 40; i++){
    j = i * 2
    x1 = 0 + (i * 10)
    y1 = 0 
    x2 = 400
    y2 = 400 - (i * 10)
    
    stroke(0, 0, 0);
    line(x1, y1, x2, y2);    
  }
  
  //Black Lines Bottom
  for (i = 0; i < 40; i++){
    j = i * 2
    x1 = -400 + (i * 10)
    y1 = 0 
    x2 = 0 + (i * 10)
    y2 = 400
    
    stroke(0, 0, 0);
    line(x1, y1, x2, y2);    
  }
  
  //Red Line to Circle
  for (i = 0; i < 10; i++){
    x1 = -5 + i
    x2 = 195 + i
    reds = 10 + i*10
    stroke(255, reds, 43);
    line(x1, 0, x2, 225);    
  }
  
  //Post Lines
  for (i = 0; i < 180; i++){
    //First Lines
    x1 = 200
    y1 = 225
    x2 = random(100, 380)
    y2 = random(233, 380)
    
    stroke(colors[z])
    line(x1, y1, x2, y2); 
    
    
    //Second Lines
    s1 = x2
    t1 = y2
    s2 = 15000
    t2 = 15000
    
    stroke(colors[z])
    line(s1, t1, s2, t2); 
    
    z = z + 1
    if (z > 2){
      z = 0
    }
  }
  
  
  noStroke();
  fill( 89, 50, 110 );
  ellipse(200, 225, 90, 90);
  
  noStroke();
  fill( 78, 50, 110 );
  ellipse(200, 225, 80, 80);
  
  noStroke();
  fill( 99, 64, 139 );
  ellipse(200, 225, 60, 60);
  

  noStroke();
  fill(121, 78, 170);
  ellipse(200, 225, 40, 40);
  
  noStroke();
  fill( 147, 95, 208 );
  ellipse(200, 225, 20, 20);
  
  // save('current.png');
}
