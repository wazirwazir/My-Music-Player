let nextbtn = document.getElementById('nextbtn')
let playbtn = document.getElementById('playbtn')
let prevbtn = document.getElementById('prevbtn')
let audio = document.getElementById('audio')
let playsign = document.querySelector('.playsign')
let pauseign = document.querySelector('.pausesign')
let currenAud = document.querySelector('.currentAud')
let songTitle = document.getElementById('songTitle')
let musicImg = document.querySelector('img')

playbtn.addEventListener('click', () => {
   if(audio.paused) {
    audio.play()
   }
   else if (!audio.paused) {
    audio.pause()
   }
   if (audio.play) {
    playsign.classList.add('hide')
    pauseign.classList.remove('hide')
   } else if (!audio.play) {
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
        title: 'Wizkid_-_Ojuelegba.mp3',
        file: 'scr/music/_Wizkid_-_Ojuelegba.mp3'
    },
    {
        image: 'scr/img/20230709_090016.jpg',
        title: 'Jon_Bellion_He Is The Same.mp3',
        file: 'scr/music/01 He Is The Same.mp3'
    },
    {
        image: 'scr/img/20230713_192243.jpg',
        title: 'Party-feat.-Gucci-Mane-Usher.mp3',
        file: 'scr/music/01-Party-feat.-Gucci-Mane-Usher.mp3'
    },
    {
        image: 'scr/img/20230624_173024.jpg',
        title: 'Khalid_Young Dumb & Broke - (Musicfire.in).mp3',
        file: 'scr/music/02 - Young Dumb & Broke - (Musicfire.in).mp3'
    },
    {
        image:'scr/img/20231208_234600.jpg',
        title: 'Sunflower (Spider-Man_ Into the S.m4a',
        file: 'scr/music/12 Sunflower (Spider-Man_ Into the S.m4a'
    },
    {
        image: 'scr/img/20231113_093919.jpg',
        title: 'Eminem_-_Falling_Ft_Post_Malone.mp3',
        file: 'scr/music/Eminem_-_Falling_Ft_Post_Malone.mp3'
    },
    {
        image: 'scr/img/20230703_155730.jpg',
        title: 'Imagine_Dragons_-_Believer_Remix_ft_Lil_Wayne_talkglitz.tv.mp3',
        file: 'scr/music/Imagine_Dragons_-_Believer_Remix_ft_Lil_Wayne_talkglitz.tv.mp3'
    },
    {
        image: 'scr/img/20231209_120103.jpg',
        title: 'Post Malone - Better Now.mp3',
        file: 'scr/music/Post Malone - Better Now.mp3'
    },
    {
        image: 'scr/img/20230919_181921.jpg',
        title: 'Post Malone - Psycho ft. Ty Dolla ign.mp3',
        file: 'scr/music/Post Malone - Psycho ft. Ty Dolla ign.mp3'
    } 
]
let currentIndex = 0
function next()  {
    const currentSong = track[currentIndex]
    musicImg.src = currentSong.image;
    songTitle.textContent = currentSong.title
    audio.src = currentSong.file; 
    currentIndex = (currentIndex + 1) % track.length;
    console.log(audio)
    audio.play()
}
function prev()  {
    const currentSong = track[currentIndex]
    musicImg.src = currentSong.image;
    songTitle.textContent = currentSong.title
    audio.src = currentSong.file; 
    currentIndex = (currentIndex - 1 + track.length) % track.length;
    console.log(audio)
    audio.play()
}

audio.addEventListener('ended', next)
nextbtn.addEventListener('click', next)
prevbtn.addEventListener('click', prev)