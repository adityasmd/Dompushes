const people = [
  {
    image: "https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    fullName: "Alice Johnson",
    profession: "Software Engineer",
    description: "Specializes in backend development and cloud infrastructure."
  },
  {
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
    fullName: "Michael Roberts",
    profession: "Graphic Designer",
    description: "Creates branding, illustrations, and user interface designs."
  },
  {
    image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e",
    fullName: "Sofia Martinez",
    profession: "Data Analyst",
    description: "Analyzes datasets to generate insights and strategic recommendations."
  },
  {
    image: "https://plus.unsplash.com/premium_photo-1734026668803-4ab767f3de76?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    fullName: "David Kim",
    profession: "Marketing Manager",
    description: "Develops marketing strategies and oversees brand communication."
  },
  {
    image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e",
    fullName: "Emma Thompson",
    profession: "Product Manager",
    description: "Leads product planning, development, and cross-functional coordination."
  }
];


let sum= ''

people.forEach(function(elem){
   sum = sum+` <div class="cards">
      <img src='${elem.image}'>
      <h1>'${elem.fullName}'</h1>
      <h2>'${elem.profession}'</h2>
      <h3>'${elem.description}'</h3>
    </div>`
})
var main = document.querySelector('main')
main.innerHTML= sum