video = "";

function preload() {
    video = createVideo('video.mp4');
    video.hide();
}

function setup() {
   canvas =  createCanvas(480, 380);
   canvas.center();

}

function draw() {
    image(video, 0, 0, 480, 380);
}

function start() {
    object_detector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById('status').innerHTML = "Status: Detecting Objects";
    
}

function modelLoaded() {
    console.log('model loaded');
    video.loop();
    video.speed(1);
    video.volume(0);
}