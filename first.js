let btn= document.querySelector('button')
let main = document.querySelector('main')

let arr=['hellopajiii','kya heroooooo', 'chal bhaiiiiiiiiii','kya haal chal','bade bhai ke bhai']

btn.addEventListener('click', function(){
   let h1= document.createElement('h1');
   let i= Math.floor(Math.random()*arr.length)

   h1.innerHTML= arr[i] 
   main.appendChild(h1)
   h1.style.position= 'absolute'
   h1.style.fontSize= 50+'px'

   let x = Math.random()*100
   let y = Math.random()*100
   let rotation = Math.random()*360
   
   h1.style.left= x+'%'
   h1.style.top= y+'%'
   h1.style.rotate= rotation+'deg'

   let c1 = Math.floor(Math.random()*356)
   let c2 = Math.floor(Math.random()*356)
   let c3 = Math.floor(Math.random()*356)

   h1.style.color= `rgb(${c1},${c2},${c3})`
})