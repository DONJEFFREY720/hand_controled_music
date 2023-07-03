function setup(){
     canvas = createCanvas(700,500)
     canvas.center()
     background("black")
     video = createCapture(VIDEO);
     video.hide();
     posenet = ml5.poseNet(video,modeLoaded)
     posenet.on('pose',gotResults)
}

sound1 = ""
sound2 = ""
sound_status1 = ""
sound_status2 = ""
LW_score = 0
RW_score = 0

leftWristX = 0
rightWristX = 0
leftWristY = 0
rightWristY = 0

function play_sound(){
  music1.play()
  music1.setVolume(1)
  music1.rate(1)
}

function preload(){
  sound1 = loadSound("music.mp3")
  sound2 = loadSound("music2.mp3")
}


function modeLoaded(){
     console.log("MODEL LOADED")
   }
   
   function draw(){
     image(video,0,0,700,500)
     fill("#FF0000");
     stroke("#FF0000");
     sound_status1 = sound1.isPlaying()
      sound_status2 = sound2.isPlaying()

     if(LW_score > 0.2){
        circle(leftWristX, leftWristY, 20);
        sound2.stop()
         if(sound_status1 == false){ 
              document.getElementById("song_name").innerHTML = "HARRY POTTER SONG"
              sound1.play()
          }
     }

    
      if(RW_score > 0.2){
        circle(rightWristX, rightWristY, 20);
        sound1.stop()
         if(sound_status2 == false){ 
              document.getElementById("song_name").innerHTML = "PETER PAN SONG"
              sound2.play()
          }
     }
   }
   

   function gotResults(results){
      if(results.length > 0){
        console.log(results)

        LW_score = results[0].pose.keypoints[9].score
        RW_score = results[0].pose.keypoints[10].score

        leftWristX = results[0].pose.leftWrist.x
        leftWristY = results[0].pose.leftWrist.y
        rightWristX = results[0].pose.rightWrist.x
        rightWristY = results[0].pose.rightWrist.y

        console.log("LWX = ", leftWristX  , "LWY = " , leftWristY , "RWX = " , rightWristX , "RWY = " , rightWristY)
      }
   }