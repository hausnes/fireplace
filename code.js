const video = document.querySelector('video');
const audio = document.getElementById('background-audio');

let videos = [
    'video/fireplace_01.mp4',
    'video/fireplace_02.mp4',
    'video/fireplace_03.mp4',
    'video/fireplace_04.mp4',
    'video/fireplace_05.mp4',
];

// Set den første videoen som aktiv
let activeVideo = 0;
video.src = videos[activeVideo];

// Oppretter lydfila
const soundfile = new Audio('audio/fireplace_loop.mp3');
let isPlaying = false;

// Lyttar etter trykk på tastaturet
document.addEventListener('keydown', function(event) {
    // Startar lyden om den ikkje allereie spelar
    if (!isPlaying) {
        soundfile.play();
        isPlaying = false;
    }

    // Lyttar etter mellomromstasten, og byter video
    if (event.code === 'Space') {
        changeVideo();
    }

    // Paoskje-egg!
    if (event.code === 'KeyT') {
        console.log('Paoskje!');
        let burnVictim = document.createElement('img');
        burnVictim.src = 'pics/animasjon-nobg.gif';
        document.body.appendChild(burnVictim);
    }
});

// Lyttar etter dobbeltklikk/tapping på videoelementet
document.addEventListener('dblclick', function() {
    changeVideo();
});

document.getElementById('start-button').addEventListener('click', function() {
    document.getElementById('start-screen').style.display = 'none';
    video.play();
    audio.play();
    
    // Skjuler informasjonen etter 10 sekund
    // setTimeout(function() {
    //     document.querySelector('main').style.display = 'none';
    // }, 10000);
});

function changeVideo() {
    activeVideo++;
    if (activeVideo >= videos.length) {
        activeVideo = 0;
    }
    video.src = videos[activeVideo];
    video.play();
}