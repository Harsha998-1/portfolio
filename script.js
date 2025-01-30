// Dark Mode Toggle
const darkModeToggle = document.getElementById('dark-mode-toggle');
const body = document.body;

darkModeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    
    // Toggle button text between Light and Dark mode
    if (body.classList.contains('dark-mode')) {
        darkModeToggle.textContent = '🌞 Light Mode';
    } else {
        darkModeToggle.textContent = '🌙 Dark Mode';
    }
});
