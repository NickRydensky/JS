// function draw(){

let canv = document.getElementById('field');
ctx = canv.getContext('2d');

function randomIntFromInterval(min, max) { // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function cub(x, y, color = 'blue')
{
    ctx.clearRect(0,0,canv.width,canv.height); //стираем нарисованое до этого
    ctx.fillStyle = color //задаем цвет
    ctx.fillRect(x, y, 50, 50); //  квадрат
}

let colors = ['red', 'blue', 'green'];

function draw(){
    let color = colors[randomIntFromInterval(0, 3)]
    cub(randomIntFromInterval(0, canv.width - 50), randomIntFromInterval(0, canv.height - 50), color)
}
let fps = 30;
setInterval(draw, 1000/fps);
