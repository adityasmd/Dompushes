let imgs = document.querySelector('img')
let love= document.querySelector('#love')

imgs.addEventListener('dblclick', () =>{
   love.style.opacity= 0.8;
   love.style.transform= 'translate(-50%,-50%) scale(1)  rotate(0deg)';

   setTimeout(() => {
       love.style.transform= 'translate(-50%,-177%) scale(1)  rotate(-60deg)';
   }, 800);
   setTimeout(() => {
      love.style.opacity= 0;
   }, 1100);
    setTimeout(() => {
       love.style.transform= 'translate(-50%,-50%) scale(0)  rotate(0deg)';
   }, 2000);
})