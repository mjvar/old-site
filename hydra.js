window.onload = function() {
    const hydra = new Hydra({
      detectAudio: false,
      enableStreamCapture: false,
      width: window.innerWidth,
      height: window.innerHeight,
    });

    p5 = new P5()

    //P5

    p5.hide();
  	// stay behind everything
	  p5.canvas.style.zIndex = -1000;

    
    p5.windowResized = ()=>{
        p5.resizeCanvas(window.innerWidth, window.innerHeight);
    }

    p5.draw = ()=>{
      p5.background(255,55);
      p5.stroke(0);
      // p5.strokeWeight(height/100);
      // p5.ellipse(p5.width/2,p5.height/2,height/2.5,height/2.5);
      p5.textSize(p5.height/2);
      p5.textFont('Montserrat');
      p5.textStyle(p5.BOLDITALIC);
      p5.textAlign(p5.CENTER, p5.CENTER);
      p5.text('m', p5.width/2, p5.height/2);
    }

    s0.init({src: p5.canvas})

    // hydra
    src(s0).out()

    osc(2,0.01,1).modulate(noise(3,0.1),1).out(o1)

    src(o2).modulate(src(o1).add(solid(1,1),-0.5),()=>p5.map((p5.mouseX + p5.width/3),0,p5.width,0.-.001,-.01)).blend(src(o0),()=>p5.map((p5.mouseY + p5.height/3),p5.height,0,0.2,-0.1)).out(o2)

    src(o0).blend(o2,()=>Math.pow((p5.mouseX + p5.width/3)/p5.width,.5)).out(o3)

    render(o3)
  }