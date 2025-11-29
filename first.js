let h1 = document.querySelector('h1');
let increase = document.querySelector('#inc');
let decrease = document.querySelector('#dec');

let a = 0

increase.addEventListener('click', function(){
    a++,
    h1.innerHTML= a;
})
decrease.addEventListener('click', function(){
    a--,
    h1.innerHTML= a;
})



