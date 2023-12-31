const mobileMenu = document.querySelector(".mobileMenu");
const menuItems = document.querySelectorAll(".itemsMenu");
const menuLinks = document.querySelectorAll(".itemsMenu .scroll-a");
const icons = document.querySelectorAll(".itemsMenu i.fa-solid");
const sections = document.querySelectorAll("#content section");
const imgElement = document.getElementById("myphoto");


window.onbeforeunload = () => {
  for(const form of document.getElementsByTagName('form')) {
    form.reset();
  }
}

// On top

const scrollTopButton = document.getElementById("scrollTopButton");

function toggleScrollTopButton() {
  if (window.scrollY > 300) {
    scrollTopButton.style.display = "block";
  } else {
    scrollTopButton.style.display = "none";
  }
}

window.addEventListener("scroll", toggleScrollTopButton);

scrollTopButton.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth", 
  });
});

toggleScrollTopButton();


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

    let targetId = this.getAttribute("href");
    let target = document.querySelector(targetId);

    if (window.innerWidth < 992) {
      let offset = document.querySelector("#fixedLeftNav").offsetHeight;
      let targetPosition = target.offsetTop - offset;
      window.scrollTo({ top: targetPosition, behavior: "smooth" });
    } else {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// Adding .hoverMenu on scroll

window.addEventListener("scroll", function() {
  let currentPosition = window.scrollY + window.innerHeight / 2; 

  sections.forEach(function(section, index) {
    let offsetTop = section.offsetTop;
    let offsetBottom = offsetTop + section.clientHeight;

    if (currentPosition >= offsetTop && currentPosition < offsetBottom) {
      menuItems.forEach(function(item) {
        item.classList.remove("hoverMenu");
      });
      menuItems[index].classList.add("hoverMenu"); 
    }
  });
});


// Adding Pulse Effect

function addPulseEffect() {
  const originalBoxShadow = "0 0 10px #457032";
  const expandedBoxShadow = "0 0 30px #457032";

  imgElement.style.boxShadow = originalBoxShadow;

  function pulse(count) {
    imgElement.style.transition = "box-shadow 0.5s ease-in-out";
    imgElement.style.boxShadow = expandedBoxShadow;

    setTimeout(() => {
      imgElement.style.transition = "box-shadow 0.5s ease-in-out";
      imgElement.style.boxShadow = originalBoxShadow;

      if (count < 1) {
        setTimeout(() => {
          pulse(count + 1);
        }, 1500); 
      }
    }, 1500);
  }
  pulse(0);
}

addPulseEffect();

// custom cursor

function updateCursorPosition(event) {
  const cursor = document.getElementById('cursor');
  const cursorOutline = document.getElementById('cursor-outline');
  cursor.style.left = event.clientX + 'px';
  cursor.style.top = event.clientY + window.scrollY + 'px';

  setTimeout(() => {
    cursorOutline.style.left = event.clientX + 'px';
    cursorOutline.style.top = event.clientY + window.scrollY + 'px';
  }, 100);
}

document.addEventListener('DOMContentLoaded', function () {
  const cursor = document.getElementById('cursor');
  const cursorOutline = document.getElementById('cursor-outline');

  function setCursorStyle(isCustomCursor) {
    if (isCustomCursor) {
      cursor.style.pointerEvents = "none";
      cursorOutline.style.pointerEvents = "none";
    } else {
      cursor.style.pointerEvents = "auto";
      cursorOutline.style.pointerEvents = "auto";
    }
  }

  function checkAndSetCursorStyle() {
    if (window.innerWidth >= 991) {
      setCursorStyle(true);
      document.addEventListener('mousemove', updateCursorPosition);
      window.addEventListener('scroll', function () {
        const lastX = parseFloat(cursor.style.left);
        const lastY = parseFloat(cursor.style.top) - window.scrollY;
        cursor.style.left = lastX + 'px';
        cursor.style.top = lastY + window.scrollY + 'px';
        setTimeout(() => {
          cursorOutline.style.left = lastX + 'px';
          cursorOutline.style.top = lastY + window.scrollY + 'px';
        }, 100);
      });
    } else {
      setCursorStyle(false); 
      document.removeEventListener('mousemove', updateCursorPosition);
      cursor.style.left = '0';
      cursor.style.top = '0';
      cursorOutline.style.left = '0';
      cursorOutline.style.top = '0';
    }
  }

  checkAndSetCursorStyle();

  window.addEventListener('resize', checkAndSetCursorStyle);
});


// icons opacity

document.addEventListener('DOMContentLoaded', function () {
  const iconsContainer = document.getElementById('icons');
  const icons = document.querySelectorAll('.icons-image');

  iconsContainer.style.opacity = 1;

  icons.forEach(function (icon, index) {
    setTimeout(function () {
      icon.style.opacity = 1;
      icon.style.transform = 'translateY(0)';
    }, index * 200); 
  });
  
});


// Portfolio

 const filterButtons = document.querySelectorAll(".filter-button");
  const portfolioItems = document.querySelectorAll(".portfolio-item");
  const portfolioGallery = document.querySelector(".portfolio-gallery");

  let currentIndex = 0;
  let expanded = false;

  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const filterValue = button.getAttribute("data-filter");

      portfolioItems.forEach((item) => {
        if (filterValue === "all" || item.classList.contains(filterValue)) {
          item.style.display = "block";
        } else {
          item.style.display = "none";
        }
      });

      filterButtons.forEach((btn) => btn.classList.remove("active"));
      button.classList.add("active");

      currentIndex = 0; 
      closeExpandedImage();
    });
  });

  
 $(document).ready(function () {
  $('[data-fancybox="gallery"]').fancybox({
    loop: true,
    buttons: ["close"], 
  });
});


