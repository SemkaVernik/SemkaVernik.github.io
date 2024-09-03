let prize__button = document.getElementsByClassName('prize__button')
[0];
console.log(prize__button)
let numbers = []; 

prize__button.addEventListener('click', function (){
    let prizes = document.getElementsByClassName('prize');
    for (let i = 0; i < prizes.length; i++){
         prizes[i].classList.remove("active");
    }
    let prize__numbers = document.getElementsByClassName('prize__number');
    for (let i = 0; i < prizes.length; i++){
        numbers.push(prize__numbers[i].textContent);

    }
    let min = 0;
    let max = prizes.length;
    let randomNumber =  Math.random() * (max - min) + min;
    let num = Math.trunc(randomNumber)
    let prize__result = document.getElementById("prize__result")
    prize__result.innerHTML=numbers[num];
    winning__prize=prizes[num]
    winning__prize.classList.add("active");
    
});

