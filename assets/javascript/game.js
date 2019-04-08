const songs = [
    "01 Prelude.flac",
    "02 Slam.flac",
    "03 Plasticworld (featuring Fats and TC).flac",
    "04 Fasten Your Seatbelt (featuring The Freestylers).flac",
    "05 Through The Loop.flac",
    "06 Sounds Of Life (featuring Jasmine Yee).flac",
    "07 Girl In The Fire.flac",
    "08 Tarantula (featuring Fresh, Spyda and Tenor Fly).flac",
    "09 Out Here.flac",
    "10 Hold Your Colour.flac",
    "11 The Terminal.flac",
    "12 Streamline.flac",
    "13 Another Planet.flac",
    "14 Still Grey.flac"
]

const createSongList = () => {

    const list = document.createElement('ol')

    for (let i = 0; i < songs.length; i++) {
        const item = document.createElement('li')
        item.appendChild(document.createTextNode(songs[i]))

        list.appendChild(item)
    }
    return list
}


document.getElementById('songList').appendChild(createSongList())

songList.onclick = (e) => {
    const clickedItem = e.target
    const source = document.getElementById('source')
    source.src = 'assets/audio/' + clickedItem.innerText
    document.getElementById('currentSong').innerText = clickedItem.innerText
    document.getElementById('currentlyPlayingSong').innerText = "Currently Playing: "
    player.load()
    player.play()

}
const playAudio = () => {
    if (player.readyState) {
        player.play()
    }
}


const pauseAudio = () => {
    player.pause()
}

const slider = document.getElementById('volumeSlider')
slider.oninput = (e) => {
    const volume = e.target.value
    player.volume = volume
}

const updateProgress = () => {
    if (player.currentTime > 0) {
        const progressBar = document.getElementById('progress')
        progressBar.value = (player.currentTime / player.duration) * 100
    }
}