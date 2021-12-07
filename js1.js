let hi = confirm('будем здороваться?')
if(hi){ //условия и так принимает true или false нет необходимости сравнивать 
    alert('привет!')
    let name = prompt('как тебя зовут?')
    if(name.length>0){
        alert('привет ,' + name)
    }
}
else{
    alert('как хочешь')
}
