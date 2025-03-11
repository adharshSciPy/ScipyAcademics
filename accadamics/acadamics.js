// Function to handle section toggling when sidebar links are clicked
function toggleContent(event) {
    event.preventDefault(); // Prevent default anchor behavior

    // Hide all sections by removing the 'open' class
    const allSections = document.querySelectorAll('.content > div');
    allSections.forEach(section => {
        section.classList.remove('open');
    });

    // Remove 'active' class from all sidebar links
    const allLinks = document.querySelectorAll('.sidebar a');
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
    document.querySelector('.sidebar a[href="#book"]').classList.add('active');
};

// Add event listeners to sidebar links
document.querySelectorAll('.sidebar a').forEach(link => {
    link.addEventListener('click', toggleContent);
});
