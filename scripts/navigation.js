

// window.addEventListener('load', function() {
//     var navs = document.getElementsByClassName('nav-link');
//     for (let i = 0; i < navs.length; i++) {
//         navs[i].addEventListener('click', function() {
//             var current = document.getElementsByClassName('nav-active');
//             current[0].className = current[0].className.replace('nav-active','');
//             this.className += ' nav-active';
//         });
//     }
// })

window.addEventListener('scroll', function() {
    var navBar = document.getElementsByClassName('nav-bar');
    if (window.pageYOffset >= 102) {
        navBar[0].classList.add('fixed-nav');
    } else {
        navBar[0].classList.remove('fixed-nav');
    }
    changeNavFocus();
});

function changeNavFocus() {
    var sections = document.getElementsByTagName('section');
    var navs = document.getElementsByClassName('nav-link');
    for (let i = 0; i < sections.length; i++) {
        navs[i].classList.remove('nav-active');
        if(isSectionInView(sections[i])) {
            navs[i].classList.add('nav-active');
        }
    }
}

function isSectionInView(el) {
    const scroll = window.scrollY || window.pageYOffset
	const boundsTop = el.getBoundingClientRect().top + scroll
	
	const viewport = {
		top: scroll,
		bottom: scroll + window.innerHeight,
	}
	
    const bounds = {
		top: boundsTop,
		bottom: boundsTop + el.clientHeight,
	}
	
	return (bounds.top <= (viewport.top+viewport.bottom)/2) && (bounds.bottom >= ((viewport.top+viewport.bottom)/2));
}