window.onload = function() {
    const hydra = new Hydra({
      detectAudio: false,
      enableStreamCapture: false,
      width: window.innerWidth,
      height: window.innerHeight,
    });

    p5 = new P5()

    // class
    class LineCircle {
      constructor(_x, _y, _a, _r ) {
        this.x = _x;
        this.y = _y;
        this.amount = _a;
        this.radius = _r;
        this.seedAmount = time;
        this.c1 = 0;
        this.c2 = 0;
        this.c3 = 0;
        this.c4 = 0;
      }

      alterBezier(x1, y1, x2, y2, i){
          this.c1=p5.lerp(x1,x1*p5.noise(p5.frameCount*.0001*x1)*2,smoothedMouseX/p5.width)*(1-smoothedMouseY/p5.height);
          this.c2=p5.lerp(y1,y1*p5.noise(p5.frameCount*.0001*y1)*2,smoothedMouseX/p5.width)*(1-smoothedMouseY/p5.height);
          this.c3=p5.lerp(x2,x2*p5.noise(i*.01*x2)*2,smoothedMouseX/p5.width)*((1-smoothedMouseY/p5.height) * 3-2);
          this.c4=p5.lerp(y2,y2*p5.noise(i*.01*y2)*2,smoothedMouseX/p5.width)*((1-smoothedMouseY/p5.height) * 3-2 );
      }

      display() {
        p5.randomSeed(this.seedAmount);
        p5.push();
        p5.translate(this.x, this.y);
        for (let i=0; i<this.amount; i++) {
          let angle1 = p5.random(p5.TWO_PI);
          let angle2 = p5.random(p5.TWO_PI);
          let x1 = p5.cos(angle1) * this.radius;
          let y1 = p5.sin(angle1) * this.radius;
          let x2 = p5.cos(angle2) * this.radius;
          let y2 = p5.sin(angle2) * this.radius;
          this.alterBezier(x1, y1, x2, y2, i);
          p5.bezier(x1, y1, this.c1, this.c2, this.c3, this.c4, x2, y2);
        }
        p5.pop();
      }
    }

    //P5
    var radius = 200;
    var numLines = 100;
    var smoothedMouseX=0;
    var smoothedMouseY=0;
    var circle1 = new LineCircle(p5.width/2-radius, p5.height/2-radius, numLines, radius);
    var circle2 = new LineCircle(p5.width/2+radius, p5.height/2-radius, numLines, radius);
    var circle3 = new LineCircle(p5.width/2-radius, p5.height/2+radius, numLines, radius);
    var circle4 = new LineCircle(p5.width/2+radius, p5.height/2+radius, numLines, radius);

    p5.hide();
	// stay behind everything
	p5.canvas.style.zIndex = -1000;

    
    p5.windowResized = ()=>{
        p5.resizeCanvas(window.innerWidth, window.innerHeight);
    }

    p5.draw = ()=>{
      p5.background(255,55);
      p5.stroke(0);
      p5.strokeWeight(height/10);
      
      p5.translate(p5.width/2,p5.height/2);
      p5.ellipse(0,0,height/2.5,height/2.5);
    }

    s0.init({src: p5.canvas})

    // hydra
    src(s0).out()

    osc(2,0.01,1).modulate(noise(3,0.1),1).out(o1)

    src(o2).modulate(src(o1).add(solid(1,1),-0.5),()=>p5.map((p5.mouseX + p5.width/3),0,p5.width,0.0,-.008)).blend(src(o0),()=>p5.map((p5.mouseX + p5.width/3),0,p5.width,.4,-0.01)).out(o2)

    src(o0).blend(o2,()=>Math.pow((p5.mouseX + p5.width/3)/p5.width,.5)).out(o3)

    render(o3)
  }