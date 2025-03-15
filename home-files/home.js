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




//the down arrow
document.addEventListener("DOMContentLoaded", function () {
    const arrowButton = document.querySelector(".arrow-btn");

    function getScrollPosition() {
        if (window.matchMedia("(max-width: 1024px)").matches) {
            return 430;
        } else {
            return 590;
        }
    }

    arrowButton.addEventListener("click", function () {
        window.scrollTo({ top: getScrollPosition(), left: 0, behavior: "smooth" });
    });

    window.addEventListener("resize", function () {
        getScrollPosition();
    });
});





//scrolling effect
document.addEventListener("DOMContentLoaded", function () {
    const movingText = document.getElementById("moving-text");
    const textOptions = ["GREAT", "STRONG", "ACTIVE"];
    let lastScrollTop = 0;
    let index = 1;
    let translateY = 0; // Start at the top

    // Set initial position
    movingText.style.transform = `translateY(${translateY}px)`;

    window.addEventListener("scroll", function () {
        let scrollTop = window.scrollY || document.documentElement.scrollTop;
        let scrollDiff = Math.abs(scrollTop - lastScrollTop); // Detects scroll amount

        if (scrollDiff > 70) { // Ensures movement happens on normal scrolling
            if (scrollTop > lastScrollTop) {
                // Scrolling Down
                if (index < textOptions.length - 1) {
                    index++;
                    translateY += 250; // Moves text down
                    movingText.innerText = textOptions[index];
                }
            } else {
                // Scrolling Up
                if (index > 0) {
                    index--;
                    translateY -= 250; // Moves text up
                    movingText.innerText = textOptions[index];
                }
            }

            // Apply smooth transition
            movingText.style.transition = "transform 0.5s ease-in-out";
            movingText.style.transform = `translateY(${translateY}px)`;

            lastScrollTop = scrollTop;
        }
    });
});



///for moving next images
document.addEventListener("DOMContentLoaded", function () {
    const images = [
        { src: "./images/javier-esteban-8zcp9L0zNhg-unsplash-1.jpg", title: "NFT APP DEVELOPMENT", subtitle: "WEB APPLICATION", description: "NEXT TRAVEL MOBILE APP DESIGN" },
        { src: "./images/travelapp.png", title: "TRAVEL MOBILE APP DESIGN", subtitle: "MOBILE APPLICATION", description: "NEXT RESTAURANT WEB APPLICATION" },
        { src: "./images/abillion-F0e3AdcwVbM-unsplash-1.jpg", title: "RESTAURANT WEB APPLICATION", subtitle: "UI/UX", description: "NEXT NFT APP DEVELOPMENT" }
    ];

    let currentIndex = 0;
    let intervalId;

    const imgElement = document.querySelector(".pro-img");
    const titleElement = document.querySelector(".image-text h3");
    const subtitleElement = document.querySelector(".image-text h4");
    const descriptionElement = document.querySelector(".img-content h1");
    const nextButton = document.getElementById("next-btn");

    function updateCarousel() {
        imgElement.src = images[currentIndex].src;
        titleElement.innerText = images[currentIndex].title;
        subtitleElement.innerText = images[currentIndex].subtitle;
        descriptionElement.innerHTML = images[currentIndex].description.replace("NEXT", "NEXT<br>");
    }

    function startCarousel() {
        intervalId = setInterval(() => {
            currentIndex = (currentIndex + 1) % images.length;
            updateCarousel();
        }, 5000);
    }

    function stopCarousel() {
        clearInterval(intervalId);
    }

    nextButton.addEventListener("click", function () {
        currentIndex = (currentIndex + 1) % images.length;
        updateCarousel();
    });

    imgElement.addEventListener("mouseenter", stopCarousel);
    imgElement.addEventListener("mouseleave", startCarousel);

    updateCarousel();
    startCarousel();
});
