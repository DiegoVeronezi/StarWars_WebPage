var audioBase = document.getElementById("base");
var isPlaying = false;
var img = document.getElementById("img_sound");
img.src = 'img/play2.png';  

function togglePlay() {
  if (isPlaying) {
    img.src = 'img/play2.png';   
    audioBase.pause();
    isPlaying = false;
  } else {   
    img.src = 'img/pause2.png';     
    audioBase.play();
    isPlaying = true;
  }
};