document.addEventListener("DOMContentLoaded", () => {

fetch('http://localhost:3000/nintendoCharacters')
.then(response => response.json())
.then(characters => {
console.log(characters)
  })
})




/* 
const ramenMenuElement = document.getElementById('ramen-menu')
const newRamenForm = document.getElementById('new-ramen')

const handleClick = (ramen) => {
  const imgElement = document.createElement('img')
  imgElement.src = ramen.image
  ramenMenuElement.appendChild(imgElement)
  imgElement.addEventListener('click', () => {
    displayRamens(ramen)
  })
}
;

const addSubmitListener = () => {
  newRamenForm.addEventListener('submit', (event) => {
    event.preventDefault()
    const newRamenNameInput = document.getElementById('new-name')
    const newRamenImageInput = document.getElementById('new-image')
    const newRamenRestaurant = document.getElementById('new-restaurant')
    const newRamenRating = document.getElementById('new-rating')
    const newRamenComment = document.getElementById('new-comment')
  
    const newRamen = {
      name: newRamenNameInput.value,
      image: newRamenImageInput.value,
      restaurant: newRamenRestaurant.value,
      rating: newRamenRating.value,
      comment: newRamenComment.value
    }
    handleClick(newRamen)})
}

const displayRamens = (ramens) => {
  const ramenDetailImage = document.querySelector('.detail-image')
  ramenDetailImage.src = ramens.image
  const ramenDetailName = document.querySelector('.name')
  ramenDetailName.innerHTML = ramens.name
  const ramenDetailRestaurant = document.querySelector('.restaurant')
  ramenDetailRestaurant.innerHTML = ramens.restaurant
  const ramenDetailRating = document.getElementById('rating-display')
  ramenDetailRating.innerHTML = ramens.rating
  const ramenDetailComment = document.getElementById('comment-display')
  ramenDetailComment.innerHTML = ramens.comment
};

const main = () => {
fetch('http://localhost:3000/ramens')
.then(response => response.json())
.then(ramens => {
  displayRamens(ramens[0])
  ramens.forEach(ramen =>{ 
        handleClick(ramen)
  })
})

addSubmitListener()
}

main()

// Export functions for testing
export {
  displayRamens,
  addSubmitListener,
  handleClick,
  main,
};
 */

//step 1 grab ramen and render it at top likely displayRamens
/* fetch('http://localhost:3000/ramens')
.then(response => response.json())
.then(ramens => {
  displayRamenDetails(ramens[0])
  ramens.forEach(ramen =>{ 
        addFoodImageToRamenMenu(ramen)
  })
}) */


/* function addFoodImageToRamenMenu(ramen){
    const imgElement = document.createElement('img')
    imgElement.src = ramen.image
    ramenMenuElement.appendChild(imgElement)
    imgElement.addEventListener('click', () => {
      displayRamenDetails(ramen)
    })
} */
/* function displayRamenDetails(ramens) {
  const ramenDetailImage = document.querySelector('.detail-image')
  ramenDetailImage.src = ramens.image
  const ramenDetailName = document.querySelector('.name')
  ramenDetailName.innerHTML = ramens.name
  const ramenDetailRestaurant = document.querySelector('.restaurant')
  ramenDetailRestaurant.innerHTML = ramens.restaurant
  const ramenDetailRating = document.getElementById('rating-display')
  ramenDetailRating.innerHTML = ramens.rating
  const ramenDetailComment = document.getElementById('comment-display')
  ramenDetailComment.innerHTML = ramens.comment
} */


//work below is to add new ramen using form

/* newRamenForm.addEventListener('submit', (event) => {
  event.preventDefault()
  const newRamenNameInput = document.getElementById('new-name')
  const newRamenImageInput = document.getElementById('new-image')
  const newRamenRestaurant = document.getElementById('new-restaurant')
  const newRamenRating = document.getElementById('new-rating')
  const newRamenComment = document.getElementById('new-comment')

  const newRamen = {
    name: newRamenNameInput.value,
    image: newRamenImageInput.value,
    restaurant: newRamenRestaurant.value,
    rating: newRamenRating.value,
    comment: newRamenComment.value
  }
  handleClick(newRamen)
}) */