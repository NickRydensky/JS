// function draw(){

let canv = document.getElementById('field');
ctx = canv.getContext('2d');

function randomIntFromInterval(min, max) { // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function cub(x, y, color = 'blue')
{
    ctx.fillStyle = color //задаем цвет
    ctx.fillRect(x, y, 50, 50); //  квадрат
}

let colors = ['red', 'blue', 'green'];

let map = [
    [0, 1, 0, 0, 1], //5 кубов по ширине где 0 - не рисуем куб, 1 - рисуем
    [0, 1, 0, 0, 1], //5 кубов по ширине где 0 - не рисуем куб, 1 - рисуем
    [0, 1, 0, 0, 1], //5 кубов по ширине где 0 - не рисуем куб, 1 - рисуем
    [0, 1, 0, 0, 1], //5 кубов по ширине где 0 - не рисуем куб, 1 - рисуем
    [0, 1, 0, 0, 1], //5 кубов по ширине где 0 - не рисуем куб, 1 - рисуем
]


function draw(){
    ctx.clearRect(0,0, canv.width, canv.height); //стираем нарисованое до этого

    let h = map.length; // получаем высоту размера карты

    for(var i = 0; i < h; i++) // цикл рисование по высоте
    {
        let w = map[i].length // получаем ширину размера карты,

        for(var j = 0; j < w; j++)
        {
            let isRect = map[i][j];
            if(isRect === 1){ // если там есть 1 то рисуем
                let x = 50 * j;
                let y = 50 * i;
                cub(x, y, 'red');
                console.log(x, y);
            }
        }
    }
}



let fps = 30;
setInterval(draw, 1000/fps); // https://learn.javascript.ru/settimeout-setinterval
