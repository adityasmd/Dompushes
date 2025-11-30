let crscr = document.querySelector('.cursor');
let main = document.querySelector('#main');

main.addEventListener('mousemove', function(dets){
    crscr.style.left = dets.x +'px'
    crscr.style.top = dets.y +'px'
})