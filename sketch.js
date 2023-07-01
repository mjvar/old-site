let minwh;

function windowResized(){
	resizeCanvas(windowWidth, windowHeight);
	minwh = min(width, height);
}

function setup(){
	var canvas = createCanvas(windowWidth, windowHeight);
	canvas.position(0,0);
	// stay behind everything
	canvas.style('z-index', '-1');
	frameRate(30);
	minwh = min(width, height);
} 

function draw(){
	background(250,50);
}