'use strict';

function start(){
let hi = confirm('будем здороваться?')
if(hi){

    let name = prompt('как тебя зовут?')
    if(name.length>0){
        alert('привет ,' + name)
    } if(name.length===0){
        alert('имя не введено')
    }
}
else{
    alert('как хочешь') // Как отсюда передать значение переменной name, что бы его использовать дальше?? или из-за того, что она объявлена внутри функции, снаружи он недоступна
    // TODO да правильно рассуждаешь область видимости почитай вот тут https://metanit.com/web/javascript/3.2.php

}
}
let op;
function func(){
    let result;

    let num1 = Number(document.getElementById('num1').value);
    let num2 = Number(document.getElementById('num2').value);
    console.log(op, "op", num1, num2);
    switch (op) {
        case '+':
          result = num1 + num2;
          break;
        case '-':
          result = num1 - num2;
          break;
        case '*':
          result = num1 * num2;
          break;
        case '/':
          result = num1 / num2;
          break;

///          document.getElementById("result").innerHTML = result;
//             не отрабатывавет, не могу понять где ошибка

// TODO оно никогда не исполниться так как ты внутри switch делаешь


    }
    // TODO вынес их switch
    document.getElementById("result").innerHTML = result;
}

// onst hotel = {
//   name: 'У Ашота',
//   stars: 3,
//   capacity: 30,
// }
// console.log(hotel)

// const hotels = [hotel]

// console.log(hotels)
// const hotel1 = {
//   name:'У Вазгена',
//   stars: 4,
//   capacity: 100,
// }
// hotels.push(hotel1)
// console.log(hotels)
