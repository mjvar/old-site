let projectPopup = document.querySelector(".project-popup");
let popCont = document.querySelector(".popup-container");

function toggleProjectPopup(proj){
	projectPopup.classList.toggle("active");

	if(proj == "aigh"){
		popCont.innerHTML = `
				<div class="popup-img">
					<img src="media/aigh.png">
				</div>
				<h1>AI Got Hands</h1>
				<h5><a href="https://drive.google.com/file/d/1HIHxWyNRQonvDIHGTN4Cys-_Y9e5c17N/view?usp=sharing" target="_blank" class="projlink">slides</a> | <a href="https://github.com/mjvar/AIGotHands" target="_blank" class="codelink">code</a></h5>
				<p>
					AI Got Hands is a reinforcement learning agent that plays the fighting game FightingICE. In addition to fine-tuning the agent's reward function to achieve a 70% winrate against similar agents, I qualitatively analyzed the agent's behavior to explore the potential of game AI as a tutorial tool for game-playing.
				</p>`;
	}else if(proj == "eury"){
		popCont.innerHTML = `
				<div class="popup-img">
					<img src="media/eury.png">
				</div>
				<h1>Eurhythmce</h1>
				<h5><a href="https://hatimb00.itch.io/eurhythmce" target="_blank" class="codelink">link</a></h5>
				<p>
					Eurhythmce is a rhythm/puzzle game based on Greek mythology. Play as Eurydice as you stay on beat while you make the right moves and follow Orpheus out of hell! I served as lead Unity developer and level designer on the project.
				</p>`;
	}
	else if(proj == "post"){
		popCont.innerHTML = `
				<div class="popup-img">
					<img src="media/post.png">
				</div>
				<h1>postcARds</h1>
				<h5><a href="https://drive.google.com/file/d/119tV02MkFUYJfiSIOOA8xK15sLlA00Ks/view?usp=sharing" target="_blank" class="projlink">video</a></h5>
				<p>
					postcARds is an app developed in collaboration with the Museum für Kommunikation Berlin to celebrate the history of postcards as a medium of communication. The app turns users' phones into 3D paintbrushes in order to personalize postcards from the museum's collection. I served as lead Unity developer on the project.
				</p>`;
	}else if(proj == "sonar-dj"){
		popCont.innerHTML = `
				<div class="popup-img">
					<img src="media/sonar-dj-min.png">
				</div>
				<h1>Sonar DJ</h1>
				<h5><a href="https://www.youtube.com/watch?v=uY-fv90nOMc&feature=youtu.be" target="_blank" class="projlink">link</a> | <a href="https://github.com/mjvar/intro-to-interactive-media/tree/master/finalProject" target="_blank" class="codelink">code</a></h5>
				<p>
					Sonar DJ is an interactive electronic music installation made with Java, Processing, and Arduino. A sonar sensor constantly scans a mat in front of it. By placing different objects on the mat and moving them around, the user can trigger different sound loops and jam along to them live. The project also features audio visualizations using the Processing sound library.<br><br>This project was borne out of a desire I had to explore different tactile ways to make electronic music. I wanted to create something that felt responsive, and got people excited about making electronic music. 
				</p>`;
	}else if(proj == "bullet-time"){
		popCont.innerHTML = `
				<div class="popup-img">
					<img src="media/bullet-time-min.png">
				</div>
				<h1>Bullet Time</h1>
				<h5><a href="https://infairvar.itch.io/bullet-time" target="_blank" class="projlink">link</a> | <a href="https://github.com/mjvar/intro-to-interactive-media/tree/master/midtermProject" target="_blank" class="codelink">code</a></h5>
				<p>
					Bullet Time is a fast-paced bullet hell game where you can slow time. You pilot a ship (WASD/arrows) towards a portal, while dodging an onslaught of bullets from enemies. You can also use Slow (SPACE) to more precisely control your ship. This consumes a limited Slow Meter that slows both the bullets and your ship, allowing you to perfectly time and execute tight maneuvers. If you hold the button for too long, though, your Slow Meter depletes, which fast forwards the game back to normal speed.
				</p>`;
	}else if(proj == "map"){
		popCont.innerHTML = `
				<div class="popup-img shrink">
					<img src="media/map-min.png">
				</div>
				<h1>Procedural Map Generation</h1>
				<h5><a href="https://github.com/mjvar/intro-to-interactive-media/tree/master/September22" target="_blank" class="codelink">code & docs</a></h5>
				<p>
					I wrote a procedural map generation tool in Java that generates maps (for use in games, Dungeons & Dragons campaigns, etc.) from Voronoi tessellations. The system generates Voronoi tessellations and uses Manhattan distance calculations to emulate land features like islands and lakes.
				</p>`;
	}
	else if(proj == "body"){
		popCont.innerHTML = `
				<div class="popup-img shrink">
					<img src="media/body-min.png">
				</div>
				<h1>The Body at the Dorm Party</h1>
				<h5><a href="https://mjvar.github.io/body-at-the-dorm-party" target="_blank" class="projlink">link</a> | <a href="https://github.com/mjvar/body-at-the-dorm-party" target="_blank" class="codelink">code</a></h5>
				<p>
					I worked on an interactive, video-based murder mystery with a group of 3 students. I used jQuery UI and p5.js to develop the website, and acted in some of the videos.
				</p>`;
	}
	else if(proj == "sakay"){
		popCont.innerHTML = `
				<div class="popup-img">
					<img src="media/sakay-min.png">
				</div>
				<h1>Sakay.ph Transport Coverage Analysis</h1>
				<h5><a href="https://blog.sakay.ph/transport-coverage-in-greater-manila-during-april-ecq/" target="_blank" class="projlink">link</a></h5>
				<p>
					I spent the summer of 2020 as a Data Science intern at Sakay.ph. I used kepler.gl, Pandas, and SQL to build a data analysis toolkit for researchers and policymakers. I also used this tool for an exploratory research project visualizing transport coverage in Manila during COVID-19, which was published on the Sakay.ph data science blog.
				</p>`;
	}else if(proj == "uwu"){
		popCont.innerHTML = `
				<div class="popup-img shrink">
					<img src="media/uwu-min.png">
				</div>
				<h1>Uwuify</h1>
				<h5><a href="http://twitter.com/uwuify" target="_blank" class="projlink">link</a> | <a href="https://github.com/mjvar/uwuify" target="_blank" class="codelink">code</a></h5>
				<p>
					I wrote a Twitter bot that uwuifies tweets. Reply to any tweet with @uwuify and the bot will respond! The bot is written in Python and deployed on Heroku with Heroku Scheduler.
				</p>`;
	}
	else if(proj == "days"){
		popCont.innerHTML = `
				<div class="popup-img">
					<img src="media/days-min.png">
				</div>
				<h1>One of Those Days</h1>
				<h5><a href="http://mjvar.github.io/one-of-those-days" target="_blank" class="projlink">link</a> | <a href="https://github.com/mjvar/one-of-those-days" target="_blank" class="codelink">code</a></h5>
				<p>
					One of Those Days is an interactive audio piece about mental health. It follows an unnamed protagonist on 2 contrasting days in an attempt to express the visceral lived experience of mental health struggles. For this project, I developed the website, wrote original music, and helped with audio editing.					
				</p>`;
	}
	else if(proj == "qff"){
		popCont.innerHTML = `
				<div class="popup-img">
					<img src="media/qff-min.png">
				</div>
				<h1>Quarantine Film Festival</h1>
				<h5><a href="http://mjvar.github.io/qff" target="_blank" class="projlink">link</a> | <a href="https://github.com/mjvar/qff" target="_blank" class="codelink">code</a></h5>
				<p>
					I developed a website for a hypothetical online film festival. I was able to work on wireframes and interactivity with vanilla Javascript. For this website, I followed a minimalistic yet punchy design language. 
				</p>`;
	}

}