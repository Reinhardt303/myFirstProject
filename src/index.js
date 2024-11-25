document.addEventListener("DOMContentLoaded", () => {
  const characterElement = document.getElementById('character-selection')
  const nameElement = document.querySelector('#name-display')
  const worldElement = document.getElementById('world-display')
  const imgDetailElement = document.querySelector('.detail-image')
  const newCharacterForm = document.getElementById('new-character')
  
  fetch('http://localhost:3000/nintendoCharacters')
  .then(response => response.json())
  .then(characters => {
    renderTop(characters)
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
    })
  }
  
  const renderCenter = (characters) => {
    nameElement.innerText = characters.character
    worldElement.innerText = characters.gameSeries
    imgDetailElement.src = characters.image
  }
  
  newCharacterForm.addEventListener('submit', (event) => {
    event.preventDefault()
  
    const newCharacterName = document.getElementById("new-name")
    const newCharacterImage = document.getElementById('new-image')
    const newCharacterWorld = document.getElementById('starsIn')
  
    const newCharacter =  {
      character: newCharacterName.value,
      image: newCharacterImage.value,
      gameSeries: newCharacterWorld.value
    }
    
renderTop(newCharacter)
  
newCharacterForm.reset()
  })
  
})