function initAudioPlayer() {
  var audio,
    playbtn,
    mutebtn,
    seekslider,
    volumeslider,
    seeking = false,
    seekto,
    curtimetext,
    durtimetext,
    playlist_status,
    dir,
    playlist,
    ext,
    agent;
  dir = "../audio/";
  playlist = ["1", "2"];
  playlist_index = 0;
  ext = ".mp3";

  // Set object references
  playbtn = document.getElementById("playpausebtn");
  nexttrack = document.getElementById("nextbtn");
  prevtrack = document.getElementById("prevbtn");
  seekslider = document.getElementById("seekslider");
  volumeslider = document.getElementById("volumeslider");
  curtimetext = document.getElementById("curtimetext");
  durtimetext = document.getElementById("durtimetext");
  playlist_status = document.getElementById("playlist_status");

  // Audio Object
  audio = new Audio();
  audio.src = dir + playlist[0] + ext;
  audio.loop = false;
  audio.play();

  // Add Event Handling
  playbtn.addEventListener("click", playPause);
  prevtrack.addEventListener("click", playPrevTrack);
  nexttrack.addEventListener("click", playNextTrack);
  audio.addEventListener("ended", function() {
    switchTrack();
  });

  function playPrevTrack() {
    if (playlist_index == 0) {
      playlist_index = playlist.length - 1;
    } else {
      playlist_index -= 1;
    }
    audio.src = dir + playlist[playlist_index] + ext;
    audio.play();
  }
  function playNextTrack() {
    if (playlist_index == playlist.length - 1) {
      playlist_index = 0;
    } else {
      playlist_index++;
    }
    audio.src = dir + playlist[playlist_index] + ext;
    audio.play();
  }

  function playPause() {
    if (audio.paused) {
      audio.play();
      // playbtn.style.background = "url(images/pause.png) no-repeat";
    } else {
      audio.pause();
      // playbtn.style.background = "url(images/play.png) no-repeat";
    }
  }
  //switchTrack
  function switchTrack() {
    if (playlist_index == playlist.length - 1) {
      playlist_index = 0;
    } else {
      playlist_index++;
    }
    audio.src = dir + playlist[playlist_index] + ext;
    audio.play();
  }
}

window.addEventListener("load", initAudioPlayer);
