const mobileMenu = document.querySelector(".mobileMenu");
const menuItems = document.querySelectorAll(".itemsMenu");
const menuLinks = document.querySelectorAll(".itemsMenu a");
const icons = document.querySelectorAll(".itemsMenu i.fa-solid");
const sections = document.querySelectorAll("#content section");
const imgElement = document.getElementById("myphoto");

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

// new cursor

document.addEventListener('DOMContentLoaded', function () {
  if (window.innerWidth >= 991) {
    const cursor = document.getElementById('cursor');
    const cursorOutline = document.getElementById('cursor-outline');

    function updateCursorPosition(event) {
      cursor.style.left = event.clientX + 'px';
      cursor.style.top = event.clientY + window.scrollY + 'px';

      setTimeout(() => {
        cursorOutline.style.left = event.clientX + 'px';
        cursorOutline.style.top = event.clientY + window.scrollY + 'px';
      }, 100);
    }

    document.addEventListener('mousemove', updateCursorPosition);

    window.addEventListener('scroll', function (event) {
      const lastX = parseFloat(cursor.style.left);
      const lastY = parseFloat(cursor.style.top) - window.scrollY;

      cursor.style.left = lastX + 'px';
      cursor.style.top = lastY + window.scrollY + 'px';

      setTimeout(() => {
        cursorOutline.style.left = lastX + 'px';
        cursorOutline.style.top = lastY + window.scrollY + 'px';
      }, 100);
    });

    document.getElementById('btn').addEventListener('mouseover', function () {
      cursorOutline.style.height = '25px';
      cursorOutline.style.width = '25px';
    });

    document.getElementById('btn').addEventListener('mouseleave', function () {
      cursorOutline.style.height = '15px';
      cursorOutline.style.width = '15px';
    });
    
  }
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


