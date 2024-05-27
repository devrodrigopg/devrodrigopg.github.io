var withPath = true;

let params = new URL(document.location).searchParams;
var epubPath = params.get("epub");

const renditionsMobile = document.createElement("script");
const renditionsDesktop = document.createElement("script");
const settings = document.createElement("script");

renditionsMobile.src = epubPath + "/renditions-mobile.js";
renditionsDesktop.src = epubPath + "/renditions-desktop.js";
settings.src = epubPath + "/settings.js";

document.head.appendChild(settings);
document.head.appendChild(renditionsMobile);
document.head.appendChild(renditionsDesktop);
