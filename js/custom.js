var epubPath;
var showConsoleLibName = false;

window.addEventListener("load", function (event) {
  initScripts();
});

function initScripts() {
  console.log("----> init Custom Scripts <----");

  showConsoleLibName = false;

  let params = new URL(document.location).searchParams;
  epubPath = params.get("epub");

  const renditionsMobile = document.createElement("script");
  const renditionsDesktop = document.createElement("script");
  const settings = document.createElement("script");

  renditionsMobile.src = epubPath + "/renditions-mobile.js";
  renditionsDesktop.src = epubPath + "/renditions-desktop.js";
  settings.src = epubPath + "/settings.js";

  document.head.appendChild(settings);
  document.head.appendChild(renditionsMobile);
  document.head.appendChild(renditionsDesktop);

  $("#favoriteBtn").click(function (e) {
    e.preventDefault();
    alert("favorito");
  });

  $("#closeBtn").click(function (e) {
    e.preventDefault();
    alert("close");
  });
}
