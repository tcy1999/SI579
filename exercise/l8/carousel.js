const parentNode = document.getElementById('thumbnails');
const featureNode = document.getElementById('featured');
const description = document.getElementById('current_description');
let prevHighlighted, timer;

function displayImg(idx) {
    featureNode.setAttribute('src', images[idx].url);
    featureNode.setAttribute('alt', images[idx].alt);
    description.textContent = images[idx].description;

    if(prevHighlighted) {
        prevHighlighted.classList.remove('highlighted');
    }
    images[idx].element.classList.add('highlighted');
    prevHighlighted = images[idx].element;

    if(timer) {
        clearTimeout(timer);
    }
    timer = setTimeout(() => displayImg((idx+1) % images.length), 4000);
}

for (let i = 0; i < images.length; i++){
    let myImage = document.createElement('img');
    myImage.setAttribute('src', images[i].url);
    myImage.setAttribute('alt', images[i].alt);
    parentNode.append(myImage);
    images[i].element = myImage;

    myImage.addEventListener('click', function(){
        displayImg(i);
    });
}

displayImg(0);
