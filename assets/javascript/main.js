

const container = document.querySelector('.carousel-container') ;
const slides = document.querySelectorAll('.carousel-slide') ;
let counter= 1;


function updateCarousel(){
    slides.forEach(slide => {
        slide.style.transform = `translateX(${-100 * counter}%)`;
    });
}

function nextSlide(){
    if (counter >= slide.length - 1) return; 
    counter++;
    updateCarousel();
}

function prevSlide(){
    if (counter <= 0) return;
    counter--;
    updateCarousel();
}



let username = prompt("Enter your username")

while (validateUsername(username) == false){
    username = prompt("Username not valid. Please enter a valid username")
}

let password = prompt ("Enter your password")
validatePassword(password)

alert("You have come to the end of the program")



function validateUsername(username) {
    if(username == null){
        return false
    }
    if (username.length > 10){ 
        return false
    } else {
        return true
    }
}

function validatePassword (password) {
    if (password == null){
        return false
    }

    if (password.length < 6) {
        return false
    } else {
        return true
    }
}