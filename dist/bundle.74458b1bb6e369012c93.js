!function(e){function t(t){for(var n,c,i=t[0],l=t[1],u=t[2],s=0,f=[];s<i.length;s++)c=i[s],Object.prototype.hasOwnProperty.call(o,c)&&o[c]&&f.push(o[c][0]),o[c]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n]);for(m&&m(t);f.length;)f.shift()();return a.push.apply(a,u||[]),r()}function r(){for(var e,t=0;t<a.length;t++){for(var r=a[t],n=!0,i=1;i<r.length;i++){var l=r[i];0!==o[l]&&(n=!1)}n&&(a.splice(t--,1),e=c(c.s=r[0]))}return e}var n={},o={0:0},a=[];function c(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,c),r.l=!0,r.exports}c.m=e,c.c=n,c.d=function(e,t,r){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},c.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(c.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)c.d(r,n,function(t){return e[t]}.bind(null,n));return r},c.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="";var i=window.webpackJsonp=window.webpackJsonp||[],l=i.push.bind(i);i.push=t,i=i.slice();for(var u=0;u<i.length;u++)t(i[u]);var m=l;a.push([10,1]),r()}({10:function(e,t,r){"use strict";r.r(t);var n=r(0),o=r.n(n),a=r(2),c=r.n(a);r(8);function i(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var r=[],n=!0,o=!1,a=void 0;try{for(var c,i=e[Symbol.iterator]();!(n=(c=i.next()).done)&&(r.push(c.value),!t||r.length!==t);n=!0);}catch(e){o=!0,a=e}finally{try{n||null==i.return||i.return()}finally{if(o)throw a}}return r}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return l(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return l(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function l(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var u=function(e){var t=e.addCommentHandler,r=i(Object(n.useState)(""),2),a=r[0],c=r[1],l=i(Object(n.useState)(""),2),u=l[0],m=l[1];return o.a.createElement("form",{onSubmit:function(e){e.preventDefault(),u.trim()&&a.trim()?(t(a,u),m(""),c("")):alert("Введите данные.")}},o.a.createElement("div",{className:"form-group row"},o.a.createElement("label",{htmlFor:"commentAuthor",className:"col-sm-2 col-form-label"},"Имя"),o.a.createElement("div",{className:"col-sm-10"},o.a.createElement("input",{id:"commentAuthor",type:"text",className:"form-control",placeholder:"Введите свое Имя...",value:a,onChange:function(e){return c(e.target.value)}}))),o.a.createElement("div",{className:"form-group row"},o.a.createElement("label",{htmlFor:"commentBox",className:"col-sm-2 col-form-label"},"Ваш комментарий"),o.a.createElement("div",{className:"col-sm-10"},o.a.createElement("textarea",{id:"commentBox",rows:"3",type:"text",className:"form-control",placeholder:"Оставьте свой комментарий...",value:u,onChange:function(e){return m(e.target.value)}}),o.a.createElement("button",{type:"submit",className:"btn btn-primary mt-4"},"Отправить"))))},m=function(e){var t=e.comments,r=e.removeCommentHandler;return o.a.createElement("ul",{className:"list-group mt-5"},t.map((function(e){return o.a.createElement("li",{className:"media list-group-item mb-4",key:e.id},o.a.createElement("div",{className:"media-body comment"},o.a.createElement("div",null,o.a.createElement("h5",{className:"mt-0 mb-1"},e.name),o.a.createElement("span",null,e.value),o.a.createElement("small",null,e.time," ",e.date," ")),o.a.createElement("button",{type:"button",className:"btn btn-outline-dark btn-sm",onClick:function(){return r(e.id)}},"×")))})))},s=function(){return o.a.createElement("div",{className:"alert alert-primary",role:"alert"},o.a.createElement("div",{className:"container text-center"},o.a.createElement("h1",{className:"alert-heading"},"COMMENT WIDGET")))};function f(e){return(f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function y(e){return function(e){if(Array.isArray(e))return b(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return b(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return b(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function b(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function d(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function v(e,t){return(v=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function h(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=w(e);if(t){var o=w(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return g(this,r)}}function g(e,t){return!t||"object"!==f(t)&&"function"!=typeof t?O(e):t}function O(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function w(e){return(w=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function S(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var j=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&v(e,t)}(c,e);var t,r,n,a=h(c);function c(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,c),S(O(e=a.call(this)),"addCommentHandler",(function(t,r){var n=new Date,o=n.toLocaleTimeString(),a=n.toLocaleDateString();e.setState({comments:[].concat(y(e.state.comments),[{id:e.state.comments.length?e.state.comments.reduce((function(e,t){return e.id>t.id?e:t})).id+1:1,name:t,value:r,date:a,time:o}])},(function(){return localStorage.setItem("state",JSON.stringify(e.state))}))})),S(O(e),"removeCommentHandler",(function(t){e.setState({comments:e.state.comments.filter((function(e){return e.id!==t}))},(function(){return localStorage.setItem("state",JSON.stringify(e.state))}))})),e.state={comments:[]},e}return t=c,(r=[{key:"componentDidMount",value:function(){localStorage.getItem("state")&&this.setState(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){S(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},JSON.parse(localStorage.getItem("state"))))}},{key:"render",value:function(){return o.a.createElement("div",{className:"container"},o.a.createElement(s,null),o.a.createElement(u,{addCommentHandler:this.addCommentHandler}),o.a.createElement(m,{comments:this.state.comments,removeCommentHandler:this.removeCommentHandler}))}}])&&d(t.prototype,r),n&&d(t,n),c}(n.Component),E=r(3);c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(j,null)),document.getElementById("root")),E.a()},3:function(e,t,r){"use strict";(function(e){r.d(t,"a",(function(){return n}));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function n(){"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}}).call(this,r(9))},8:function(e,t,r){}});