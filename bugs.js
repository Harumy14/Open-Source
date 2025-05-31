function toggleVideo() {
    var video = document.getElementById("meuVideo");
    if (video.paused) {
        video.play();
    } else {
         video.pause();
    }
}
