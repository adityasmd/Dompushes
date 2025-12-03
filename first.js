let grow= 0
let btn= document.querySelector('button')
let inner= document.querySelector('.inner')
let h1 = document.querySelector('h1')

btn.addEventListener('click', function(){
   let int = setInterval(() => {
      grow++
      h1.innerHTML= grow+'%'
      inner.style.width= grow+'%'
   }, 100);

   setTimeout(() => {
      clearInterval(int)
      btn.innerHTML='Downloaded'
      btn.style.opacity= 0.6
      btn.style.pointerEvents= 'none'
   }, 10000);

})