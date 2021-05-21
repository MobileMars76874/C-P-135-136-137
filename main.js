status = "";
objects = [];
object = "";

function preload(){
}

function setup(){
canvas = createCanvas(450, 400);
canvas.center();
Video = createCapture(VIDEO);
Video.hide();

OBJ_D = ml5.objectDetector("cocossd", model_loaded);
}

function model_loaded(){
console.log("Model Loaded!");
status = "true";
}

function Start(){
object =  document.getElementById("o").value;
}

function draw(){
image(Video, 0, 0, 450, 400);
OBJ_D.detect(Video, gopose);
if(status != ""){
for(i=0;i < objects.length;i++){
r = random(255);
g = random(255);
b = random(255);
fill(r, g, b);
document.getElementById("S").innerHTML = "Status : detecting objects";
percent = floor(objects[i].confidence * 100);
text(objects[i].label + percent, objects[i].x+10, objects[i].y+10);
stroke(r, g, b);
noFill();
rect(object[i].x, objects[i].y, objects[i].width, objects[i].height);
if(objects[i].label = object){
document.getElementById("OH").innerHTML = object+"was found";
speak1();
}
else{
document.getElementById("OH").innerHTML = object+"was not found";
}
}
}
}

function gopose(error, results){
if(error){
connsole.log("error");
}
else{
console.log(results);
objects = results;
}
}

function speak1(){
var synth = window.speechSynthesis;
speak_data = object+"was found";
synth.speechSynthesisUtterance(speak_data);
utter_this = speak_data;
speak(utter_this);
}