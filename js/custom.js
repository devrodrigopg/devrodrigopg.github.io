var showConsoleLibName = false;
var showNativeLog = false;
var showNativeMenu = false;
var epubIsFavorite = false;
var readaloudStatus = false;
window.addEventListener("load", function (event) {
  initScripts();
});

function initScripts() {
  showConsoleLibName = false;

  $("#favoriteBtn").click(function (e) {
    e.preventDefault();
    postMessageEpub("favoriteButton", !epubIsFavorite);
  });

  $("#closeBtn").click(function (e) {
    e.preventDefault();
    postMessageEpub("closeButton", true);
  });

  $("#readaloudBtn").click(function (e) {
    e.preventDefault();
    toggleReadaloud(true);
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
  if (showFavorite) {
    $("#favoriteBtn").css("display", "block");
  }
  if (showClose) {
    $("#closeBtn").css("display", "block");
  }

  $("#readaloudBtn").css("display", "block");
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

function readaloudIcon(status) {
  if (status) {
    readaloudStatus = true;
    $("#readaloudBtn .icon").addClass("active");
  } else {
    readaloudStatus = false;
    $("#readaloudBtn .icon").removeClass("active");
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
  return;
}

function setTurnsPagesAutomatically(turnsPagesAutomatically) {
  app.readaloudTurnsPagesAutomatically = turnsPagesAutomatically || false;
}

function getTurnsPagesAutomatically() {
  return app.readaloudTurnsPagesAutomatically;
}
