document.addEventListener('DOMContentLoaded', () => {
  const menuOpenButton = document.getElementById("menu-open-button");
  const menuCloseButton = document.getElementById("menu-close-button");
  const navMenu = document.querySelector(".nav-menu");
  const body = document.body;

  // Function to toggle menu visibility
  const toggleMenu = (isOpen) => {
    body.classList.toggle("show-mobile-menu", isOpen);
  };

  // Open menu
  if (menuOpenButton) {
    menuOpenButton.addEventListener("click", () => toggleMenu(true));
  }

  // Close menu
  if (menuCloseButton) {
    menuCloseButton.addEventListener("click", () => toggleMenu(false));
  }

  // Close menu when any nav link is clicked
  if (navMenu) {
    const navLinks = navMenu.querySelectorAll(".nav-link");
    navLinks.forEach(link => {
      link.addEventListener("click", () => toggleMenu(false));
    });
  }
});