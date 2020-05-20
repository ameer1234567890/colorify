// ==UserScript==
// @name         colorify
// @namespace    https://ameer.io/colorify
// @version      0.6.0
// @date         2020-05-20
// @description  colorify esp8266 logs
// @author       Ameer Dawood
// @homepage     https://ameer.io/colorify
// @icon         https://ameer.io/favicon.ico
// @updateURL    https://github.com/ameer1234567890/colorify/raw/gh-pages/colorify.user.js
// @downloadURL  https://github.com/ameer1234567890/colorify/raw/gh-pages/colorify.user.js
// @match        http://*.lan/log
// @grant        none
// ==/UserScript==

/* jshint multistr: true */

(function() {
    'use strict';

    var s = document.createElement("style");
    s.setAttribute("type", "text/css");
    s.appendChild(document.createTextNode("\
                                          ::-webkit-scrollbar { \
                                              background-color: #1c1e1f; \
                                              color: #c5c1b9; \
                                          } \
                                          ::-webkit-scrollbar-thumb { \
                                              background-color: #2a2c2e; \
                                          } \
                                          ::-webkit-scrollbar-thumb:hover { \
                                              background-color: #323537; \
                                          } \
                                          ::-webkit-scrollbar-thumb:active { \
                                              background-color: #3d4043; \
                                          } \
                                          ::-webkit-scrollbar-corner { \
                                              background-color: #181a1b; \
                                          } \
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
                                          .tag {background-color: rgb(60, 64, 67);} \
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
