let div= document.querySelector('body')
let h1= document.querySelector('h1')


div.addEventListener('keydown', function(input){
  h1.innerHTML= input.code
})