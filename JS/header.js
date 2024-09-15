const navbarIcon = document.getElementById('navbar-icon');
const navLinks = document.getElementById('nav-links');
const loginLink = document.getElementById('login-link');

navbarIcon.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

//Change login/logout button in header
loginLink.addEventListener('click', () => {
    if (!sessionStorage.getItem('loggedIn')) {
        window.location.href = './HTML/login.html';
    } else {
        sessionStorage.removeItem('loggedIn');
        sessionStorage.removeItem('loggedInUser');
        updateLoginButton();
    }
});
function updateLoginButton() {
    if (sessionStorage.getItem('loggedIn')) {
        loginLink.textContent = 'Logout';
        loginLink.href = '#logout';
    } else {
        loginLink.textContent = 'Login/Sign Up';
        loginLink.href = '#login';
    }
};
window.onload = updateLoginButton();