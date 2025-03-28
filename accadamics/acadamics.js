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





  
///for the first one opening and closing
document.addEventListener("DOMContentLoaded", function () {
  const container = document.getElementById("first-container");
  const overlay = document.createElement("div");
  overlay.classList.add("overlay");
  document.body.appendChild(overlay); // Add overlay to the body

  const iconBtns = document.querySelectorAll("#icon-btn1");
  const closeBtns = document.querySelectorAll(".close-btn");

  function openModal() {
      container.classList.add("open");
      overlay.style.display = "block"; // Show overlay
      document.body.classList.add("modal-open"); // Disable background scroll
  }

  function closeModal() {
      container.classList.remove("open");
      overlay.style.display = "none"; // Hide overlay
      document.body.classList.remove("modal-open"); // Enable background scroll
  }


  // Open modal when clicking any icon button
  iconBtns.forEach(btn => {
      btn.addEventListener("click", openModal);
  });

  // Close modal when clicking any close button
  closeBtns.forEach(btn => {
      btn.addEventListener("click", closeModal);
  });

  // Close modal when clicking the overlay
  overlay.addEventListener("click", closeModal);
});



///for the second one opening and closing
document.addEventListener("DOMContentLoaded", function () {
  const container2 = document.getElementById("second-container");
  const overlay2 = document.createElement("div");
  overlay2.classList.add("overlay");
  document.body.appendChild(overlay2); // Add overlay to the body

  const iconBtns2 = document.querySelectorAll("#icon-btn2");
  const closeBtns2 = document.querySelectorAll(".close-btn");

  function openModal2() {
      container2.classList.add("open");
      overlay2.style.display = "block"; // Show overlay
      document.body.classList.add("modal-open"); // Disable background scroll
  }

  function closeModal2() {
      container2.classList.remove("open");
      overlay2.style.display = "none"; // Hide overlay
      document.body.classList.remove("modal-open"); // Enable background scroll
  }

  // Open modal when clicking any icon button
  iconBtns2.forEach(btn => {
      btn.addEventListener("click", openModal2);
  });

  // Close modal when clicking any close button
  closeBtns2.forEach(btn => {
      btn.addEventListener("click", closeModal2);
  });

  // Close modal when clicking the overlay
  overlay2.addEventListener("click", closeModal2);
});


///for the third one opening and closing
document.addEventListener("DOMContentLoaded", function () {
  const container3 = document.getElementById("third-container");
  const overlay3 = document.createElement("div");
  overlay3.classList.add("overlay");
  document.body.appendChild(overlay3); // Add overlay to the body

  const iconBtns3 = document.querySelectorAll("#icon-btn3");
  const closeBtns3 = document.querySelectorAll(".close-btn");

  function openModal3() {
      container3.classList.add("open");
      overlay3.style.display = "block"; // Show overlay
      document.body.classList.add("modal-open"); // Disable background scroll
  }

  function closeModal3() {
      container3.classList.remove("open");
      overlay3.style.display = "none"; // Hide overlay
      document.body.classList.remove("modal-open"); // Enable background scroll
  }

  // Open modal when clicking any icon button
  iconBtns3.forEach(btn => {
      btn.addEventListener("click", openModal3);
  });

  // Close modal when clicking any close button
  closeBtns3.forEach(btn => {
      btn.addEventListener("click", closeModal3);
  });

  // Close modal when clicking the overlay
  overlay3.addEventListener("click", closeModal3);
});
