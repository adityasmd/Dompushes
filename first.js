let btn= document.querySelector('button')
let main = document.querySelector('main')

btn.addEventListener('click', function(){
  let newelem= document.createElement('div');
   newelem.style.height= 120+'px'
   newelem.style.width= 120+'px'
   newelem.style.position= 'absolute'
   newelem.style.backgroundColor= `rgb(200,200,200)`

   main.appendChild(newelem);

   let x = Math.random()*100
   let y = Math.random()*100
   let rotation = Math.random()*360

   newelem.style.left= x+'%'
   newelem.style.top= y+'%'
   newelem.style.rotate= rotation+'deg'

   let c1 = Math.floor(Math.random()*356)
   let c2 = Math.floor(Math.random()*356)
   let c3 = Math.floor(Math.random()*356)

   newelem.style.backgroundColor= `rgb(${c1},${c2},${c3})`
})