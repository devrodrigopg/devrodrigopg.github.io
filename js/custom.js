function startEPUB(path) {
  $("#splashScreen").show();
  if (xreader.callAppMethod && path) {
    const renditionsMobile = document.createElement("script");
    const renditionsDesktop = document.createElement("script");
    const settings = document.createElement("script");

    renditionsMobile.src = path + "/renditions-mobile.js";
    renditionsDesktop.src = path + "/renditions-desktop.js";
    settings.src = path + "/settings.js";

    document.head.appendChild(settings);
    document.head.appendChild(renditionsMobile);
    document.head.appendChild(renditionsDesktop);

    setTimeout(() => {
      $("#splashScreen").hide();
      xreader.callAppMethod("Inited", null, path);
    }, 2000);
  }
}

function toggleReadaloud(turnsPagesAutomatically) {
  if (app.toggleReadaloud) {
    app.readaloudTurnsPagesAutomatically = turnsPagesAutomatically || false;
    app.toggleReadaloud();
  }
}

function setTurnsPagesAutomatically(turnsPagesAutomatically) {
  app.readaloudTurnsPagesAutomatically = turnsPagesAutomatically || false;
}

function getTurnsPagesAutomatically() {
  return app.readaloudTurnsPagesAutomatically;
}
