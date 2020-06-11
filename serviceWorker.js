const staticDeveProtfolio = "my-portfolio-v1.2.1"

const assets = [
    "/",
    "/index.html",
    "/style.css",
    "/scripts/canvas.js",
    "/scripts/navigation.js",
    "assets/angular.png",
    "assets/covid19_automation.jpg",
    "assets/covid19f_forecasting.jpg",
    "assets/dev_icon.svg",
    "assets/docker.png",
    "assets/dotted.gif",
    "assets/facebook.png",
    "assets/git.png",
    "assets/git.svg",
    "assets/github.png",
    "assets/gmail1.png",
    "assets/gradl_icon.svg",
    "assets/html.svg",
    "assets/instagram.png",
    "assets/js.svg",
    "assets/LinkedIn.png",
    "assets/linkedin.png",
    "assets/mobil_icon.svg",
    "assets/mongodb.svg",
    "assets/my-picture.png",
    "assets/nodejs.svg",
    "assets/portfolio.jpg",
    "assets/py_automation.jpg",
    "assets/python.png",
    "assets/react.svg",
    "assets/scss.svg",
    "assets/ts.svg",
    "assets/Twitter.png",
    "assets/vuejs.png"
]

self.addEventListener('install', installevent => {
    installevent.waitUntil(
        caches.open(staticDeveProtfolio).then(cache => {
            cache.addAll(assets);
        })
    )
})

self.addEventListener('fetch', fetchEvent => {
    fetchEvent.respondWith(
        caches.match(fetchEvent.request).then(res => {
            return res || fetch(fetchEvent.request);
        })
    )
})