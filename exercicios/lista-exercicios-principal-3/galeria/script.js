document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    hamburger.addEventListener('click', function() {
        // Alternar classe active no menu
        navMenu.classList.toggle('active');
        
        // Transformar o hamburger em X
        this.classList.toggle('open');
    });
});