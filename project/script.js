document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
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
