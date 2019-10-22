/* eslint-disable no-undef */
let animalsModel = {
        currentAnimal: null,
        animals: [
                {
                        animalName: 'Rabbit',
                        animalSrc: 'img/img_1.jpg',
                        animalClickCounter: 0
                },
                {
                        animalName: 'Fox',
                        animalSrc: 'img/img_2.jpg',
                        animalClickCounter: 0
                },
                {
                        animalName: 'Lion',
                        animalSrc: 'img/img_3.jpg',
                        animalClickCounter: 0
                },
                {
                        animalName: 'Panda',
                        animalSrc: 'img/img_4.jpg',
                        animalClickCounter: 0
                },
                {
                        animalName: 'Deer',
                        animalSrc: 'img/img_5.jpg',
                        animalClickCounter: 0
                },
        ]
}
let viewModelLink = {
        init: function () {
                animalsModel.currentAnimal = animalsModel.animals[0];
                viewAnimalContent.init();
                viewAnimalList.init();
                adminControl.init()
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
                this.animalDescription.textContent = `This Is ${currentAnimal.animalName} Picture`;
                this.animalCounter.textContent = `Num of clicks on this beautiful Pic is: ${currentAnimal.animalClickCounter}`;
                this.animalPicture.src = currentAnimal.animalSrc;
                this.animalPicture.setAttribute('alt', `${currentAnimal.animalName} Picture`);
                this.animalPicture.setAttribute('title', `${currentAnimal.animalName} Picture`);
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
let adminControl = {
        init: function () {
                this.adminStart = document.getElementById('adminStart');
                this.adminPanel = document.getElementById('adminPanel');
                this.animalName = document.getElementById('animalName');
                this.animalSrc = document.getElementById('animalSrc');
                this.addAnimal = document.getElementById('addAnimal');
                this.cancelAnimal = document.getElementById('cancelAnimal');
                this.render()
        },
        render: function () {
                this.adminStart.innerText = 'Admin'
                this.addAnimal.innerText = 'Add'
                this.cancelAnimal.innerText = 'Cancel'
                this.adminStart.addEventListener('click', function () {
                        var _adminPanel = document.getElementById('adminPanel');
                        var _adminStart = document.getElementById('adminStart');
                        _adminPanel.classList.add('start');
                        _adminStart.classList.add('start');
                })
                this.adminPanel.addEventListener('submit', function (e) {
                        e.preventDefault();
                        if (animalsModel.animals.length < 49) {
                                animalsModel.animals.push({
                                        animalName: this.animalName.value,
                                        animalSrc: this.animalSrc.value,
                                        animalClickCounter: 0
                                })
                        }
                        viewAnimalList.init()
                })
                this.cancelAnimal.addEventListener('click', function () {
                        var _adminPanel = document.getElementById('adminPanel');
                        var _adminStart = document.getElementById('adminStart');
                        _adminPanel.classList.remove('start');
                        _adminStart.classList.remove('start');
                })

        }
}

viewModelLink.init();