let box = document.querySelector('#box')
let button = document.querySelector('button')

let color = 0;
button.addEventListener('click' , function(){
    if(color === 0){
    box.style.backgroundColor= 'yellow';
    console.log('yellow')
    color =1;
    }else{
        box.style.backgroundColor= 'transparent';
        console.log('transparent')
        color =0;
    }
})