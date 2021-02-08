window.APST=function(){"use strict";var t={778:function(t,e,n){function o(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}n.d(e,{default:function(){return _}});var r=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._template=e.template,this._rootElement=null,this._modalOverlay=null,this._closeButton=null,this._footerCloseButton=null,this.close=this.close.bind(this),this._loadTemplate()}var e,n;return e=t,(n=[{key:"destroy",value:function(){this._modalOverlay.removeEventListener("click",this.close),this._closeButton.removeEventListener("click",this.close),this._footerCloseButton.removeEventListener("click",this.close),delete this._template,delete this._rootElement,delete this._modalOverlay,delete this._closeButton}},{key:"_loadTemplate",value:function(){this._rootElement=this._parseHTMLFragment(this._template),this._modalOverlay=document.createElement("DIV"),this._modalOverlay.className="loading-overlay",this._modalOverlay.appendChild(this._rootElement),this._closeButton=this._rootElement.querySelector("#modal-close"),this._footerCloseButton=this._rootElement.querySelector("#modal-footer-close"),this.open()}},{key:"_fillAttributes",value:function(){}},{key:"_parseHTMLFragment",value:function(t){return(new DOMParser).parseFromString(t,"text/html").body.firstChild}},{key:"open",value:function(){document.body.appendChild(this._modalOverlay),this._modalOverlay.addEventListener("click",this.close),this._closeButton.addEventListener("click",this.close),this._footerCloseButton.addEventListener("click",this.close)}},{key:"close",value:function(t){t&&(!t||t.target!==this._modalOverlay&&t.target!==this._closeButton&&t.target!==this._footerCloseButton)||(document.body.removeChild(this._modalOverlay),this.destroy())}}])&&o(e.prototype,n),t}();function i(t){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function a(t,e){return(a=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function c(t,e){return!e||"object"!==i(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function s(t){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var l=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&a(t,e)}(r,t);var e,n,o=(e=r,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,o=s(e);if(n){var r=s(this).constructor;t=Reflect.construct(o,arguments,r)}else t=o.apply(this,arguments);return c(this,t)});function r(t){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,r),o.call(this,t)}return r}(r);function f(t){return(f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function u(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function p(t,e){return(p=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function h(t,e){return!e||"object"!==f(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function d(t){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var y=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&p(t,e)}(a,t);var e,n,o,r,i=(o=a,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=d(o);if(r){var n=d(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return h(this,t)});function a(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,a),(e=i.call(this,t))._info=t.info,e._fillAttributes(),e}return e=a,(n=[{key:"_fillAttributes",value:function(){var t="female"===this._info.gender?"venus":"mars";document.querySelector("#animal-name").innerHTML="".concat(this._info.name,'<i class="fa fa-sm fa-').concat(t," ").concat(this._info.gender,'"></i>'),document.querySelector("#modal-container").innerHTML='\n    \t<div class="dog">\n\t      <img src="'.concat(this._info.picture,'" class="dog-pp" alt="">\n\t      <div>\n\t\t      <h3>').concat(this._info.breed," (").concat(this._info.age,')</h3>\n\t\t      <p class="desc">').concat(this._info.description,'</p>\n\t        <p><u>Affinités :</u></p>\n\t        <p>\n\t\t        <span><i class="fa fa-dog ').concat(this._info.affinity.dogs,'"></i>').concat(this._info.affinity.dogs.toUpperCase(),' chiens</span><br>\n\t\t        <span><i class="fa fa-cat ').concat(this._info.affinity.cats,'"></i>').concat(this._info.affinity.cats.toUpperCase(),' chats</span><br>\n\t\t        <span><i class="fa fa-baby ').concat(this._info.affinity.baby,'"></i>').concat(this._info.affinity.baby.toUpperCase(),' enfants</span>\n\t        </p>\n\t        <p class="desc">Vous voulez changer la vie de cet animal? Consultez la page <a href="adoption.html">Adoption</a> pour plus d\'information sur les procédures d\'adoption, ou n\'hésitez pas à nous contacter pour vous positionner pour ce dernier!</p>\t\t\t\t\t\n\t      </div>\n\t    </div>')}}])&&u(e.prototype,n),a}(r),m=function(t){return new Promise((function(e){var n={method:"GET",headers:new Headers([["Content-Type","application/json; charset=UTF-8"]])};fetch(t,n).then((function(t){t&&(t.ok?e(t.text()):console.error(t.status))})).catch((function(t){console.error(t)}))}))},v=function(t,e){for(var n=new Array(e),o=t.length,r=new Array(o);e--;){var i=Math.floor(Math.random()*o);n[e]=t[i in r?r[i]:i],r[i]=--o in r?r[o]:o}return n};function b(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}var _=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._init(),document.querySelector("#credit-modal").addEventListener("click",(function(){m("assets/html/credit.html").then((function(t){new l({template:t})}))}),!1)}var e,n;return e=t,(n=[{key:"_init",value:function(){new Promise((function(t){var e={method:"GET",headers:new Headers([["Content-Type","application/json; charset=UTF-8"]])};fetch("assets/json/adoption.json",e).then((function(e){e&&(e.ok?t(e.json()):console.error(e.status))})).catch((function(t){console.error(t)}))})).then((function(t){for(var e=v(t.adopt,t.adopt.length>4?4:t.adopt.length),n=function(t){var n=document.createElement("DIV");n.classList.add("dog");var o="female"===e[t].gender?"venus":"mars";n.innerHTML='\n          <div class="dog-info">\n            <h3 class="name">'.concat(e[t].name,'<i class="fa fa-').concat(o," ").concat(e[t].gender,'"></i></h3>\n            <p class="lead desc">').concat(e[t].breed,'</p>\n            <img src="').concat(e[t].picture,'" class="dog-pp" alt="">\n            <div class="dog-match">\n              <p>Affinités :</p>&nbsp;\n              <i class="fa fa-dog ').concat(e[t].affinity.dogs,'"></i>&nbsp;\n              <i class="fa fa-cat ').concat(e[t].affinity.cats,'"></i>&nbsp;\n              <i class="fa fa-baby ').concat(e[t].affinity.baby,'"></i>\n            </div>\n            <p class="more">En savoir plus...</p>\n          </div>'),requestAnimationFrame((function(){document.querySelector("#dogs-to-adopt").appendChild(n)})),n.addEventListener("click",(function(){m("assets/html/animal.html").then((function(n){new y({template:n,info:e[t]})}))}),!1)},o=0;o<e.length;++o)n(o)}))}}])&&b(e.prototype,n),t}()}},e={};function n(o){if(e[o])return e[o].exports;var r=e[o]={exports:{}};return t[o](r,r.exports,n),r.exports}return n.d=function(t,e){for(var o in e)n.o(e,o)&&!n.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n(778)}().default;