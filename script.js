document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

function validateForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    if (name.trim() === "" || email.trim() === "" || message.trim() === "") {
        alert("All fields must be filled out");
        return false;
    }

    // Add more complex validation if needed, e.g., email format validation

    alert("Form submitted successfully!");
    return true;
}

window.onscroll = function () {
    const currentScrollPos = window.pageYOffset;
    const header = document.getElementById('main-header');

    // Show/hide "Go to Top" button
    if (currentScrollPos > 100) {
        goToTopBtn.classList.add('show');
    } else {
        goToTopBtn.classList.remove('show');
    }

    // Show/hide header
    if (prevScrollPos > currentScrollPos) {
        header.classList.remove('hide');
    } else {
        header.classList.add('hide');
    }

    prevScrollPos = currentScrollPos;
};
document.addEventListener("DOMContentLoaded", function () {
    var goToTopBtn = document.getElementById("goToTopBtn");

    window.onscroll = function () {
        toggleGoToTopBtn();
    };

    function toggleGoToTopBtn() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            goToTopBtn.style.display = "block";
        } else {
            goToTopBtn.style.display = "none";
        }
    }
});

function goToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
let circle = document.querySelector('.circle');
let slider = document.querySelector('.slider');
let list = document.querySelector('.list');
let prev = document.getElementById('prev');
let next = document.getElementById('next');
let items = document.querySelectorAll('.list .item');
let count = items.length;
let active = 1;
let leftTransform = 0;
let width_item = items[active].offsetWidth;

next.onclick = () => {
    active = active >= count - 1 ? count - 1 : active + 1;
    runCarousel();
}
prev.onclick = () => {
    active = active <= 0 ? active : active - 1;
    runCarousel();
}
function runCarousel() {
    prev.style.display = (active == 0) ? 'none' : 'block';
    next.style.display = (active == count - 1) ? 'none' : 'block';


    let old_active = document.querySelector('.item.active');
    if(old_active) old_active.classList.remove('active');
    items[active].classList.add('active');

     leftTransform = width_item * (active - 1) * -1;
    list.style.transform = `translateX(${leftTransform}px)`;
}
runCarousel();


// Set Text on a Circle
let textCircle = circle.innerText.split('');
circle.innerText = '';
textCircle.forEach((value, key) => {
    let newSpan =  document.createElement("span");
    newSpan.innerText = value;
    let rotateThisSpan = (360 / textCircle.length) * (key + 1);
    newSpan.style.setProperty('--rotate', rotateThisSpan + 'deg');
    circle.appendChild(newSpan); 
});
