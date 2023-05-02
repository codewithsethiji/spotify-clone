console.log("Welcome to my Spotiy");

//Initialize the Variables 
let songindex = 0;
let audioElement = new Audio ('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));



let songs = [
        {songName: 'Jatt Da ', filePath: "songs/1.mp3", coverPath: "covers/01.jpg" },
        {songName: 'daku',     filePath: "songs/2.mp3", coverPath: "covers/02.jpg" },
        {songName: 'night',    filePath: "songs/3.mp3", coverPath: "covers/03.jpg" },
        {songName: 'yaari ',   filePath: "songs/4.mp3", coverPath: "covers/04.jpg" },
        {songName: 'rat',      filePath: "songs/5.mp3", coverPath: "covers/05.jpg" },
        {songName: 'boss',     filePath: "songs/6.mp3", coverPath: "covers/06.jpg" },
        {songName: '3 peg',    filePath: "songs/1.mp3", coverPath: "covers/07.jpg" },
        {songName: 'sidhu',    filePath: "songs/2.mp3", coverPath: "covers/08.jpg" },
        {songName: 'roti ',    filePath: "songs/3.mp3", coverPath: "covers/09.jpg" },
        {songName: 'surma',    filePath: "songs/4.mp3", coverPath: "covers/10.jpg" },
    ] 
  
  songItems.forEach((element, i) => {   
       element.getElementsByTagName("img")[0].src = songs[i].coverPath;
       element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
  })


// audioElement.play();


//Hand play/pause click 
masterPlay.addEventListener('click', ()=> {
    if(audioElement.paused || audioElement.currentTime<=0){
      audioElement.play();
      masterPlay.classList.remove("fa-circle-play");
      masterPlay.classList.add("fa-circle-pause");
      gif.style.opacity = 1;
    }
    else{
      audioElement.pause();
      masterPlay.classList.remove("fa-circle-pause");
      masterPlay.classList.add("fa-circle-play");
      gif.style.opacity = 0;
    }

})

//Listen to Events
audioElement.addEventListener('timeupdate', ()=> {
      
        //Update SeekBar
        progress = parseInt((audioElement.currentTime/audioElement.duration)*100); 
        myProgressBar.value = progress;

})

myProgressBar.addEventListener('change', ()=> {
   audioElement.currentTime = myProgressBar.value * audioElement.duration/100;

})


const makeAllPlays = ()=>{
  Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) =>{
    element.classList.remove("fa-circle-pause");
    element.classList.add("fa-circle-play");
  })
}

//song Play List 

Array.from(document.getElementsByClassName('songItemPlay')).forEach ((element) => {
    element.addEventListener('click', (e)=>{
       makeAllPlays();
       songindex = parseInt(e.target.id);
       e.target.classList.remove("fa-circle-play");
       e.target.classList.add("fa-circle-pause");
       audioElement.src= `songs/${songindex+1}.mp3`;
       masterSongName.innerText = songs[songindex].songName;
       audioElement.currentTime = 0;
       audioElement.play();
       gif.style.opacity = 1;
       masterPlay.classList.remove("fa-circle-play");
       masterPlay.classList.add("fa-circle-pause");
    })

})

document.getElementById('next').addEventListener('click', ()=>{
        if(songindex>=9){
            songindex = 0;
        }
        else{
          songindex += 1;
        }
        audioElement.src= `songs/${songindex+1}.mp3`;
        masterSongName.innerText = songs[songindex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove("fa-circle-play");
        masterPlay.classList.add("fa-circle-pause");
})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songindex<=9){
       songindex = 0;
    }
    else{
    songindex -= 1;
    }
    audioElement.src= `songs/${songindex+1}.mp3`;
    masterSongName.innerText = songs[songindex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove("fa-circle-play");
    masterPlay.classList.add("fa-circle-pause");
})








