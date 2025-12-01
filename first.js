

let arr= [
   {
      Team:"MI",
      primary:"blue",
      secondary:"Gold",
      Trophies: 5,
      captain: "Rohit"
   },
   {
      Team:"RCB",
      primary:"red",
      secondary:"grey",
      Trophies: 1,
      captain: "rajat"
   },
   {
      Team:"CSK",
      primary:"yellow",
      secondary:"white",
      Trophies: 5,
      captain: "MSD"
   },
   {
      Team:"PK",
      primary:"crimson",
      secondary:"grey",
      Trophies: 0,
      captain: "sheryash"
   },
   {
      Team:"RR",
      primary:"pink",
      secondary:"navyblue",
      Trophies: 5,
      captain: "sanju"
   },
];

let btn = document.querySelector('button')
let box = document.querySelector('.box')
let body= document.querySelector('body')
btn.addEventListener('click', function(){
  let win = Math.floor( Math.random()*arr.length);
  box.innerHTML =  `Team: ${arr[win].Team}  Trophies: ${arr[win].Trophies} captain: ${arr[win].captain}`
  body.style.backgroundColor = arr[win].primary
  box.style.backgroundColor = arr[win].secondary
})

