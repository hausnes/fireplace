const video = document.querySelector('video');
const audio = document.getElementById('background-audio');

let videosamling = [
    'video/fireplace_01.mp4',
    'video/fireplace_02.mp4',
    'video/fireplace_03.mp4',
    'video/fireplace_04.mp4',
    'video/fireplace_05.mp4',
];

let activeVideo = 0;
video.src = videosamling[activeVideo];

function playMedia() {
    video.play();
    audio.play();
    document.removeEventListener('click', playMedia);
}

document.querySelector("main").addEventListener('click', playMedia);

function playMedia() {
    activeVideo++;
    if (activeVideo >= videosamling.length) {
        activeVideo = 0;
    }
    video.src = videosamling[activeVideo];
    video.play();
    audio.play();
}