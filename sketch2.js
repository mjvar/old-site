let res = 100;
let scl = 10;

let noiseSclQuotient = 1000;
let mouseFactor = 50;
let mouseDisplace = 0; 
let prevMouseDisplace = 0; 
let mouseAccel = 0; 
let prevMouseAccel = 0; 
let mAccelTotal = 0; 
let minwh = 0;

function windowResized(){
	resizeCanvas(windowWidth, windowHeight);
	minwh = min(width, height);
}

function setup(){
	var canvas = createCanvas(windowWidth, windowHeight);
	canvas.position(0,0);
	// stay behind everything
	canvas.style('z-index', '-1');
	frameRate(60);
	background(250);
	minwh = min(width, height);
	mAccelTotal = minwh*10; 
} 

function draw(){
	background(250,200);

	push();
	translate(width/2,height/2);
	rectMode(CENTER);
	fill(255,1);
	strokeWeight(0.1);
	stroke(10);

	// for smoother animation, we base mouse events on the mouse acceleration
	if (mouseIsPressed) {
		mouseDisplace = dist(mouseX,mouseY,pmouseX,pmouseY);
		let tempMouseAccel = Math.abs(prevMouseDisplace - mouseDisplace/1000);
		if (tempMouseAccel != NaN && prevMouseAccel != NaN) {
			mouseAccel = max(tempMouseAccel, prevMouseAccel);
		}
	}
	else { mouseAccel *= 0.9; }

	mAccelTotal += mouseAccel;
	// else {mAccelTotal += mouseAccel;}

	for (let x = 1; x < 100; x++) {
		push();
		rotate(noise(x/80)*mAccelTotal/1000 + frameCount/400);

		let w = minwh*0.02*x;
		polygon(0,0,w,8);
		pop();
	}
	prevMouseAccel = mouseAccel*0.9;
	prevMouseDisplace = mouseDisplace;
	pop();
}

function polygon(x, y, radius, npoints) {
	let angle = TWO_PI / npoints;
	beginShape();
	for (let a = 0; a < TWO_PI; a += angle) {
	  let sx = x + cos(a) * radius;
	  let sy = y + sin(a) * radius;
	  vertex(sx, sy);
	  push();
	  stroke(0,10);
	  strokeWeight(1)
	  point(sx,sy);
	  pop();
	}
	endShape(CLOSE);
  }

// function draw(){
// 	background(255,20);
// 	for (let x = 0; x < width; x += res) {
// 		for (let y = 0; y < height; y += res) {
// 			push();

// 			translate(x,y);

// 			let mouseDist = dist(mouseX, mouseY, x, y);
// 			let movementFactor = 0;
// 			if (mouseX-pmouseX > 0.01 || mouseY-pmouseY > 0.01){
// 				movementFactor = 1;
// 			}
// 			rotate(noise(x/noiseSclQuotient,y/noiseSclQuotient,frameCount/100) + map(mouseDist,0,width,0,10)*movementFactor);

// 			stroke(50);
// 			strokeWeight(0.02);
// 			noFill();
// 			rectMode(CENTER);
// 			rect(0,0,res*scl,res*scl);

// 			pop();
// 		}
// 	}
// }

function drawCirc(x, y, mouseDist, fillFactor, agitateFactor){

}