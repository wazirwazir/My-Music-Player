let nextbtn = document.getElementById('nextbtn')
let playbtn = document.getElementById('playbtn')
let prevbtn = document.getElementById('prevbtn')
let audio = document.getElementById('audio')
let playsign = document.querySelector('.playsign')
let pauseign = document.querySelector('.pausesign')
let currenAud = document.querySelector('.currentAud')
let songTitle = document.getElementById('marquee')
let musicImg = document.querySelector('img')


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
        file: 'scr/music/01 Freaky Friday (feat. Chris Brown).mp3'
    },
    {
        image: 'scr/img/20230704_083855.jpg',
        title: 'Unforgettable-Ft.-Swae-Lee',
        file: 'scr/music/Unforgettable-Ft.-Swae-Lee-www.Moozika.ir_.mp3'
    },
    {
        image: 'scr/img/20230624_173024.jpg',
        title: 'Khalid_Young Dumb & Broke - (Musicfire.in).mp3',
        file: 'scr/music/02 - Young Dumb & Broke - (Musicfire.in).mp3'
    } 
]
let currentIndex = 0
function next()  {
    const currentSong = track[currentIndex]
    musicImg.src = currentSong.image;
    songTitle.textContent = currentSong.title;
    audio.src = currentSong.file; 
    currentIndex = (currentIndex + 1) % track.length;
    audio.play()
    playsign.classList.add('hide')
    pauseign.classList.remove('hide')
}
function prev()  {
    const currentSong = track[currentIndex]
    musicImg.src = currentSong.image;
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



audio.addEventListener('timeupdate', updateBar)
audio.addEventListener('ended', next)
nextbtn.addEventListener('click', next)
prevbtn.addEventListener('click', prev)

