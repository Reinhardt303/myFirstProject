document.addEventListener("DOMContentLoaded", () => {
const characterElement = document.getElementById('character-selection')


fetch('http://localhost:3000/nintendoCharacters')
.then(response => response.json())
.then(characters => {
  const h1NameElement = document.createElement('h1')
  h1NameElement.textContent = character.character
  characters.forEach( character => {
    renderTop(character)
  })      //so far so good
})

const renderTop = (character) => {
  const imgElement = document.createElement('img')
  imgElement.src = character.image
  characterElement.appendChild(imgElement)
}






})


