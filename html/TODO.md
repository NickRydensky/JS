Очь даже неплохо)

Будим двигаться к нашей цели это к танкам)) для этого нам надо 

 1. работать с событиями
 2. работать с canvas

Начнем с работой по событиям и DOM у тебя уже есть события onclick=""
которое ты вызывал с html нам нужно сделать так же 
только подписываться к элементам. 
Давай улучшим калькулятор только с подписанием на события элементов
вот тут https://learn.javascript.ru/introduction-browser-events 
а именно там где addEventListener

Пример:
```allykeynamelanguage
<input id="elem" type="button" value="Нажми меня"/>
<script>
let elem = document.getElementById('elem');
elem.addEventListener("click", function(){
    alert("Click Elem");
);
</script>
```
 



Может рановато переходить ещё сюда? Я посмотрел сколько всего пропущено, до этой темы, что сейчас ковыряю)
