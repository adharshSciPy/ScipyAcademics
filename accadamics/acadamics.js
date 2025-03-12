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

// Function to handle section toggling when sidebar links are clicked
function toggleContent(event) {
    event.preventDefault(); // Prevent default anchor behavior

    // Hide all sections by removing the 'open' class
    const allSections = document.querySelectorAll('.content > div');
    allSections.forEach(section => {
        section.classList.remove('open');
    });

    // Remove 'active' class from all sidebar links
    const allLinks = document.querySelectorAll('.sidebar1 a');
    allLinks.forEach(link => {
        link.classList.remove('active');
    });

    // Show the clicked section by adding the 'open' class
    const targetId = event.currentTarget.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetId);
    if (targetSection) {
        targetSection.classList.add('open');
    }

    // Add 'active' class to the clicked link
    event.currentTarget.classList.add('active');
}

// When the page loads, show the 'book' section by default
window.onload = () => {
    document.getElementById('book').classList.add('open');
    document.querySelector('.sidebar1 a[href="#book"]').classList.add('active');
};

// Add event listeners to sidebar links
document.querySelectorAll('.sidebar1 a').forEach(link => {
    link.addEventListener('click', toggleContent);
});





// Get the icon button, close button, and the container
const iconBtn = document.querySelector('.icon-btn');
const closeBtn = document.querySelector('.close-btn');
const container = document.querySelector('.container2');

// When the icon button is clicked, show the container and slide it in
iconBtn.addEventListener('click', function() {
  container.classList.add('open');
});

// When the close button is clicked, hide the container and slide it out
closeBtn.addEventListener('click', function() {
  container.classList.remove('open');
});


