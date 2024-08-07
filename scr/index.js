let nextbtn = document.getElementById('nextbtn')
let playbtn = document.getElementById('playbtn')
let prevbtn = document.getElementById('prevbtn')
let audio = document.getElementById('audio')
let playsign = document.querySelector('.playsign')
let pauseign = document.querySelector('.pausesign')
let currenAud = document.querySelector('.currentAud')
let songTitle = document.getElementById('marquee')
let musicImg = document.querySelector('img')
let progressBar = document.querySelector('.progress-bar')
let totalDuration = document.querySelector('.to')
let elapsedDuration = document.querySelector('.from')

playbtn.addEventListener('click', () => {
   if(audio.paused) {
    audio.play()
    playsign.classList.add('hide')
    pauseign.classList.remove('hide')
   }
   else if (!audio.paused) {
    audio.pause()
    playsign.classList.remove('hide')
    pauseign.classList.add('hide')
   }
})

let track = [
    {
        image:'scr/img/20230703_155700.jpg',
        title: 'Freaky Friday (feat. Chris Brown)',
        file: 'scr/music/01 Freaky Friday (feat. Chris Brown).mp3',
        duration: '03:36'
    },
    {
        image: 'scr/img/20230704_083855.jpg',
        title: 'Unforgettable-Ft.-Swae-Lee',
        file: 'scr/music/Unforgettable-Ft.-Swae-Lee-www.Moozika.ir_.mp3',
        duration: '03:55'
    },
    {
        image: 'scr/img/20230624_173024.jpg',
        title: 'Khalid_Young Dumb & Broke - (Musicfire.in).mp3',
        file: 'scr/music/02 - Young Dumb & Broke - (Musicfire.in).mp3',
        duration: '03:23'
    } 
]
let currentIndex = 0
function next()  {
    const currentSong = track[currentIndex]
    musicImg.src = currentSong.image;
    songTitle.textContent = currentSong.title;
    totalDuration.textContent = currentSong.duration;
    audio.src = currentSong.file; 
    currentIndex = (currentIndex + 1) % track.length;
    audio.play()
    playsign.classList.add('hide')
    pauseign.classList.remove('hide')
}
function prev()  {
    const currentSong = track[currentIndex]
    musicImg.src = currentSong.image;
    totalDuration.textContent = currentSong.duration;
    songTitle.textContent = currentSong.title
    audio.src = currentSong.file; 
    currentIndex = (currentIndex - 1 + track.length) % track.length;
    audio.play()
    playsign.classList.add('hide')
    pauseign.classList.remove('hide')
}

function updateBar() {
    const currentTime = audio.currentTime
    const duration = audio.duration
    const progressPercent = (currentTime / duration) * 100;
    const dur = document.getElementsByClassName('dur')[0]
    dur.style.width = progressPercent + '%'
}  

progressBar.addEventListener('click', (e) => {
    const click = (e.offsetX / progressBar.offsetWidth) *
    audio.duration;
    audio.currentTime = click;
    audio.play()
})

function timeLeft() {
    let secs = Math.floor(audio.currentTime % 60)
    let min = Math.floor(audio.currentTime / 60)
    let formattedSecs = secs.toString().padStart(2, '0')
    let formattedMin = min.toString().padStart(2, '0')
    elapsedDuration.innerText = formattedMin + ':' + formattedSecs
}


audio.onplaying = setInterval(timeLeft, 500)
audio.addEventListener('timeupdate', updateBar)
audio.addEventListener('ended', next)
nextbtn.addEventListener('click', next)
prevbtn.addEventListener('click', prev)

