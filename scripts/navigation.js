

window.addEventListener('load', function() {
    var navs = document.getElementsByClassName('nav-link');
    for (let i = 0; i < navs.length; i++) {
        navs[i].addEventListener('click', function() {
            var current = document.getElementsByClassName('nav-active');
            current[0].className = current[0].className.replace('nav-active','');
            this.className += ' nav-active';
        });
    }
})

window.addEventListener('scroll', function() {
    var navBar = document.getElementsByClassName('nav-bar');
        if (window.pageYOffset >= 102) {
            navBar[0].classList.add('fixed-nav');
        } else {
            navBar[0].classList.remove('fixed-nav');
        }
});
