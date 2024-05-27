var epubPath;
var showConsoleLibName = false;
var showNativeLog = false;
var showNativeMenu = false;
var epubIsFavorite = false;

window.addEventListener("load", function (event) {
  initScripts();
});

function initScripts() {
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
    postMessageEpub("favoriteButton", !epubIsFavorite);
  });

  $("#closeBtn").click(function (e) {
    e.preventDefault();
    postMessageEpub("closeButton", true);
  });
}

function getTotalPages() {
  return app?.rendition?.data?.pages?.length || null;
}

function isEndPage() {
  return app.currentPageNumber === app?.rendition?.data?.pages?.length;
}
function isStartPage() {
  return app.currentPageNumber === 1;
}

function epubStarted() {
  $("#favoriteBtn").css("display", "block");
  $("#closeBtn").css("display", "block");
  $("#splashScreen").hide();
  postMessageEpub("epubStarted", true);
}

function toogleMenuAudio() {
  if ($("#audioControlsModal").css("display") != "none") {
    $("#audioControlsModal").modal("hide");
  } else {
    $("#audioControlsModal").modal("show");
  }
}

function toogleMenuSearch() {
  if ($("#searchControlsModal").css("display") != "none") {
    $("#searchControlsModal").modal("hide");
  } else {
    $("#searchControlsModal").modal("show");
  }
}

function toogleMenuLanguage() {
  if ($("#languageControlsModal").css("display") != "none") {
    $("#languageControlsModal").modal("hide");
  } else {
    $("#languageControlsModal").modal("show");
  }
}

function toogleMenuSummary() {
  if ($("#tocModal").css("display") != "none") {
    $("#tocModal").modal("hide");
  } else {
    $("#tocModal").modal("show");
  }
}

function updatePageChange(pageNumber) {
  postMessageEpub("updatePageChange", pageNumber);

  if (isStartPage()) {
    postMessageEpub("pageStart", true);
  }

  if (isEndPage()) {
    postMessageEpub("pageEnd", true);
  }
}

function favoriteIcon(status) {
  if (status) {
    epubIsFavorite = true;
    $("#favoriteBtn .icon").addClass("favorited");
  } else {
    epubIsFavorite = false;
    $("#favoriteBtn .icon").removeClass("favorited");
  }
}

function postMessageEpub(messageKey, messageData) {
  if (messageKey && messageData) {
    const data = {
      key: messageKey,
      data: messageData,
    };
    const dataJson = JSON.stringify(data);
    window?.ReactNativeWebView?.postMessage(dataJson);
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
