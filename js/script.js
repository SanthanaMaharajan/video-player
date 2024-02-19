let video = document.getElementById("main-video");
let playBtn=document.getElementById("playPause");
let backwardBtn=document.getElementById("backward");
let forwardBtn=document.getElementById("forward");
let muteBtn=document.getElementById("muteUnmute");
let fullScreen=document.getElementById("fullscreen");
let volume=document.getElementById("volume");
let download=document.getElementById("download-button");
let swapBtn=document.getElementById("resolution");
let volumeIcon=document.getElementById("volume-icon");

function playPause(){
    if(video.paused){
        video.play();
        playBtn.innerHTML="<i class='bi bi-pause-fill'></i>";
    }else{
        video.pause();
        playBtn.innerHTML="<i class='bi bi-play-fill'></i>"
    };    
};

function backwards(){
    video.currentTime-=5;
}

function forwards(){
    video.currentTime+=5;
}

function muteUnmute(){
    if(video.muted) {
      video.muted = false;
      muteBtn.innerHTML="<i class='bi bi-volume-up-fill'></i>mute";
      volume.value=video.volume*100;
      volumeIcon.innerHTML="<i class='bi bi-volume-up-fill'></i>";
    }else{
        video.muted=true;
        muteBtn.innerHTML="<i class='bi bi-volume-mute-fill'></i>unmute";
        volume.value=0;
        volumeIcon.innerHTML="<i class='bi bi-volume-mute-fill'></i>";
    } 
}
function showFullScreen(){
      video.requestFullscreen();
}

function volumeUpdate(){
    let volumeInput = volume.value;
    if(volumeInput==0){
        video.muted=true;
        volumeIcon.innerHTML="<i class='bi bi-volume-mute-fill'></i>";
        muteBtn.innerHTML="unmute";
    }else{
        video.volume = volumeInput/100;
        video.muted=false;
        volumeIcon.innerHTML="<i class='bi bi-volume-up-fill'></i>";
        muteBtn.innerHTML="mute";
    }
}

function downloadFile(){
    let filePath=video.getAttribute("src");
    console.log(filePath);
    download.setAttribute("href",filePath);
    download.setAttribute("download",filePath);
}

function swap(){
    let targetPath=this.value;
    let cTime=video.currentTime;
    video.setAttribute("src",targetPath);
    video.currentTime=cTime;
    playPause();
}



playBtn.addEventListener("click",playPause);
backwardBtn.addEventListener("click",backwards);
forwardBtn.addEventListener("click",forwards);
muteBtn.addEventListener("click",muteUnmute);
fullScreen.addEventListener("click", showFullScreen);
volume.addEventListener("change",volumeUpdate);
download.addEventListener("click", downloadFile);
swapBtn.addEventListener("click",swap);