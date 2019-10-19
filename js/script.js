for (let i = 0; i < 5; i++) {
        let createContainer = document.createElement('div');
        document.body.appendChild(createContainer).setAttribute('class', 'catContainer');
        let createImg = document.createElement('img');
        let selectContainer = document.querySelectorAll('.catContainer');
        let x = i + 1;
        selectContainer[i].appendChild(createImg).setAttribute('src', `img/img_${x}.jpg`);
        let createHeading = document.createElement('h1');
        let selectCat = document.querySelectorAll('img');
        selectContainer[i].insertBefore(createHeading, selectCat[i].nextSibling);
        let selectHeading = document.querySelectorAll('h1');
        let counter = 0;
        selectHeading[i].innerText = `Pic Num ${i + 1}, You Clicked: ${counter}`;
        selectCat[i].addEventListener('click', function () {
                counter++
                this.parentElement.classList.add('active');
                $(this).parent().siblings().removeClass('active')
                selectHeading[i].innerText = `Pic Num ${i + 1}, You Clicked: ${counter}`;
        })
}