song=""
song2=""
leftWristX = 0;
leftWristY = 0;
rightWristX = 0;
rigttWristY = 0;

function setup(){
    canvas = createCanvas(600,530);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    poseNet = poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function gotPoses()
{
    if(results.lenght > 0)
    {
        console.log(results);
        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
        console.log("leftWristX = " + leftWristX +"leftWristY"+ leftWristY);

        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;
        console.log("rightWristX = " + rightWristX +"rightWristY"+ rightWristY);
    }
}

function modelLoaded(){
    console.log('PoseNet is Initialized');
}


function preload()
{
 song = loadSound("music.mp3");
 song2 = loadSound("music2.mp3");
}

function draw() {
    image(video, 0, 0, 600, 500);
}

function play()
{
    song.play();
    song2.play();
}