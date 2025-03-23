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
    const textOptions = ["GREAT", "STRONG", "ACTIVE"];
    const movingText = document.getElementById("moving-text");

    let lastScrollTop = 0;
    let index = 0; // Start from "GREAT"
    let translateY = 20; // Start above the visible area

    // Set initial position (at the top)
    movingText.style.transform = `translateY(${translateY}px)`;

    window.addEventListener("scroll", function () {
        let scrollTop = window.scrollY || document.documentElement.scrollTop;
        let scrollDiff = Math.abs(scrollTop - lastScrollTop);

        if (scrollDiff > 70) { // Trigger movement after significant scrolling
            if (scrollTop > lastScrollTop) {
                // Scrolling Down
                if (index < textOptions.length - 1) {
                    index++;
                    translateY += 185; // Moves text downward
                }
            } else {
                // Scrolling Up
                if (index > 0) {
                    index--;
                    translateY -= 185; // Moves text upward
                }
            }

            // Apply smooth movement and transition
            // movingText.style.opacity = "0";
            setTimeout(() => {
                movingText.innerText = textOptions[index];
                movingText.style.transform = `translateY(${translateY}px)`;
                movingText.style.opacity = "1";
            }, 500); // Syncs with CSS transition duration

            lastScrollTop = scrollTop;
        }
    });
});







///this is for academics
// ///for opening the div while clicking image
// document.addEventListener("DOMContentLoaded", function () {
//     const container = document.getElementById("first-container");
//     const overlay = document.createElement("div");
//     overlay.classList.add("overlay");
//     document.body.appendChild(overlay); // Add overlay to the body

//     const imgElement = document.querySelector(".pro-img");
//     const closeButton = document.querySelector(".close-btn");

//     imgElement.addEventListener("click", function () {
//         container.classList.add("open");
//         overlay.style.display = "block"; // Show overlay
//         document.body.classList.add("modal-open"); // Disable background scroll
//     });

//     closeButton.addEventListener("click", function () {
//         container.classList.remove("open");
//         overlay.style.display = "none"; // Hide overlay
//         document.body.classList.remove("modal-open"); // Enable background scroll
//     });

//     overlay.addEventListener("click", function () {
//         container.classList.remove("open");
//         overlay.style.display = "none"; // Hide overlay when clicking outside
//         document.body.classList.remove("modal-open");
//     });
// });





// /cursor pointer icon
// document.addEventListener("DOMContentLoaded", function () {
//     const proImg = document.querySelector(".pro-img");
//     const cursor = document.createElement("div");
//     cursor.classList.add("custom-cursor");
//     cursor.innerHTML = '<i class="fa-solid fa-link"></i>'; // Icon inside
//     document.body.appendChild(cursor);

//     proImg.addEventListener("mouseenter", () => {
//         cursor.style.display = "flex";
//     });

//     proImg.addEventListener("mouseleave", () => {
//         cursor.style.display = "none";
//     });

//     document.addEventListener("mousemove", (e) => {
//         cursor.style.left = `${e.pageX}px`;
//         cursor.style.top = `${e.pageY}px`;
//     });
// });







//moving images and opening the div in project
document.addEventListener("DOMContentLoaded", function () {
    const images = [
        {
            src: "./images/javier-esteban-8zcp9L0zNhg-unsplash-1.jpg",
            container: "first-container",
            title: "NFT APP DEVELOPMENT",
            subtitle: "WEB APPLICATION",
            description: "NEXT TRAVEL MOBILE APP DESIGN",
            client: "GOOGLE",
            date: "SEPTEMBER 2, 2023"
        },
        {
            src: "./images/travelapp.png",
            container: "second-container",
            title: "TRAVEL MOBILE APP DESIGN",
            subtitle: "MOBILE APPLICATION",
            description: "NEXT RESTAURANT WEB APPLICATION",
            client: "TRAVEL AGENCY",
            date: "OCTOBER 10, 2023"
        },
        {
            src: "./images/abillion-F0e3AdcwVbM-unsplash-1.jpg",
            container: "third-container",
            title: "RESTAURANT WEB APPLICATION",
            subtitle: "UI/UX",
            description: "NEXT NFT APP DEVELOPMENT",
            client: "RESTAURANT GROUP",
            date: "NOVEMBER 15, 2023"
        }
    ];

    let currentIndex = 0;
    let intervalId;

    const imgElement = document.querySelector(".pro-img");
    const titleElement = document.querySelector(".image-text h3");
    const subtitleElement = document.querySelector(".image-text h4");
    const descriptionElement = document.querySelector(".img-content h1");
    const nextButton = document.getElementById("next-btn");

    const modalContainers = document.querySelectorAll(".container2"); 
    const overlay = document.createElement("div");
    overlay.classList.add("overlay");
    document.body.appendChild(overlay);

    const modalTitle = document.querySelector(".article-card h2");
    const modalSubtitle = document.querySelector(".meta p:nth-child(1)");
    const modalClient = document.querySelector(".meta p:nth-child(2)");
    const modalDate = document.querySelector(".meta p:nth-child(3)");

    function updateCarousel() {
        const image = images[currentIndex];
        imgElement.src = image.src;
        titleElement.innerText = image.title;
        subtitleElement.innerText = image.subtitle;
        descriptionElement.innerHTML = image.description.replace("NEXT", "NEXT<br>");
    }

    function updateModal() {
        const image = images[currentIndex];

        modalContainers.forEach(container => container.classList.remove("open")); // Close all modals
        document.getElementById(image.container).classList.add("open"); // Open the correct modal

        modalTitle.innerText = image.title;
        modalSubtitle.innerText = image.subtitle;
        modalClient.innerText = "CLIENT: " + image.client;
        modalDate.innerText = "DATE: " + image.date;

        overlay.style.display = "block"; // Show overlay
        document.body.classList.add("modal-open"); // Disable background scroll
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

    imgElement.addEventListener("click", function () {
        updateModal();
    });

    overlay.addEventListener("click", function () {
        modalContainers.forEach(container => container.classList.remove("open"));
        overlay.style.display = "none";
        document.body.classList.remove("modal-open");
    });

    document.querySelectorAll(".close-btn").forEach(button => {
        button.addEventListener("click", function () {
            modalContainers.forEach(container => container.classList.remove("open"));
            overlay.style.display = "none";
            document.body.classList.remove("modal-open");
        });
    });

    updateCarousel();
    startCarousel();
});



//for opening a tag for last section
document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll(".selection-page a");
    const divs = document.querySelectorAll(".last-div");

    divs.forEach(div => div.style.display = "none"); 
    document.getElementById("last-div1").style.display = "block"; 

    links.forEach((link, index) => {
        link.addEventListener("click", function (event) {
            event.preventDefault(); 
            divs.forEach(div => div.style.display = "none");
            document.getElementById(`last-div${index + 1}`).style.display = "block";
        });
    });
});



///accordion section in 1024px
document.addEventListener("DOMContentLoaded", function () {
    const headers = document.querySelectorAll(".accordion-header");
    const defaultOpenIndex = 0; // Web Development opens by default

    function openAccordion(index) {
        headers.forEach((header, i) => {
            let content = header.nextElementSibling;

            if (i === index) {
                header.classList.add("active");
                content.style.maxHeight = content.scrollHeight + "px";
            } else {
                header.classList.remove("active");
                content.style.maxHeight = null;
            }
        });
    }

    // Open Web Development section by default on 1024px or smaller screens
    if (window.innerWidth <= 1024) {
        openAccordion(defaultOpenIndex);
    }

    // Click event to open sections but never close them when clicked
    headers.forEach((header, i) => {
        header.addEventListener("click", function () {
            openAccordion(i);
        });
    });
});
