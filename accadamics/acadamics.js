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







///for the first one opening and closing
// Get all icon buttons, all close buttons, and the container
const iconBtns = document.querySelectorAll('#icon-btn1');
const closeBtns = document.querySelectorAll('.close-btn');
const container = document.querySelector('#first-container');

// When any icon button is clicked, show the container
iconBtns.forEach(btn => {
  btn.addEventListener('click', function() {
    container.classList.add('open');
  });
});

// When any close button is clicked, hide the container
closeBtns.forEach(btn => {
  btn.addEventListener('click', function() {
    container.classList.remove('open');
  });
});



///for the second one opening and closing
// Get all icon buttons, all close buttons, and the container
const iconBtns2 = document.querySelectorAll('#icon-btn2');
const closeBtns2 = document.querySelectorAll('.close-btn');
const container2 = document.querySelector('#second-container');

// When any icon button is clicked, show the container
iconBtns2.forEach(btn => {
  btn.addEventListener('click', function() {
    container2.classList.add('open');
  });
});

// When any close button is clicked, hide the container
closeBtns2.forEach(btn => {
  btn.addEventListener('click', function() {
    container2.classList.remove('open');
  });
});




///for the third one opening and closing
// Get all icon buttons, all close buttons, and the container
const iconBtns3 = document.querySelectorAll('#icon-btn3');
const closeBtns3 = document.querySelectorAll('.close-btn');
const container3 = document.querySelector('#third-container');

// When any icon button is clicked, show the container
iconBtns3.forEach(btn => {
  btn.addEventListener('click', function() {
    container3.classList.add('open');
  });
});

// When any close button is clicked, hide the container
closeBtns3.forEach(btn => {
  btn.addEventListener('click', function() {
    container3.classList.remove('open');
  });
});

// ///accordion section in 1105px
// document.addEventListener("DOMContentLoaded", function () {
//   const headers = document.querySelectorAll(".accordion-headers");
//   const defaultOpenIndex = 0; // Opens the first accordion by default

//   function openAccordion(index) {
//       headers.forEach((header, i) => {
//           let content = header.nextElementSibling;

//           if (i === index) {
//               header.classList.add("active");
//               content.style.maxHeight = content.scrollHeight + "px";
//           } else {
//               header.classList.remove("active");
//               content.style.maxHeight = null;
//           }
//       });
//   }

//   // Open first section by default if screen width is 1104px or smaller
//   if (window.innerWidth <= 1104) {
//       openAccordion(defaultOpenIndex);
//   }

//   // Event listener for clicking accordion headers
//   headers.forEach((header, index) => {
//       header.addEventListener("click", function () {
//           if (this.classList.contains("active")) {
//               this.classList.remove("active");
//               this.nextElementSibling.style.maxHeight = null;
//           } else {
//               openAccordion(index);
//           }
//       });
//   });
// });

//   // Click event to open sections but never close them when clicked
//   headers.forEach((header, i) => {
//       header.addEventListener("click", function () {
//           openAccordion(i);
//       });
//   });

document.addEventListener("DOMContentLoaded", function () {
  const headers = document.querySelectorAll(".accordion-headers");
  const defaultOpenIndex = 0; // Open first accordion by default if needed

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

  // Open first accordion by default only if the screen width is 1104px or smaller
  if (window.innerWidth <= 1104) {
      openAccordion(defaultOpenIndex);
  }

  // Event listener for clicking accordion headers
  headers.forEach((header, index) => {
      header.addEventListener("click", function () {
          if (this.classList.contains("active")) {
              this.classList.remove("active");
              this.nextElementSibling.style.maxHeight = null;
          } else {
              openAccordion(index);
          }
      });
  });
});
