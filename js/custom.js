var showConsoleLibName = false;

window.addEventListener("load", function (event) {
  initScripts();
});

function initScripts() {
  console.log("----> init Custom Scripts <----");

  showConsoleLibName = false;
  $("#favoriteBtn").click(function (e) {
    e.preventDefault();
    alert("favorito");
  });

  $("#closeBtn").click(function (e) {
    e.preventDefault();
    alert("close");
  });
}

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
      xreader.callAppMethod("Inited", null, path);
      $("#favoriteBtn").css("display", "block");
      $("#closeBtn").css("display", "block");
      $("#splashScreen").hide();
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
