function setup(){
     canvas = createCanvas(300,300)
     canvas.center()
     background("black")
     video = createCapture(VIDEO);
     video.hide();
     posenet = ml5.poseNet(video,modeLoaded)
     posenet.on('pose',gotResults)
}

music1 = ""
music2 = ""

function preload(){
  sound1 = loadSound("music.mp3")
  sound2 = loadSound("music2.mp3")
}


function modelLoaded(){
     console.log("MODEL LOADED")
   }
   
   function draw(){
     image(video,0,0,300,300)
     classifier.classify(video,gotResults)
   }