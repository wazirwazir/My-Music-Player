let nextbtn = document.getElementById('nextbtn')
let playbtn = document.getElementById('playbtn')
let prevbtn = document.getElementById('prevbtn')
let audio = document.getElementsByTagName('audio')[0]
let playsign = document.querySelector('.playsign')
let pauseign = document.querySelector('.pausesign')
let currenAud = document.querySelector('.currentAud')

playbtn.addEventListener('click', () => {
   if(audio.paused) {
    audio.play()
   }
   else if (!audio.paused) {
    audio.pause()
   }
   playsign.classList.toggle('hide')
   pauseign.classList.toggle('hide')
})

nextbtn.addEventListener('click', () => {
    
})

let track = [
    '<audio src=".\scr\music\_Wizkid_-_Ojuelegba.mp3"></audio>',
    '<audio src=".\scr\music\01 Freaky Friday (feat. Chris Brown).mp3"></audio>',
    '<audio src=".\scr\music\01 He Is The Same.mp3"></audio>',
    '<audio src=".\scr\music\01-Party-feat.-Gucci-Mane-Usher.mp3"></audio>',
    '<audio src=".\scr\music\02 - Young Dumb & Broke - (Musicfire.in).mp3"></audio>'
    
    
]
let currentIndex = 0
function next() {
    currenAud.textContent = track[currentIndex] 
    currentIndex = (currentIndex + 1) % track.length;
    console.log(track[currentIndex])
    console.log(currenAud.textContent)
}
nextbtn.addEventListener('click', () => {
    next()
    audio.play()
})