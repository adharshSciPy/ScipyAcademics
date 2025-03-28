document.addEventListener("DOMContentLoaded", function () {
    const modal = document.getElementById("contactModal");
    const modalContent = document.querySelector(".modal-content");
    const openBtn = document.getElementById("openContact");
    const closeBtn = document.querySelector(".close");

    // Open Modal (Slide in from right)
    openBtn.addEventListener("click", function (event) {
        event.preventDefault();
        modal.style.display = "flex"; // Show modal background
        setTimeout(() => {
            modalContent.style.right = "0"; // Slide in modal
            modalContent.style.opacity = "1";
            modalContent.style.visibility = "visible";
        }, 10);
    });

    // Close Modal (Slide out to right)
    closeBtn.addEventListener("click", function () {
        modalContent.style.right = "-100%"; // Move off-screen
        modalContent.style.opacity = "0";
        modalContent.style.visibility = "hidden";
        setTimeout(() => {
            modal.style.display = "none"; // Hide modal background
        }, 300); // Matches CSS transition time
    });

    // Close modal when clicking outside content
    modal.addEventListener("click", function (event) {
        if (event.target === modal) {
            modalContent.style.right = "-100%"; // Slide out
            modalContent.style.opacity = "0";
            modalContent.style.visibility = "hidden";
            setTimeout(() => {
                modal.style.display = "none";
            }, 300);
        }
    });
});
