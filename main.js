function setup(){
     canvas = createCanvas(800,500)
     canvas.center()
     background("black")
     video = createCapture(VIDEO);
     video.hide();
     posenet = ml5.poseNet(video,modeLoaded)
     posenet.on('pose',gotResults)
}

sound1 = ""
sound2 = ""

leftWristX = 0
rightWristX = 0
leftWristY = 0
rightWristY = 0

function preload(){
  sound1 = loadSound("music.mp3")
  sound2 = loadSound("music2.mp3")
}


function modeLoaded(){
     console.log("MODEL LOADED")
   }
   
   function draw(){
     image(video,0,0,300,300)
     
   }

   function gotResults(results){
      if(results.length > 0){
        console.log(results)
        leftWristX = results[0].pose.leftWrist.x
        leftWristY = results[0].pose.leftWrist.y
        rightWristX = results[0].pose.rightWrist.x
        rightWristY = results[0].pose.rightWrist.y

        console.log("LWX = ", leftWristX  , "LWY = " , leftWristY , "RWX = " , rightWristX , "RWY = " , rightWristY)
      }
   }