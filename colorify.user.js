// ==UserScript==
// @name         colorify
// @namespace    https://ameer.io/colorify
// @version      0.1
// @description  colorify esp8266 logs
// @author       Ameer Dawood
// @match        http://*.lan/log
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    var s = document.createElement("style");
    s.setAttribute("type", "text/css");
    s.appendChild(document.createTextNode("\
                                          body {font-family: monospace; white-space: pre;} \
                                          .info {color: green;} \
                                          .warn {color: orange;} \
                                          .error {color: red;} \
                                          .debug {color: blue;} \
                                          "));
    document.querySelector("head").appendChild(s);
    var t = document.querySelector("pre").innerText;
    t = t.replace(new RegExp("(.*) I/([a-z ]{6})(.*)","g"),'<span class="info">$1 I/$2$3</span>');
    t = t.replace(new RegExp("(.*) E/([a-z ]{6})(.*)","g"),'<span class="error">$1 E/$2$3</span>');
    t = t.replace(new RegExp("(.*) W/([a-z ]{6})(.*)","g"),'<span class="warn">$1 W/$2$3</span>');
    t = t.replace(new RegExp("(.*) D/([a-z ]{6})(.*)","g"),'<span class="debug">$1 D/$2$3</span>');
    document.querySelector("pre").outerHTML = t;
})();
