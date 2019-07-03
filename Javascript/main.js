// Set variables
const birdsCheckbox = document.getElementById('birds');
const catsCheckbox = document.getElementById('cats');
const cardCat = document.querySelectorAll('.card-cat');
const cardBird = document.querySelectorAll('.card-bird');

// Define functions
// Toggle hide cards
function showSelectedCards(event) {
 
    // If both are checked, remove show all cards and uncheck both boxes
    if (birdsCheckbox.checked && catsCheckbox.checked) {
        // Uncheck boxes
        birdsCheckbox.checked = false;
        catsCheckbox.checked = false;
        // Loop through cards and remove hideElement class
        for (let i = 0; i < cardBird.length; i++) {
            cardBird[i].classList.remove('is-hidden');   
        }
        for (let i = 0; i < cardCat.length; i++) {
            cardCat[i].classList.remove('is-hidden');   
        }
    }  
    // Check to see if the Birds checkbox is checked, if so, hide the cat cards
    else if (event.target.id === 'birds') {
        // Loop through selected card and toggle the hideElement css class
         for (let i = 0; i < cardBird.length; i++) {
            cardCat[i].classList.toggle('is-hidden');   
        }
    } 
    // Otherwise the cats checkbox is checked, so hide the bird cards
    else {
        for (let i = 0; i < cardCat.length; i++) {
            cardBird[i].classList.toggle('is-hidden');   
        }
    }  
}

// Create event listeners
// Toggle hide cards
birdsCheckbox.addEventListener('click', showSelectedCards);

catsCheckbox.addEventListener('click', showSelectedCards);

document.querySelector('#items .is-clickable').addEventListener('click', (event) => {
    const dropdown = document.querySelector('#dropdown');
    const isActive = event.target.classList.contains('is-active');
    if (isActive) {
        event.target.classList.remove('is-active');
        dropdown.classList.add('is-hidden');
    } else {
        event.target.classList.add('is-active');
        dropdown.classList.remove('is-hidden');
    }
});