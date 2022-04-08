var video =document.getElementById("videoBg");
var bgBtn = document.getElementById("myBtn");

function bgVideo () {
    if (video.paused) {
        video.play(); 
        bgBtn.innerHTML = "Pause";
    } else {
        video.pause();
        bgBtn.innerHTML = "Play";
    }
}