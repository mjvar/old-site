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
					A project exploring AI for game tutorial generation. I trained a reinforcement learning agent to play the game FightingICE, achieving a 70% winrate against other bots. Then, I used the AI's behavioral patterns in-game to generate gameplay tips for beginners.
				</p>`;
	}else if(proj == "eury"){
		popCont.innerHTML = `
				<div class="popup-img">
					<img src="media/eury.png">
				</div>
				<h1>Eurhythmce</h1>
				<h5><a href="https://hatimb00.itch.io/eurhythmce" target="_blank" class="codelink">itch page</a></h5>
				<p>
					A rhythm/puzzle game based on Greek mythology. Hop, skip, and puzzle-solve to the beat while following Orpheus out of hell! I served as lead Unity developer and level designer on a team of 2.
				</p>`;
	}
	else if(proj == "bird"){
		popCont.innerHTML = `
				<div class="popup-img">
					<img src="media/bird.png">
				</div>
				<h1>Audibird</h1>
				<h5><a href="http://audibird.glitch.me" target="_blank" class="projlink">link</a></h5>
				<p>
					A site for bird enthusiasts, powered by crowdsourced birdwatching data. Pick any place in the world, and Audibird shows you bird sounds from the most recently submitted birdwatching checklists in that area. Birdwatching and species data is queried live from eBird, xeno-canto, and WikiData.
				</p>`;
	}
	else if(proj == "live"){
		popCont.innerHTML = `
				<div class="popup-img">
					<img src="media/live.jpg">
				</div>
				<h1>algorave</h1>
				<h5><a href="https://drive.google.com/file/d/1S25cm4qIoe3bqJGaddY5Ffy2wX57b4s8/view?usp=sharing" target="_blank" class="projlink">video</a></h5>
				<p>
					A live-coded EDM performance. Our team of 4 created reactive visuals using Hydra and music using Tidalcycles. We then edited, rearranged, and chopped up the source code live throughout the performance. I mainly worked on the composition and audio production.
				</p>`;
	}
	else if(proj == "post"){
		popCont.innerHTML = `
				<div class="popup-img">
					<img src="media/post.png">
				</div>
				<h1>postcARds</h1>
				<h5><a href="https://drive.google.com/file/d/1JE48zTnnVCq0TPngRxMizy3zDRwmQrDR/view?usp=sharing" target="_blank" class="projlink">video</a></h5>
				<p>
					Developed in collaboration with the Museum für Kommunikation Berlin. Turns your phone into a 3D paintbrush; wielding it lets you add your own personal touches to the museum's historical postcards. I served as lead Unity developer and interaction designer on a team of 3.
				</p>`;
	}else if(proj == "sonar-dj"){
		popCont.innerHTML = `
				<div class="popup-img">
					<img src="media/sonar-dj-min.png">
				</div>
				<h1>Sonar DJ</h1>
				<h5><a href="https://www.youtube.com/watch?v=uY-fv90nOMc&feature=youtu.be" target="_blank" class="projlink">video</a> | <a href="https://github.com/mjvar/intro-to-interactive-media/tree/master/finalProject" target="_blank" class="codelink">code and docs</a></h5>
				<p>
					An interactive electronic music installation made with Java, Processing, and Arduino. A sonar sensor constantly scans a mat in front of it. By placing different objects on the mat and moving them around, the user can trigger different sound loops and jam along to them live. The project also features audio visualizations using the Processing sound library. 
				</p>`;
	}else if(proj == "bullet-time"){
		popCont.innerHTML = `
				<div class="popup-img">
					<img src="media/bullet-time-min.png">
				</div>
				<h1>Bullet Time</h1>
				<h5><a href="https://infairvar.itch.io/bullet-time" target="_blank" class="projlink">itch page</a></h5>
				<p>
					A fast-paced bullet hell game where you can slow time. Shuttle cargo across the galaxy while dodging an inexplicable amount of bullets. By hitting SPACE to slow time, you can weave through even the most complex bullet patterns.
				</p>`;
	}else if(proj == "map"){
		popCont.innerHTML = `
				<div class="popup-img shrink">
					<img src="media/map-min.png">
				</div>
				<h1>Procedural Map Generation</h1>
				<h5><a href="https://github.com/mjvar/intro-to-interactive-media/tree/master/September22" target="_blank" class="codelink">code and docs</a></h5>
				<p>
					A procedural map generation tool in Java that generates maps (for use in games, Dungeons & Dragons campaigns, etc.) from Voronoi tessellations. The system generates Voronoi tessellations and uses Manhattan distance calculations to emulate land features like islands and lakes.
				</p>`;
	}
	else if(proj == "sakay"){
		popCont.innerHTML = `
				<div class="popup-img">
					<img src="media/sakay-min.png">
				</div>
				<h1>Sakay.ph Transport Coverage Analysis</h1>
				<h5><a href="https://blog.sakay.ph/transport-coverage-in-greater-manila-during-april-ecq/" target="_blank" class="projlink">article</a></h5>
				<p>
					An urban data analysis suite for policymakers and researchers. The tool allows easy visualization of transit stop coverage using Sakay.ph's rich user and stop data. I used the tool to write a blog post studying reduced transit coverage during the COVID-19 lockdown in Manila. Developed during internship at Sakay.ph.
				</p>`;
	}else if(proj == "uwu"){
		popCont.innerHTML = `
				<div class="popup-img">
					<img src="media/uwu-min.png">
				</div>
				<h1>Uwuify</h1>
				<h5><a href="http://twitter.com/uwuify" target="_blank" class="projlink">link (bot temporarily down)</a> | <a href="https://github.com/mjvar/uwuify" target="_blank" class="codelink">code</a></h5>
				<p>
					A Twitter bot that "uwuifies" tweets. Reply to any tweet with @uwuify and the bot will wespond wike this! :3 The bot is written in Python and deployed on Heroku with Heroku Scheduler. NOTE: Now unmaintained due to Twitter's API pricing. Thanks, Elon!
				</p>`;
	}
	else if(proj == "mlvis"){
		popCont.innerHTML = `
				<div class="popup-img research">
					<img src="media/mlvis.png">
				</div>
				<h1>Visualization of Classifier Decision Boundaries</h1>
				<p class="research-p">
					Machine learning models are increasingly used to make crucial decisions in fields like healthcare and criminal justice. Thus, it has become important to provide model developers with tools to examine their trained models for bias and errors. One approach to analyzing these models is to find instances in which the model is maximally confused or uncertain. We propose a tool that systematically detects and visualizes points along a model’s decision boundary to help developers better debug their models. In the process, we provide a number of contributions including: describing the properties of boundary points in relation to counterfactuals, formalizing the conditions necessary to produce usable and effective boundary point visualizations, and adaptively visualizing boundary points in the context of neighboring data points. We implement the tool as a Jupyter Notebook widget that easily integrates into existing ML workflows.
				</p>`;
	}
	else if(proj == "uigen"){
		popCont.innerHTML = `
				<div class="popup-img">
					<img src="media/uigen.png">
				</div>
				<h1>Automatic Generation of Specialized Vector Drawing Toolsets</h1>
				<div class="research">
				<p>
					Specialized user interfaces can be desirable compared to generalized ones, as their design can be optimized for a given use case and user group. For example, it is much easier to generate gear outlines for laser cutting in a dedicated online gear-making tool than by manually drawing the gear in Adobe Illustrator. Unfortunately, creating specialized user interfaces is labor-intensive, and has to be done manually for each use-case. We explore the problem of automatically generating specialized drawing toolsets based on a dataset of desired laser cutouts. Our system creates parametrized shape tools that allow the user to quickly create multiple variations of the training shapes. Toolsets are generated by decomposing the vector training data into basic shapes, which are then used to parametrize the more complex figures. The best permutation of tools is selected based on a cost function that accounts for toolset complexity, workflow speed, and coverage.
				</p>
				</div>`;
	}
	else if(proj == "playlists"){
		popCont.innerHTML = `
				<div class="popup-img">
					<img src="media/playlists.png">
				</div>
				<h1>Contexts of Musical Consumption in User-Generated Playlists</h1>
				<div class="research">
				<p>
					What are the contexts in which users generate and consume music playlists in everyday life? We assembled a dataset of 300,000 user-generated playlists from YouTube to explore the diverse contexts in which music is used (e.g., for study/workout, feeling sad/happy/romantic, etc.). Through qualitative coding of the playlist titles, we constructed a hierarchy of different categories based around activities, occasions, and emotional states. Using network analysis and topic modeling on the playlist titles, we unearthed clusters of keywords that matched our qualitative analysis. We plan to analyze high-level audio features of these playlists (danceability, energy, presence of lyrics, etc.), highlighting musical tendencies in the automatically detected groups.
				</p>
				</div>`;
	}
}