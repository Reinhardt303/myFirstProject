document.addEventListener("DOMContentLoaded", () => {
const characterElement = document.getElementById('character-selection')
const nameElement = document.getElementById('name-display')
const worldElement = document.getElementById('world-display')
const imgDetailElement = document.querySelector('.detail-image')

fetch('http://localhost:3000/nintendoCharacters')
.then(response => response.json())
.then(characters => {
/*   const h1NameElement = document.createElement('h1')
  h1NameElement.textContent = character.character */
  characters.forEach( character => {
    renderTop(character)
    renderCenter(character)
  })      //so far so good
})

const renderTop = (character) => {
  const imgElement = document.createElement('img')
  imgElement.src = character.image
  characterElement.appendChild(imgElement)
  imgElement.addEventListener('click', () => {
    renderCenter(character)
  } )
}

const renderCenter = (characters) => {
  nameElement.innerText = characters.character
  worldElement.innerText = characters.gameSeries
  imgDetailElement.src = characters.image
}






})


