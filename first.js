let body= document.querySelector('body')
let img= document.querySelector('img')

body.addEventListener('mousemove', function(dets){
    img.style.left= dets.x+'px'
    img.style.top= dets.y+'px'
    img.style.transform= `translate(-50%,-50%)`
})