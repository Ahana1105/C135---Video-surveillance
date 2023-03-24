video = "";
obj_status = "";
objects = [];


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

    if (obj_status != "") {
        object_detector.detect(video, gotResult);
        for (i=0; i < objects.length; i++) {
            document.getElementById("status").innerHTML = "Status: Objects Detected";
            document.getElementById("number_of_objects_detected").innerHTML = "Number Of Objects Detected: " + objects.length;

            fill("#008080");
            percent = floor(objects[i].confidence * 100);
            text(objects[i].label + " " + percent + "%", objects[i].x + 15, objects[i].y + 15);
            noFill();
            stroke("#008080");
            rect(objects[i].x , objects[i].y , objects[i].width , objects[i].height);
        }
    }
}

function start() {
    object_detector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById('status').innerHTML = "Status: Detecting Objects";
    
}

function modelLoaded() {
    console.log('model loaded');
    obj_status=true;
    video.loop();
    video.speed(1);
    video.volume(0);
}

function gotResult(error,results) {
if (error) {
    console.error(error);
} else {
    console.log(results);
    objects = results;
}
}