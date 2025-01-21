// Function to toggle the navigation menu
function toggleMenu() {
    const navSection = document.querySelector('#nav-section');
    navSection.classList.toggle('active');
    
}

// Function to adjust the menu display based on screen width
function adjustMenu() {
    const navSection = document.querySelector('#nav-section');
    const hamburger = document.querySelector('.hamburger');
    if (window.innerWidth > 800) {
        hamburger.style.display = 'none';
        navSection.classList.remove('active');
    } else {
        
        hamburger.style.display = 'flex';
        
    }
}

// Adjust menu on window resize
window.addEventListener('resize', adjustMenu);
// Initial adjustment
adjustMenu();



//document.querySelector('.closeIcon').style.display = "none";