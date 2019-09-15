// ==UserScript==
// @name         colorify
// @namespace    https://ameer.io/colorify
// @version      0.4
// @description  colorify esp8266 logs
// @author       Ameer Dawood
// @homepage     https://ameer.io/colorify
// @icon         https://ameer.io/favicon.ico
// @updateURL    https://github.com/ameer1234567890/colorify/raw/gh-pages/colorify.user.js
// @downloadURL  https://github.com/ameer1234567890/colorify/raw/gh-pages/colorify.user.js
// @match        http://*.lan/log
// @grant        none
// ==/UserScript==

/*jshint multistr: true */

(function() {
    'use strict';

    var s = document.createElement("style");
    s.setAttribute("type", "text/css");
    s.appendChild(document.createTextNode("\
                                          body { \
                                              font-family: monospace; \
                                              white-space: pre; \
                                              color: rgb(187, 187, 187); \
                                              background-color: rgb(45,15,44); \
                                          } \
                                          span {line-height: 18px;} \
                                          .info {background-color: green;} \
                                          .warn {background-color: orange;} \
                                          .error {background-color: red;} \
                                          .debug {background-color: blue;} \
                                          .tag {background-color: gray;} \
                                          .box {color: white; padding: 1px 5px; margin-right: 1px;} \
                                          "));
    document.querySelector("head").appendChild(s);
    var t = document.querySelector("pre").innerText;
    t = t.replace(new RegExp("(.*) I/([a-z ]{6})(:)(.*)","g"),'$1 <span class="info box">I</span><span class="tag box">$2</span>$4');
    t = t.replace(new RegExp("(.*) E/([a-z ]{6})(:)(.*)","g"),'$1 <span class="error box">E</span><span class="tag box">$2</span>$4');
    t = t.replace(new RegExp("(.*) W/([a-z ]{6})(:)(.*)","g"),'$1 <span class="warn box">W</span><span class="tag box">$2</span>$4');
    t = t.replace(new RegExp("(.*) D/([a-z ]{6})(:)(.*)","g"),'$1 <span class="debug box">D</span><span class="tag box">$2</span>$4');
    document.querySelector("pre").outerHTML = t;
})();
