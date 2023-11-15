// JS code for slider 
const imgArr = [
    "bigBasketImg/Image File59.jpg" , 
    "bigBasketImg/Image File60.jpg" , 
    "bigBasketImg/Image File61.jpg" , 
    "bigBasketImg/Image File62.jpg" 
]

const slideImg = document.querySelector('#slideImg');
let prev = document.querySelector('#prev');
let next = document.querySelector('#next');

slideImg.setAttribute('src'  , imgArr[1]);

let currentImg = 0;
prev.addEventListener('click' , () => {
    currentImg--;
    if (currentImg < 0) {
        currentImg = imgArr.length-1;
    }
    slideImg.setAttribute('src' , imgArr[currentImg])
})
next.addEventListener('click' , () => { 
    currentImg++;
    if (currentImg >= imgArr.length) {
        currentImg = 0;
    }
    slideImg.setAttribute('src' , imgArr[currentImg])
})

// Function to automate the image change
function autoSlide() {
    currentImg++;
    if (currentImg >= imgArr.length) {
        currentImg = 0;
    }
    slideImg.setAttribute('src', imgArr[currentImg]);
}

// Set interval to automatically change images every 3 seconds (adjust the interval time as needed)
const interval = setInterval(autoSlide, 2000);