(function makeNewSiteTitle() {
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
    [".tsx", "TypeScript and React"],
    [".nef", "Nikon RAW"],
  ];
  const RANDOM_FILE_TYPE =
    VALID_FILE_TYPES[Math.floor(Math.random() * VALID_FILE_TYPES.length)];
  const title = document.getElementById("site-title");
  title.innerHTML = `travis_bumgarner${RANDOM_FILE_TYPE[0]}`;
})();

(function () {
  const links = document
    .getElementById("writing-nav")
    .getElementsByTagName("a");
  const currentUrl = location.href;
  console.log(links);
  for (const link of links) {
    if (link.href === currentUrl) {
      console.log("adding active");
      link.classList.add("active");
    }
  }
})();
