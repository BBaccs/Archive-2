// Set variables
const birdsCheckbox = document.getElementById('birds');
const catsCheckbox = document.getElementById('cats');
const cardCat = document.querySelectorAll('.card-cat');
const cardBird = document.querySelectorAll('.card-bird');
const extendableLink = document.querySelector('.extendable-link');
const cardContainer = document.querySelector('.card-container');

// Define functions
// Toggle hide cards
function showSelectedCards(e) {
 
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
    else if (e.target.id === 'birds') {
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

    // If the screen is iPad size or smaller, reduce height of the now container, since it now contains less cards
    // if(window.screen.availWidth < 769) {
    //     // If the screen is phone size, we need the container slightly bigger
    //     if (window.screen.availWidth < 400) {
    //         cardContainer.classList.toggle('min-height650');
    //     } else {
    //         cardContainer.classList.toggle('min-height450');
    //     }
    // }
}


// Toggles a dropdown menu with links, takes the link containing the dropdown link as a parameter
function dropDownMenu(linkName) {
    linkName.classList.toggle('is-hidden');
    // linkName.classList.toggle('darkBarkgroundColor');
}

// Create event listeners
// Toggle hide cards
birdsCheckbox.addEventListener('click', showSelectedCards);
catsCheckbox.addEventListener('click', showSelectedCards);

// Dropdown menu toggle
// extendableLink.addEventListener('click', () => {
//     dropDownMenu(linkOneDropDownMenu);
// });

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