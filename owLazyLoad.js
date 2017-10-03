/*
 *
 * Wlab lazyload
 *
 * Simplified pure javascript async content loading.
 *
 * @author Aritz Olabarrieta
 * @version 1.0.0
 *
 */

/*jslint browser:true*/

var owLazyLoad = {

  // Delay before loading content. The minimum should be between 80 and 200
  // (or the time spent to render the current DOM without images)
  cfgLazyLoadDelay: 400,
  // The "date-" attribute you will be attaching to your DOM elements
  // I opted not using "data-src" for example, as it could lead to repeated
  // listeners or DOM-catchers with other JS libs in the project.
  // So, your DOM element should look like this:
  // <img src="loading.gif" wl-lazyload-src="imgs/image-to-load.jpg" />
  cfgDataAttributeName: "ow-lazyload-src",

  // Usage: owLazyLoad.init();
  init: function () {

    "use strict";

    var eleList = Array.prototype.slice.call(document.querySelectorAll("[" + owLazyLoad.cfgDataAttributeName + "]"));

    if (eleList.length > 0) {

      setTimeout(function () {

        var newSrc = '';

        eleList.forEach(function (ele) {

          newSrc = ele.getAttribute(owLazyLoad.cfgDataAttributeName);

          ele.removeAttribute(owLazyLoad.cfgDataAttributeName);

          if (newSrc && newSrc !== null) {

            if (ele.nodeName === "IMG" || ele.nodeName === "VIDEO" || ele.nodeName === "AUDIO" || ele.nodeName === "IFRAME") {

              ele.src = newSrc;

            } else {

              ele.style.backgroundImage = "url('" + newSrc + "')";

            }

            ele.style.visibility = "visible";

          }

        });

      }, owLazyLoad.cfgLazyLoadDelay);

    }

  }
};

// Auto Initialise
window.addEventListener("load", function () {  
  window.removeEventListener("load", arguments.callee, false);
  owLazyLoad.init();
}, false);
