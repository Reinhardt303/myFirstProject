document.addEventListener("DOMContentLoaded", () => {
const characterElement = document.getElementById('character-selection')
const newCharacterForm = document.getElementById('new-character')


const clickHandler = (character) => {
  const imgElement = document.createElement('img')
  imgElement.src = character.image
  characterElement.appendChild(imgElement)
  imgElement.addEventListener('click', () => {
    showCharacters(character)
  } )
}

const submitHandler = () => {
  newCharacterForm.addEventListener('submit', (event) => {
    event.preventDefault()
  
    const newCharacterName = document.getElementById("new-name")
    const newCharacterImage = document.getElementById('new-image')
    const newCharacterWorld = document.getElementById('starsIn')
  
    const newCharacter =  {
      name: newCharacterName.value,
      image: newCharacterImage.value,
      starsIn: newCharacterWorld.value
    }
    
    clickHandler(newCharacter)
  })
}

const showCharacters = (characters) => {
  const nameElement = document.getElementById('name-display')
  const worldElement = document.getElementById('world-display')
  const imgDetailElement = document.querySelector('.detail-image')

  nameElement.innerHTML = characters.character
  worldElement.innerHTML = characters.gameSeries
  imgDetailElement.src = characters.image

}

const main = () => {
  fetch('http://localhost:3000/nintendoCharacters')
  .then(response => response.json())
  .then(characters => {
    showCharacters(characters)    //characters?
    characters.forEach( character => {
      clickHandler(character)
    })      
  })
submitHandler()
}
main()
})
/* 
fetch('http://localhost:3000/nintendoCharacters')
.then(response => response.json())
.then(characters => {
  renderTop(character)
  characters.forEach( character => {
    renderTop(character)
    renderCenter(character)
  })      //so far so good
})

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
    name: newCharacterName.value,
    image: newCharacterImage.value,
    starsIn: newCharacterWorld.value
  }
  
  renderTop(newCharacter)

  fetch('http://localhost:3000/nintendoCharacters'),{
    method: 'POST',
    headers: {
      "Constent-Type": "application/json"
    },
    body: JSON.stringify({newCharacter
    })
    
  }
  newCharacterForm.reset()
})








})*/
