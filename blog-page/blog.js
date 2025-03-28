document.addEventListener("DOMContentLoaded", function () {
    const menuToggless = document.getElementById("menuToggle");
    const breadcrumbss = document.getElementById("breadcrumb");

    menuToggless.addEventListener("click", function () {
        if (breadcrumbss.style.transform === "translateY(0px)") {
            breadcrumbss.style.transform = "translateY(-100%)";
            menuToggless.textContent = "☰";
        } else {
            breadcrumbss.style.transform = "translateY(0px)";
            menuToggless.textContent = "✖";
        }
    });
});