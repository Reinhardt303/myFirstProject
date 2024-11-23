document.addEventListener("DOMContentLoaded", () => {

fetch('http://localhost:3000/nintendoCharacters')
.then(response => response.json())
.then(characters => {
console.log(characters)       //so far so good
  })
})


