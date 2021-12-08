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
    alert('как хочешь') // Как отсюда передать значение переменной name, что бы его использовать дальше?? или из-за того, что она объявленна внутри функции, снаружи он недоступна

}
}
let op;
function func(){
    let result;

    let num1 = Number(document.getElementById('num1'));
    let num2 = Number(document.getElementById('num2'));
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
      
          document.getElementById("result").innerHTML = result;


    }
}