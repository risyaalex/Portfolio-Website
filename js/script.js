let mobileMenu = document.querySelector(".mobileMenu");
let menuItems = document.querySelectorAll(".itemsMenu");
let menuLinks = document.querySelectorAll(".itemsMenu a");
let icons = document.querySelectorAll(".itemsMenu i.fa-solid");

// Mobile menu show/hide
mobileMenu.addEventListener("click", function () {
  menuItems.forEach(function(item) {
    item.classList.toggle("active");
  });
});

// Close mobile menu on item click
menuItems.forEach(function(item) {
  item.addEventListener("click", function () {
    menuItems.forEach(function(item) {
      item.classList.remove("active");
    });
  });
});

// Active menu item on click
menuLinks.forEach(function(link) {
  link.addEventListener("click", function(event) {
    menuLinks.forEach(function(link) {
      link.closest(".itemsMenu").classList.remove("hoverMenu");
    });
    this.closest(".itemsMenu").classList.add("hoverMenu");
  });
});

// Menu item hover effect
menuItems.forEach(function(menuItem) {
    menuItem.addEventListener("mouseenter", function () {
    let href = this.querySelector("a");
        if (href) {
            href.style.color = "rgb(255, 106, 0)";
        }

    let icon = this.querySelector("i.fa-solid");
    if (icon) {
      icon.style.transform = "scale(1.3)";
      icon.style.transition = "transform 0.5s ease";
      icon.style.color = "rgb(255, 106, 0)";
    }
  });

    menuItem.addEventListener("mouseleave", function () {
    let href = this.querySelector("a");
      if (href) {
            href.style.color = "#030303";
        }

    let icon = this.querySelector("i.fa-solid");
    if (icon) {
      icon.style.transform = "rotate(90deg)";
        icon.style.transition = "transform 0.5s ease";
        icon.style.color = "#030303";
    }
  });
});

// Smooth scroll

menuLinks.forEach(function(link) {
  link.addEventListener("click", function(event) {
    event.preventDefault();

    var targetId = this.getAttribute("href");
    var target = document.querySelector(targetId);

    if (target) {
      var offset = document.querySelector("#fixedLeftNav").offsetHeight;
      var targetPosition = target.offsetTop - offset;
      window.scrollTo({ top: targetPosition, behavior: "smooth" });
    }
  });
});
