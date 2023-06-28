function setup(){
     canvas = createCanvas(800,500)
     canvas.center()
     background("black")
     video = createCa5pture(VIDEO);
     video.hide();
     posenet = ml5.poseNet(video,modeLoaded)
     posenet.on('pose',gotResults)
}


function modelLoaded(){
     console.log("MODEL LOADED")
   }
   
   function draw(){
     image(video,0,0,300,300)
     classifier.classify(video,gotResults)
   }