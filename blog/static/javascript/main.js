const makeNewSiteTitle = () => {
    const VALID_FILE_TYPES = [
        [".cpp", "C++"],
        [".css", "CSS"],
        [".dxf", "AutoCAD"],
        [".html", "HTML"],
        [".json", "json"],
        [".js", "JavaScript"],
        [".pde", "Arduino"],
        [".psd", "Photoshop"],
        [".py", "Python"],
        [".scss", "SASS"],
        [".sketch", "Sketch"],
        [".sldprt", "SolidWorks"],
        [".sh", "Shell"],
        [".dng", "Lightroom"],
    ]
    const RANDOM_FILE_TYPE = VALID_FILE_TYPES[Math.floor(Math.random() * VALID_FILE_TYPES.length)];
    const title = document.getElementById('site-title')
    title.innerHTML = `travis_bumgarner${RANDOM_FILE_TYPE[0]}`
}

(function () {
    makeNewSiteTitle()
})();

(function () {
    const links = document.getElementById('sidebar').getElementsByTagName('a')
    const currentUrl = location.href
    console.log('current', currentUrl)
    for (const link of links) {
        console.log(link.href)
        if (link.href === currentUrl) {
            link.classList.add('active')
        }
    }
}())
