webpackJsonp(["styles"],{

/***/ "../../../../../src/styles.css":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("../../../../css-loader/index.js?{\"sourceMap\":false,\"importLoaders\":1}!../../../../postcss-loader/index.js?{\"ident\":\"postcss\"}!../../../../../src/styles.css");
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__("../../../../style-loader/addStyles.js")(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../node_modules/css-loader/index.js??ref--8-1!../node_modules/postcss-loader/index.js??postcss!./styles.css", function() {
			var newContent = require("!!../node_modules/css-loader/index.js??ref--8-1!../node_modules/postcss-loader/index.js??postcss!./styles.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "../../../../css-loader/index.js?{\"sourceMap\":false,\"importLoaders\":1}!../../../../postcss-loader/index.js?{\"ident\":\"postcss\"}!../../../../../src/styles.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.navbar-brand,\n.navbar-nav li a {\n    line-height: 70px;\n    height: 70px;\n    padding-top: 0;\n}\n.navbar {\n  background-color: #f1d1ff;\n  border-color: #8e44ad;\n  margin-bottom: 0px;\n  font-size: 1.2em;\n}\n.navbar {\n /*  background: rgb(241,212,249); Old browsers\n background: -moz-linear-gradient(top, rgba(241,212,249,1) 0%, rgba(146,166,221,1) 0%, rgba(93,127,221,1) 43%, rgba(42,88,224,1) 100%, rgba(24,27,206,1) 100%, rgba(0,15,84,1) 100%, rgba(76,11,91,1) 100%); FF3.6-15\n background: -webkit-linear-gradient(top, rgba(241,212,249,1) 0%,rgba(146,166,221,1) 0%,rgba(93,127,221,1) 43%,rgba(42,88,224,1) 100%,rgba(24,27,206,1) 100%,rgba(0,15,84,1) 100%,rgba(76,11,91,1) 100%); Chrome10-25,Safari5.1-6\n background: linear-gradient(to bottom, rgba(241,212,249,1) 0%,rgba(146,166,221,1) 0%,rgba(93,127,221,1) 43%,rgba(42,88,224,1) 100%,rgba(24,27,206,1) 100%,rgba(0,15,84,1) 100%,rgba(76,11,91,1) 100%); W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+\n filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#f1d4f9', endColorstr='#4c0b5b',GradientType=0 ); IE6-9\n ; */\n background-color: #1F271B;\n  border:none;\n  border-radius: 0px;\n  box-shadow: -8px 11px 8px -3px rgba(0,0,0,0.75);\nbox-shadow: 0px -17px 15px 25px rgba(0,0,0,0.75);\n}\n.navbar .navbar-brand {\n  color: #d9dbdb;\n}\n.navbar .navbar-brand:hover,\n.navbar .navbar-brand:focus {\n  color: #ffffff;\n}\n.navbar .navbar-text {\n  color: #d9dbdb;\n}\n.navbar .navbar-nav > li > a {\n  color: #d9dbdb;\n}\n.navbar .navbar-nav > li > a:hover,\n.navbar .navbar-nav > li > a:focus {\n  color: #ffffff;\n}\n.navbar .navbar-nav > .active > a,\n.navbar .navbar-nav > .active > a:hover,\n.navbar .navbar-nav > .active > a:focus {\n  color: #ffffff;\n  /* background: rgb(241,212,249); Old browsers\n  background: -moz-linear-gradient(top, rgba(241,212,249,1) 0%, rgba(121,118,226,1) 0%, rgba(24,27,206,1) 43%, rgba(24,27,206,1) 100%, rgba(0,15,84,1) 100%, rgba(76,11,91,1) 100%, rgba(121,74,140,1) 100%); FF3.6-15\n  background: -webkit-linear-gradient(top, rgba(241,212,249,1) 0%,rgba(121,118,226,1) 0%,rgba(24,27,206,1) 43%,rgba(24,27,206,1) 100%,rgba(0,15,84,1) 100%,rgba(76,11,91,1) 100%,rgba(121,74,140,1) 100%); Chrome10-25,Safari5.1-6\n  background: linear-gradient(to bottom, rgba(241,212,249,1) 0%,rgba(121,118,226,1) 0%,rgba(24,27,206,1) 43%,rgba(24,27,206,1) 100%,rgba(0,15,84,1) 100%,rgba(76,11,91,1) 100%,rgba(121,74,140,1) 100%); W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+\n  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#f1d4f9', endColorstr='#794a8c',GradientType=0 ); IE6-9 */\n  background-color: #49924E;\n\n}\n.navbar .navbar-nav > .open > a,\n.navbar .navbar-nav > .open > a:hover,\n.navbar .navbar-nav > .open > a:focus {\n  color: #ffffff;\n  background: rgb(241,212,249); /* Old browsers */ /* FF3.6-15 */ /* Chrome10-25,Safari5.1-6 */\nbackground: linear-gradient(to bottom, rgba(241,212,249,1) 0%,rgba(121,118,226,1) 0%,rgba(24,27,206,1) 43%,rgba(24,27,206,1) 100%,rgba(0,15,84,1) 100%,rgba(76,11,91,1) 100%,rgba(121,74,140,1) 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */\nfilter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#f1d4f9', endColorstr='#794a8c',GradientType=0 ); /* IE6-9 */\n\n}\n.navbar .navbar-toggle {\n  border-color: #8e44ad;\n}\n.navbar .navbar-toggle:hover,\n.navbar .navbar-toggle:focus {\n  background: rgb(241,212,249); /* Old browsers */ /* FF3.6-15 */ /* Chrome10-25,Safari5.1-6 */\nbackground: linear-gradient(to bottom, rgba(241,212,249,1) 0%,rgba(121,118,226,1) 0%,rgba(24,27,206,1) 43%,rgba(24,27,206,1) 100%,rgba(0,15,84,1) 100%,rgba(76,11,91,1) 100%,rgba(121,74,140,1) 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */\nfilter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#f1d4f9', endColorstr='#794a8c',GradientType=0 ); /* IE6-9 */\n\n}\n.navbar .navbar-toggle .icon-bar {\n  background-color: #d9dbdb;\n}\n.navbar .navbar-collapse,\n.navbar .navbar-form {\n  border-color: #d9dbdb;\n}\n.navbar .navbar-link {\n  color: #d9dbdb;\n}\n.navbar .navbar-link:hover {\n  color: #ffffff;\n}\n\n@media (max-width: 767px) {\n  .navbar .navbar-nav .open .dropdown-menu > li > a {\n    color: #d9dbdb;\n  }\n  .navbar .navbar-nav .open .dropdown-menu > li > a:hover,\n  .navbar .navbar-nav .open .dropdown-menu > li > a:focus {\n    color: #ffffff;\n  }\n  .navbar .navbar-nav .open .dropdown-menu > .active > a,\n  .navbar .navbar-nav .open .dropdown-menu > .active > a:hover,\n  .navbar .navbar-nav .open .dropdown-menu > .active > a:focus {\n    color: #ffffff;\n    background: rgb(241,212,249); /* Old browsers */ /* FF3.6-15 */ /* Chrome10-25,Safari5.1-6 */\nbackground: linear-gradient(to bottom, rgba(241,212,249,1) 0%,rgba(121,118,226,1) 0%,rgba(24,27,206,1) 43%,rgba(24,27,206,1) 100%,rgba(0,15,84,1) 100%,rgba(76,11,91,1) 100%,rgba(121,74,140,1) 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */\nfilter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#f1d4f9', endColorstr='#794a8c',GradientType=0 ); /* IE6-9 */\n\n  }\n}\n\n/*navigation end */\nbody{\n  background-color: #d7d2db;\n  width: 100%;\n  overflow-x: hidden; \n}\nh3{\n  font-family: 'Kavivanar';\n  margin-top:5px;\n  margin-bottom:5px;\n}\nhr{\n  border-top: 1px solid #6f6f70;\n  margin-top: 2px;\n  margin-bottom: 8px;\n}\n#cat{\n  height: 50px; /* FF3.6-15 */\n  /* background: -moz-linear-gradient(top, rgba(75,145,80,0) 0%, rgba(75,145,80,0.8) 1%, rgba(75,145,80,1) 5%, rgba(75,145,80,1) 11%, rgba(34,183,39,1) 51%, rgba(58,145,68,1) 87%, rgba(58,145,68,1) 95%, rgba(58,145,68,0.8) 99%, rgba(58,145,68,0) 100%); FF3.6-15\n  background: -webkit-linear-gradient(top, rgba(75,145,80,0) 0%,rgba(75,145,80,0.8) 1%,rgba(75,145,80,1) 5%,rgba(75,145,80,1) 11%,rgba(34,183,39,1) 51%,rgba(58,145,68,1) 87%,rgba(58,145,68,1) 95%,rgba(58,145,68,0.8) 99%,rgba(58,145,68,0) 100%); Chrome10-25,Safari5.1-6\n  background: linear-gradient(to bottom, rgba(75,145,80,0) 0%,rgba(75,145,80,0.8) 1%,rgba(75,145,80,1) 5%,rgba(75,145,80,1) 11%,rgba(34,183,39,1) 51%,rgba(58,145,68,1) 87%,rgba(58,145,68,1) 95%,rgba(58,145,68,0.8) 99%,rgba(58,145,68,0) 100%); W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+\n  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#004b9150', endColorstr='#003a9144',GradientType=0 ); IE6-9 */\n  background-color: #323f2b;\n  box-shadow: 0px -8px 14px 11px rgba(0,0,0,0.75);\n}\n#catdropdown{\n     line-height: 50px;\n    height: 50px;\n\n}\n#catbutton{\n\n    height: 48px;\n    background-color: Transparent;\n    background-repeat:no-repeat;\n    border: none;\n    cursor:pointer;\n    overflow: hidden;\n    outline:none;\n    font-size: 1.3em;\n\n}\n#catbutton:hover { /* FF3.6-15 */ /* Chrome10-25,Safari5.1-6 */\nbackground: linear-gradient(to bottom, rgba(18,94,88,0) 0%,rgba(18,94,88,1) 28%,rgba(18,94,88,1) 50%,rgba(103,110,110,1) 95%,rgba(110,112,112,0.8) 99%,rgba(112,112,112,0) 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */\nfilter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#00125e58', endColorstr='#00707070',GradientType=0 ); /* IE6-9 */\n}\n.desc{\n  background-color: white;\n\n margin: auto;  \n}\n\n\n#login{\n\n  width: 400px;\n  height:300px;\n  border-radius:10px;\n  box-shadow: 0px 14px 16px 17px rgba(0,0,0,0.75);\n  background-color: #F4F1BB;\n}\n#login >form > h1{\n  border-top-left-radius: 10px;\n  border-top-right-radius: 10px;\n  height:50px;\n  text-align: center;\n  background-color: #404ea0; \n  color: white;\n}\n#login >form > div{\n  margin-left:50px;\n  width: 300px;\n  border-radius:10px;\n  height:50px;\n  text-align: center;\n  color: white;\n}\n#uname{\n  margin-top:20px;\n}\n#loginbutton{\n  margin-bottom: 20px;\n  width:150px;\n  height: 40px;\n  background-color: #404ea0 ;\n  border:none;\n  box-shadow: 0px;\n}\n\n.footer {\n  right: 0;\n  bottom: 0;\n  left: 0;\n  padding: 1rem;\n  background-color:#1F271B;;\n  color: #f8eff9;\n  text-align: left;\n  margin-top: 20px;\n  box-shadow: 0px 5px 11px 14px rgba(0,0,0,0.75);\n  font-size: 1.1em;\n}\n#web:link{\ncolor: #f8eff9;\n}\n#web:visited{\ncolor: #f8eff9;\n}\n#categorydropdown{\n  width: 600%;\n}\n.banner>div>div{\n  width: 100%;\n  height: 300px;\n}\n.intr{\nwidth: 100%;\nheight: 300px !important\n}\n.products>a>div{\n  border:0px solid black;\n  box-shadow: 1px 3px 36px 0px rgba(0,0,0,0.75);\n  border-radius: 5px;\n  width:30%;\n  margin-right:1%;\n  margin-left: 1%;\n  background-color: #434941;\n}\n#allproducts>div{\n  width: 95%;\n  margin: auto;  \n}\n.products>a>div>img{\n  height: 150px;\n  width: 300px;\n  margin: 10px auto 5px;\n\n}\n.products>a>div{\npadding-left: 5px;\npadding-right: 5px;\n}\n.products>a:link{\ncolor: #4f4e4e;\n}\n.products>a:visited{\ncolor: #4f4e4e;\n}\n.products>a:hover{\ncolor: #000000;\n}\n.desc >div { \n    box-sizing: border-box;\n    border-right: 1px solid black;    \n}\n.desc2{\n   padding-bottom:10px;\n}\n.desc2>div>div{\nborder-top: 1px solid black;\n}\n.desc2>:first-child>:first-child{\n  text-align: center;\n}\n.desc2>:nth-child(2)>div{\n  text-align: justify;\n}\n.userdetails{\n  margin: 5px;\n}\n.userdetails>:nth-child(odd){\n  background-color: #f7dbc3;\n}\n.userdetails>:nth-child(even){\n  background-color: #d1cecc;\n}\n\n.addetails>:nth-child(odd){\n  background-color: #f7dbc3;\n}\n.addetails>:nth-child(even){\n  background-color: #d1cecc;\n}\n\n.addetails>div>:first-child{\nbackground-color: #F7F7F2;\n}\n.panel-body{\n  margin:0;\n}\n.panel-title{\n  font-size: 1.5em;\n}\n.carousel-inner>div>img{\n  margin: 0 auto;\n}\n#sign2{\n\n  width: 400px;\n  height:300px;\n  border-radius:10px;\n  box-shadow: 10px 10px 5px #4f5051;\n  box-shadow: 0px 14px 16px 17px rgba(0,0,0,0.75);\n  background-color: #F4F1BB;\n}\n#sign2 >form > h1{\n  border-top-left-radius: 10px;\n  border-top-right-radius: 10px;\n  height:50px;\n  text-align: center;\n  background-color: #404ea0; \n  color: white;\n}\n#sign2 >form > div{\n  margin-left:50px;\n  width: 300px;\n  border-radius:10px;\n  height:50px;\n  text-align: center;\n  color: white;\n}\n#sign2{\n  height: 500px;\n}\n#signinbutton{\n  margin-bottom: 20px;\n  width:150px;\n  height: 40px;\n  background-color: #404ea0 ;\n  border:none;\n  box-shadow: 0px;\n}\n.affix {\n   top:1px;\n  }\n  #payby{\n    text-align: right;\n  }\n  #payby>img{\n    text-align: right;\n  padding-top: 5px;\n  line-height: 50px;\n    height: 50px;\n  }\n  #aser{\n\n  }\n  #aser2{\n    background-color: #a6afa1;\n    max-width: 285px;\n    padding-right: 5px;\n    box-shadow: 9px 7px 40px 3px rgba(0,0,0,0.75);\n  }\n  .showadvert{\n    margin-top: 10px;\n    font-size: 1.2em;\n    background-color: #A6AFA1;\n    margin-left: 30px;\n    margin-right: 30px;\n    border-radius: 10px;\n  }\n  .showadvert>:first-child{\n    border-top-left-radius: 10px;\n    border-top-right-radius: 10px;\n  }\n  .showadvert>:nth-child(odd){\n    background-color: #959b92;\n     \n  }\n  .copyright{\n    text-align: center;\n    color: white;\n    font-size: 1.2em;\n  }\n  .addetails>div{\n  margin: 30px;\n}\n#adhistory{\n  max-height :500px;\n  overflow: scroll;\n}\n#myaccjumbo{\n  padding-top:10px;\n  padding-bottom: 10px;\n}\n#adCarousel{\n  margin-left: 30px;\n  margin-right: 30px;\n}\n.pagination{\n  position:absolute; \n  right: 90px;\n  bottom: -65px;\n}\n.faq>p{\n  font-size: 1.1em;\n}\n.faq>:nth-child(odd){\n  font-size: 1.2em;\n  color:red;\n}\n.faq>:nth-child(even){\n  color:blue;\n}", ""]);

// exports


/***/ }),

/***/ "../../../../css-loader/lib/css-base.js":
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),

/***/ "../../../../style-loader/addStyles.js":
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
var stylesInDom = {},
	memoize = function(fn) {
		var memo;
		return function () {
			if (typeof memo === "undefined") memo = fn.apply(this, arguments);
			return memo;
		};
	},
	isOldIE = memoize(function() {
		return /msie [6-9]\b/.test(self.navigator.userAgent.toLowerCase());
	}),
	getHeadElement = memoize(function () {
		return document.head || document.getElementsByTagName("head")[0];
	}),
	singletonElement = null,
	singletonCounter = 0,
	styleElementsInsertedAtTop = [];

module.exports = function(list, options) {
	if(typeof DEBUG !== "undefined" && DEBUG) {
		if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};
	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (typeof options.singleton === "undefined") options.singleton = isOldIE();

	// By default, add <style> tags to the bottom of <head>.
	if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

	var styles = listToStyles(list);
	addStylesToDom(styles, options);

	return function update(newList) {
		var mayRemove = [];
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			domStyle.refs--;
			mayRemove.push(domStyle);
		}
		if(newList) {
			var newStyles = listToStyles(newList);
			addStylesToDom(newStyles, options);
		}
		for(var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];
			if(domStyle.refs === 0) {
				for(var j = 0; j < domStyle.parts.length; j++)
					domStyle.parts[j]();
				delete stylesInDom[domStyle.id];
			}
		}
	};
}

function addStylesToDom(styles, options) {
	for(var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];
		if(domStyle) {
			domStyle.refs++;
			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}
			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];
			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}
			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles(list) {
	var styles = [];
	var newStyles = {};
	for(var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};
		if(!newStyles[id])
			styles.push(newStyles[id] = {id: id, parts: [part]});
		else
			newStyles[id].parts.push(part);
	}
	return styles;
}

function insertStyleElement(options, styleElement) {
	var head = getHeadElement();
	var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
	if (options.insertAt === "top") {
		if(!lastStyleElementInsertedAtTop) {
			head.insertBefore(styleElement, head.firstChild);
		} else if(lastStyleElementInsertedAtTop.nextSibling) {
			head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			head.appendChild(styleElement);
		}
		styleElementsInsertedAtTop.push(styleElement);
	} else if (options.insertAt === "bottom") {
		head.appendChild(styleElement);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement(styleElement) {
	styleElement.parentNode.removeChild(styleElement);
	var idx = styleElementsInsertedAtTop.indexOf(styleElement);
	if(idx >= 0) {
		styleElementsInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement(options) {
	var styleElement = document.createElement("style");
	styleElement.type = "text/css";
	insertStyleElement(options, styleElement);
	return styleElement;
}

function createLinkElement(options) {
	var linkElement = document.createElement("link");
	linkElement.rel = "stylesheet";
	insertStyleElement(options, linkElement);
	return linkElement;
}

function addStyle(obj, options) {
	var styleElement, update, remove;

	if (options.singleton) {
		var styleIndex = singletonCounter++;
		styleElement = singletonElement || (singletonElement = createStyleElement(options));
		update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
		remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
	} else if(obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function") {
		styleElement = createLinkElement(options);
		update = updateLink.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
			if(styleElement.href)
				URL.revokeObjectURL(styleElement.href);
		};
	} else {
		styleElement = createStyleElement(options);
		update = applyToTag.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
		};
	}

	update(obj);

	return function updateStyle(newObj) {
		if(newObj) {
			if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
				return;
			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;
		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag(styleElement, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (styleElement.styleSheet) {
		styleElement.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = styleElement.childNodes;
		if (childNodes[index]) styleElement.removeChild(childNodes[index]);
		if (childNodes.length) {
			styleElement.insertBefore(cssNode, childNodes[index]);
		} else {
			styleElement.appendChild(cssNode);
		}
	}
}

function applyToTag(styleElement, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		styleElement.setAttribute("media", media)
	}

	if(styleElement.styleSheet) {
		styleElement.styleSheet.cssText = css;
	} else {
		while(styleElement.firstChild) {
			styleElement.removeChild(styleElement.firstChild);
		}
		styleElement.appendChild(document.createTextNode(css));
	}
}

function updateLink(linkElement, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	if(sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = linkElement.href;

	linkElement.href = URL.createObjectURL(blob);

	if(oldSrc)
		URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/styles.css");


/***/ })

},[2]);
//# sourceMappingURL=styles.bundle.js.map