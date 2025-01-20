const menu = document.querySelector("#nav-section");
const menuItems = document.querySelectorAll(".nav-link");
let hamburger= document.querySelector(".hamburger");
alert(hamburger);
const closeIcon= document.querySelector(".closeIcon");
const menuIcon = document.querySelector(".menuIcon");

function toggleMenu() {
  if (menu.classList.contains("showMenu")) {
    menu.classList.remove("showMenu");
    closeIcon.style.display = "none";
    menuIcon.style.display = "flex";
  } else {
    menu.classList.add("showMenu");
    closeIcon.style.display = "flex";
    menuIcon.style.display = "none";
  }
};
const navSection = document.querySelector('nav');

// Function to check screen width and add/remove the haMBURGUER  
function showHamburger(){
    if (window.innerWidth < 790) {
        
        if (!hamburger) {
            alert("NONE");
            hamburger = document.querySelector(".hamburger");
            hamburger.addEventListener("click", toggleMenu);
            // Create the img element
            
      
            // Apply CSS styles directly or via a class
            imgElement.style.width = '50px'; // Example inline style
            imgElement.style.height = 'auto';
            imgElement.style.margin = '10px';
      
            // Append the img to the nav section
            navSection.appendChild(imgElement);
          }
    }
    else {
        
        // Remove the image if the width is greater than or equal to 790px
        if (hamburger) {
            
            hamburger.remove();
        }
    }
}
menuItems.forEach( 

    function(menuItem) { 
  
      menuItem.addEventListener("click", toggleMenu);
  
    }
  
  )

window.addEventListener("resize", showHamburger);