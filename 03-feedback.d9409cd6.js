!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};function t(e){return e&&e.__esModule?e.default:e}var n={},r={};Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var i="Expected a function",o=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,f=/^0o[0-7]+$/i,l=parseInt,c="object"==typeof e&&e&&e.Object===Object&&e,d="object"==typeof self&&self&&self.Object===Object&&self,v=c||d||Function("return this")(),s=Object.prototype.toString,m=Math.max,y=Math.min,g=function(){return v.Date.now()};function p(e,t,n){var r,o,a,u,f,l,c=0,d=!1,v=!1,s=!0;if("function"!=typeof e)throw new TypeError(i);function p(t){var n=r,i=o;return r=o=void 0,c=t,u=e.apply(i,n)}function S(e){return c=e,f=setTimeout(w,t),d?p(e):u}function j(e){var n=e-l;return void 0===l||n>=t||n<0||v&&e-c>=a}function w(){var e=g();if(j(e))return O(e);f=setTimeout(w,function(e){var n=t-(e-l);return v?y(n,a-(e-c)):n}(e))}function O(e){return f=void 0,s&&r?p(e):(r=o=void 0,u)}function T(){var e=g(),n=j(e);if(r=arguments,o=this,l=e,n){if(void 0===f)return S(l);if(v)return f=setTimeout(w,t),p(l)}return void 0===f&&(f=setTimeout(w,t)),u}return t=h(t)||0,b(n)&&(d=!!n.leading,a=(v="maxWait"in n)?m(h(n.maxWait)||0,t):a,s="trailing"in n?!!n.trailing:s),T.cancel=function(){void 0!==f&&clearTimeout(f),c=0,r=l=o=f=void 0},T.flush=function(){return void 0===f?u:O(g())},T}function b(e){var n=void 0===e?"undefined":t(r)(e);return!!e&&("object"==n||"function"==n)}function h(e){if("number"==typeof e)return e;if(function(e){return"symbol"==(void 0===e?"undefined":t(r)(e))||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==s.call(e)}(e))return NaN;if(b(e)){var n="function"==typeof e.valueOf?e.valueOf():e;e=b(n)?n+"":n}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(o,"");var i=u.test(e);return i||f.test(e)?l(e.slice(2),i?2:8):a.test(e)?NaN:+e}n=function(e,t,n){var r=!0,o=!0;if("function"!=typeof e)throw new TypeError(i);return b(n)&&(r="leading"in n?!!n.leading:r,o="trailing"in n?!!n.trailing:o),p(e,t,{leading:r,maxWait:t,trailing:o})};var S=document.querySelector(".feedback-form"),j=S.querySelectorAll("[name]"),w="feedback-form-state",O={};localStorage.getItem(w)&&(O=JSON.parse(localStorage.getItem(w)),j.forEach((function(e){O[e.name]&&(e.value=O[e.name])}))),S.addEventListener("input",n((function(e){O[e.target.name]=e.target.value,localStorage.setItem(w,JSON.stringify(O))}),500)),S.addEventListener("submit",(function(e){e.preventDefault();var t=!0,n=!1,r=void 0;try{for(var i,o=j[Symbol.iterator]();!(t=(i=o.next()).done);t=!0){if(""===i.value.value.trim())return void alert("Please, fill in all fields")}}catch(e){n=!0,r=e}finally{try{t||null==o.return||o.return()}finally{if(n)throw r}}console.log(O),S.reset(),localStorage.removeItem(w),O={}}))}();
//# sourceMappingURL=03-feedback.d9409cd6.js.map