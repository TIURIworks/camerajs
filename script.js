let myback;
var capture; 
// var beeld;
var tag = 1;

function setup() {

var com1 =['img/Motherland.png'];
var com2 =['com.2.p.png']; 
            
         var values = ["com1","com2",];
       backy = values[Math.floor(Math.random() * values.length)];      


  var com1, com2;
var index = Math.random();
if (index < 0.5) {

   var backy =['img/Motherland.png']
  tag = 1;
  
} else {
   var backy =['img/com.2.p.png']; 
  tag=2
  
}

  
    myback = loadImage (backy);
	createCanvas(400, 290);
  
	pixelDensity(1);

	
	capture = createCapture(VIDEO); 
	capture.size(400, 300);
//	capture.hide();                              //deze aan voor 2e cam uit
}

function draw() {
  background(myback);
  capture.loadPixels();
	
var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
 
var outt = slider.value;
slider.oninput = function() {
  output.innerHTML = this.value;
}

var size=100
var pixlel = floor(map(size, 0, width, 10,20, ));
  
for (var x = 0; x < width; x += pixlel) {
  for (var y = 0; y <height; y += pixlel) {
    var index = ((y*width) + x) * 4;
    var red = capture.pixels[index + 0];
    var green = capture.pixels[index + 1];
    var blue = capture.pixels[index + 2];
    var alpha = capture.pixels[index + 3];

    noStroke();

redd=red

var change= random(outt);
    
          var red= red+red;
    green = green+change*2
        var blue= blue+100+ change/3;
alpha= alpha+100-outt;
    

      if (outt > 100 && outt<200 && redd > 100) {
        red= 255;
      
      }
    else {
        blue= blue+100;
      green= green+100}
    

    
    fill(red, green, blue, alpha);
    rectMode(CENTER);
    rect(x, y, pixlel, pixlel);
  }
}
}


