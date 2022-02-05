var play = document.querySelector(".stop-button");
var skip = document.querySelector(".skip");
var back = document.querySelector(".back");
var ranges = document.querySelector(".ranges");
var video = document.querySelector(".video");
var withBar = document.querySelector(".with-bar");
var input = document.querySelector("input")
var playercont = document.querySelector(".playercont")

function playVideo() {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
}
function skiptime() {
  video.currentTime += parseFloat(this.dataset.skip);
}
function handletime() {
  const present = parseFloat(video.currentTime / video.duration) * 100;
  withBar.style.width = present + "%";
}
// for navbar video
function handleclick(e) {
  var timeclick = (e.offsetX / video.offsetWidth) * video.duration;
  video.currentTime = timeclick;
}

function volumhandle() {
  video.volume = input.value;
}
function toggleFullscreen() {
  if (!document.fullscreenElement) {
    video.requestFullscreen().catch();
  } else {
    document.exitFullscreen();
  }
}
play.addEventListener("click", playVideo);
skip.addEventListener("click", skiptime);
back.addEventListener("click", skiptime);
video.addEventListener("timeupdate", handletime);
withBar.addEventListener("click", handleclick);
video.addEventListener("click", playVideo);
ranges.addEventListener("change", volumhandle);
playercont.addEventListener("click", toggleFullscreen);

window.addEventListener("keydown", (event) => {
  if (event.key === "p") {
    playVideo();
  }
});
