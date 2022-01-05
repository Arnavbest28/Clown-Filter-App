noseX=0;
noseY=0;

function preload(){
clown_nose= loadImage('https://i.postimg.cc/3Nx7G7Nz/Clown-nose-large.png');
}

function setup(){
    canvas= createCanvas(400,400);
    canvas.position(480,200);
    video= createCapture(VIDEO);
    video.hide();

    poseNet=ml5.poseNet(video, modelLoaded);
}

function  modelLoaded(){
    console.log("PoseNet Is Initialized");
    poseNet.on('pose', gotPoses);
}

function gotPoses(results)
{
if(results.length > 0)
{
    console.log(results);
    noseX= results[0].pose.nose.x;
    noseY= results[0].pose.nose.y;
    console.log("Nose x -->" + noseX);
    console.log("Nose y -->" + noseY);
}
}

function draw(){
image(video, 0, 0, 400,400);
image(clown_nose, noseX, noseY, 50, 50);
}

function take_snapshot(){
    save('My_Clown_Image.png');
}