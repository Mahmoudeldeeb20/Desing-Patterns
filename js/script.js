let cat = document.getElementById('catCounter')
let createDiv = document.createElement('div')
let createHeading = document.createElement('h1')
document.body.appendChild(createDiv).setAttribute('id', 'counter');
let divCounter = document.getElementById('counter')
divCounter.appendChild(createHeading).setAttribute('class', 'counterHeading')
let counterHeading = document.getElementsByClassName('counterHeading')
let catCounter = 0;
cat.addEventListener('click', function () {
        catCounter++
        counterHeading[0].innerHTML = catCounter;
})
