/* eslint-disable no-undef */
let animalsModel = {
        currentAnimal: null,
        animals: [
                {
                        animalName: 'Rabbit',
                        animalSrc: 'img/img_1.jpg',
                        animalAtt: 'Rabbit Picture',
                        animalClickCounter: 0
                },
                {
                        animalName: 'Fox',
                        animalSrc: 'img/img_2.jpg',
                        animalAtt: 'Fox Picture',
                        animalClickCounter: 0
                },
                {
                        animalName: 'Lion',
                        animalSrc: 'img/img_3.jpg',
                        animalAtt: 'Lion Picture',
                        animalClickCounter: 0
                },
                {
                        animalName: 'Panda',
                        animalSrc: 'img/img_4.jpg',
                        animalAtt: 'Panda Picture',
                        animalClickCounter: 0
                },
                {
                        animalName: 'Deer',
                        animalSrc: 'img/img_5.jpg',
                        animalAtt: 'Deer Picture',
                        animalClickCounter: 0
                },
        ]
}
let viewModelLink = {
        init: function () {
                animalsModel.currentAnimal = animalsModel.animals[0];
                viewAnimalContent.init();
                viewAnimalList.init();
        },
        getCurrentAnimal: function () {
                return animalsModel.currentAnimal
        },
        getAnimals: function () {
                return animalsModel.animals
        },
        setAnimals: function (animal) {
                animalsModel.currentAnimal = animal
        },
        clickCounter: function () {
                animalsModel.currentAnimal.animalClickCounter++;
                viewAnimalContent.render()
        }
}
let viewAnimalContent = {
        init: function () {
                this.animalContainer = document.getElementById('animalContainer');
                this.animalDescription = document.getElementById('animalDescription');
                this.animalPicture = document.getElementById('animalPicture');
                this.animalCounter = document.getElementById('animalCounter');
                this.bodyContent = document.body;
                this.animalPicture.addEventListener('click', function () {
                        viewModelLink.clickCounter();
                })
                this.render();
        },
        render: function () {
                var currentAnimal = viewModelLink.getCurrentAnimal();
                this.animalDescription.textContent = currentAnimal.animalName;
                this.animalCounter.textContent = currentAnimal.animalClickCounter;
                this.animalPicture.src = currentAnimal.animalSrc;
                this.bodyContent.style.backgroundImage = `url('${currentAnimal.animalSrc}')`;
        }
}
let viewAnimalList = {
        init: function () {
                this.animalsContent = document.getElementById('animalsContent');
                this.render()
        },
        render: function () {
                var animals = viewModelLink.getAnimals();
                this.animalsContent.innerHTML = '';
                for (i = 0; i < animals.length; i++) {
                        var animal = animals[i];
                        var listItem = document.createElement('li');
                        listItem.classList.add('animalItem');
                        listItem.textContent = animal.animalName;
                        listItem.addEventListener('click', (function (animal) {
                                return function () {
                                        viewModelLink.setAnimals(animal);
                                        viewAnimalContent.render();
                                }
                        })(animal));
                        this.animalsContent.appendChild(listItem);
                }
        }
}

viewModelLink.init();