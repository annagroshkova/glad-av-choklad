const navbar = document.getElementById('navbar')

window.addEventListener('scroll', () => {
    if (window.scrollY > 5) {
        navbar.classList.toggle('navbar_bg-color')
    }
})
