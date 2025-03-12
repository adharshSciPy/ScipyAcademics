document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById("menuToggle");
    const breadcrumb = document.getElementById("breadcrumb");

    menuToggle.addEventListener("click", function () {
        if (breadcrumb.style.transform === "translateY(0px)") {
            breadcrumb.style.transform = "translateY(-100%)";
            menuToggle.textContent = "☰";
        } else {
            breadcrumb.style.transform = "translateY(0px)";
            menuToggle.textContent = "✖"; 
        }
    });
});


///for carousel moving
let currentIndex = 0;
const items = document.querySelectorAll('.carousel-item');
const totalItems = items.length;

function updateCarousel() {
    items.forEach((item, index) => {
        item.style.display = index === currentIndex ? 'block' : 'none';
    });
}

document.getElementById('nextBtn').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % totalItems;
    updateCarousel();
});

document.getElementById('prevBtn').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + totalItems) % totalItems;
    updateCarousel();
});

updateCarousel();


