function getCookie(name) {
  const ca = document.cookie.split(";");
  const caLen = ca.length;
  const cookieName = `${name}=`;
  let c;
  for (let i = 0; i < caLen; i += 1) {
    c = ca[i].replace(/^\s+/g, "");
    if (c.indexOf(cookieName) === 0) {
      return c.substring(cookieName.length, c.length);
    }
  }
  return "";
}

function injectElement(elementType, attributes, dest) {
  var doc = window.document;
  var myElement = doc.createElement(elementType);
  if (Array.isArray(attributes)) {
    attributes.forEach((attr) => {
      myElement.setAttribute(attr.name, attr.value);
    });
  } else {
    var keys = Object.keys(attributes);
    keys.forEach((key) => {
      myElement.setAttribute(key, attributes[key]);
    });
  }

  const myPromise = new Promise((resolve, reject) => {
    myElement.addEventListener("load", function () {
      resolve("loaded");
    });
  });

  if (dest == "head") {
    doc.head.appendChild(myElement);
  } else {
    doc.body.appendChild(myElement);
  }

  return myPromise;
}

window.addEventListener("load", (event) => {
  const xreaderJsUrl = decodeURIComponent(getCookie("xreaderjs_url"));

  console.warn("loading xreader from " + xreaderJsUrl);

  var urlComponents = xreaderJsUrl.split("/");
  urlComponents.pop();
  urlComponents.pop();
  const baseUrl = urlComponents.join("/") + "/";

  injectElement("script", { src: baseUrl + "js/jquery.min.js" }, "head")
    .then((value) => {
      return injectElement("script", { src: baseUrl + "js/custom.js" }, "head");
    })
    .then((value) => {
      return injectElement(
        "script",
        { src: baseUrl + "js/jquery.transit.min.js" },
        "head"
      );
    })
    .then((value) => {
      return injectElement("script", { src: baseUrl + "js/core.js" }, "head");
    })
    .then((value) => {
      return injectElement(
        "script",
        { src: baseUrl + "js/underscore-min.js" },
        "head"
      );
    })
    .then((value) => {
      return injectElement(
        "script",
        { src: baseUrl + "js/blazy.min.js" },
        "head"
      );
    })
    .then((value) => {
      return injectElement(
        "script",
        { src: baseUrl + "js/bootstrap.min.js" },
        "head"
      );
    })

    .then((value) => {
      return injectElement("script", { src: baseUrl + "js/app.js" }, "head");
    })
    .then((value) => {
      return injectElement(
        "link",
        { rel: "stylesheet", href: baseUrl + "css/bootstrap.min.css" },
        "head"
      );
    })
    .then((value) => {
      return injectElement(
        "link",
        { rel: "stylesheet", href: baseUrl + "css/styles.css" },
        "head"
      );
    })
    .then((value) => {
      return injectElement(
        "link",
        { rel: "stylesheet", href: baseUrl + "css/custom.css" },
        "head"
      );
    })

    .then((value) => {
      setTimeout(function () {
        app.windowLoaded = true;
        document.body.style.opacity = 1;
      }, 100);
      injectElement(
        "link",
        {
          rel: "icon",
          type: "image/png",
          href: baseUrl + "images/favicon.png",
        },
        "head"
      );
    });
});
