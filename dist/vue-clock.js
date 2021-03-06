(function(e, a) { for(var i in a) e[i] = a[i]; }(exports, /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(2)
	__vue_script__ = __webpack_require__(6)
	__vue_template__ = __webpack_require__(7)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) { (typeof module.exports === "function" ? module.exports.options : module.exports).template = __vue_template__ }
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/home/jxli/workspace/vue-clock/src/vue-clock.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 1 */,
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(3);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js!./../node_modules/vue-loader/lib/style-rewriter.js?id=_v-41788505&file=vue-clock.vue&scoped=true!./../node_modules/less-loader/index.js!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./vue-clock.vue", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js!./../node_modules/vue-loader/lib/style-rewriter.js?id=_v-41788505&file=vue-clock.vue&scoped=true!./../node_modules/less-loader/index.js!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./vue-clock.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports
	
	
	// module
	exports.push([module.id, ".clock[_v-41788505] {\n  position: relative;\n}\n.clock-input[_v-41788505] {\n  width: 50px;\n  height: 30px;\n  box-sizing: border-box;\n  text-align: center;\n  display: inline-block;\n}\n.clock-picker[_v-41788505] {\n  width: 200px;\n  height: 230px;\n  position: absolute;\n  background-color: #fff;\n  border: 1px solid #ddd;\n  border-radius: 4px;\n  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);\n}\n.clock-picker .clock-display[_v-41788505] {\n  text-align: center;\n  font-size: 30px;\n  line-height: 30px;\n  border-bottom: 1px solid #ddd;\n}\n.clock-picker .clock-panel[_v-41788505] {\n  width: 200px;\n  height: 200px;\n  border-radius: 100%;\n  background: #B6B6B6;\n  position: absolute;\n  top: 30px;\n  left: 0;\n}\n.clock-picker .clock-panel .clock-tick[_v-41788505] {\n  width: 30px;\n  height: 30px;\n  border-radius: 100%;\n  line-height: 30px;\n  text-align: center;\n  position: absolute;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n}\n.clock-picker .clock-panel .clock-tick[_v-41788505]:hover {\n  background: #ffee53;\n}\n.clock-picker .clock-panel .clock-tick .active[_v-41788505] {\n  border-radius: 100%;\n  background: #fff;\n}\n.clock-picker .clock-panel .clock-center[_v-41788505] {\n  position: absolute;\n  top: 100px;\n  left: 100px;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n}\n.fade-transition[_v-41788505] {\n  -webkit-transition: opacity 0.5s cubic-bezier(0.47, 0, 0.745, 0.715);\n  transition: opacity 0.5s cubic-bezier(0.47, 0, 0.745, 0.715);\n  opacity: 1;\n}\n.fade-enter[_v-41788505],\n.fade-leave[_v-41788505] {\n  opacity: 0;\n}\n", ""]);
	
	// exports


/***/ },
/* 4 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];
	
		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
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


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

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
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];
	
	module.exports = function(list, options) {
		if(false) {
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
		var sourceMap = obj.sourceMap;
	
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
		var media = obj.media;
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


/***/ },
/* 6 */
/***/ function(module, exports) {

	'use strict';
	
	// <template>
	//     <div class="clock">
	//         <span @click="show($event)">
	//             <slot>
	//                 <input class="clock-input" type="text" v-model="time">
	//             </slot>
	//         </span>
	//         <div class="clock-picker" :style="pickerOffset" v-show="showHourPanel != null" v-blur:close>
	//             <div class="clock-display">
	//                 <b>{{pad(hour)}}:{{pad(minute)}}</b>
	//             </div>
	//             <div class="clock-panel clock-hour" v-show="showHourPanel" transition="fade">
	//                 <div class="clock-tick" v-for="p in AMPoints" :style="p">
	//                     <div @click="select($index,'hour')" :class="{active: $index == hour}">{{$index}}</div>
	//                 </div>
	//                 <div class="clock-tick" v-for="p in PMPoints" :style="p">
	//                     <div @click="select(12 + $index,'hour')" :class="{active: 12 + $index == hour}">{{$index + 12}}</div>
	//                 </div>
	//             </div>
	//             <div class="clock-panel clock-minute" v-show="showHourPanel == false" transition="fade">
	//                 <button class="clock-center" @click="back">&lt;</button>
	//                 <div class="clock-tick" v-for="p in minPoints" :style="p">
	//                     <div @click="select(5 * $index,'minute')" :class="{active: 5 * $index == minute}">{{$index * 5}}</div>
	//                 </div>
	//             </div>
	//         </div>
	//     </div>
	// </template>
	
	// <script>
	/**
	 * @param R {Number} radius of panel
	 * @param gap {Number} the gap between notation and border
	 * @param tick {Number} amount of notations
	 * @return {Array}
	 */
	function generatePostion(R) {
	    var gap = arguments.length <= 1 || arguments[1] === undefined ? 15 : arguments[1];
	    var tick = arguments.length <= 2 || arguments[2] === undefined ? 12 : arguments[2];
	
	    var PI = Math.PI,
	        ZERO_CLOCK = 3 / 2 * PI,
	        // (North direction on screen)
	    STEP = 2 * PI / tick;
	    return new Array(tick).toString().split(',').map(function (point, i) {
	        var theta = ZERO_CLOCK + STEP * i;
	        return {
	            left: (R - gap) * Math.cos(theta) + R + 'px',
	            top: (R - gap) * Math.sin(theta) + R + 'px'
	        };
	    });
	}
	module.exports = {
	    props: {
	        time: {
	            type: String,
	            twoWay: true,
	            validator: function validator(value) {
	                return new RegExp(/^([01]\d)|(2[0-3])\:[0-5]\d$/).test(value);
	            },
	
	            default: '00:00'
	        }
	    },
	    data: function data() {
	        var hour = +this.time.slice(0, 2),
	            minute = +this.time.slice(3),
	            restToFive = minute % 5;
	        return {
	            hour: hour,
	            minute: minute + (restToFive ? 5 - restToFive : 0),
	            AMPoints: generatePostion(100),
	            PMPoints: generatePostion(100, 45),
	            minPoints: generatePostion(100),
	
	            showHourPanel: null,
	            pickerOffset: {}
	        };
	    },
	
	    methods: {
	        show: function show(e) {
	            this.showHourPanel = true;
	            this.pickerOffset = {
	                top: e.target.offsetTop + 'px',
	                left: e.target.offsetLeft + e.target.offsetWidth + 'px'
	            };
	        },
	        close: function close() {
	            this.showHourPanel = null;
	        },
	        back: function back() {
	            this.showHourPanel = true;
	        },
	        select: function select(value, unit) {
	            this[unit] = value;
	            this.time = this.pad(this.hour) + ':' + this.pad(this.minute);
	            if (unit == 'hour') {
	                this.showHourPanel = false;
	            }
	        },
	        pad: function pad(number) {
	            return number < 10 ? '0' + number : number;
	        }
	    },
	    directives: {
	        blur: {
	            bind: function bind() {
	                var self = this.vm,
	                    methodName = this.arg;
	                this.handler = function (e) {
	                    if (!self.$el.contains(e.target)) {
	                        self[methodName]();
	                    }
	                };
	                window.addEventListener('click', this.handler);
	            },
	            unbind: function unbind() {
	                window.removeEventListener('click', this.handler);
	            }
	        }
	    }
	};
	// </script>
	
	// <style lang="less" scoped>
	//     @border-color: #ddd;
	//     .clock {
	//         position: relative;
	//     }
	
	//     .clock-input {
	//         width: 50px;
	//         height: 30px;
	//         box-sizing: border-box;
	//         text-align: center;
	//         display: inline-block;
	//     }
	
	//     .clock-picker {
	//         @R: 100px;
	//         @display-height: 30px;
	//         @clock-size: 2 * @R;
	//         width: @clock-size;
	//         height: @clock-size + @display-height;
	//         position: absolute;
	//         background-color: #fff;
	//         border: 1px solid @border-color;
	//         border-radius: 4px;
	//         box-shadow: 0 5px 10px rgba(0, 0, 0, .2);
	//         .clock-display {
	//             text-align: center;
	//             font-size: @display-height;
	//             line-height: @display-height;
	//             border-bottom: 1px solid @border-color;
	//         }
	//         .clock-panel {
	//             @size: @clock-size;
	//             width: @size;
	//             height: @size;
	//             border-radius: 100%;
	//             background: #B6B6B6;
	//             position: absolute;
	//             top: @display-height;
	//             left: 0;
	//             .clock-tick {
	//                 @size: 30px;
	//                 width: @size;
	//                 height: @size;
	//                 border-radius: 100%;
	//                 line-height: @size;
	//                 text-align: center;
	//                 position: absolute;
	//                 transform: translate(-50%, -50%);
	//                 &:hover {
	//                     background: #ffee53;
	//                 }
	//                 .active {
	//                     border-radius: 100%;
	//                     background: #fff;
	//                 }
	//             }
	//             .clock-center {
	//                 position: absolute;
	//                 top: @R;
	//                 left: @R;
	//                 transform: translate(-50%, -50%);
	//             }
	//         }
	//     }
	
	//     .fade-transition {
	//         transition: opacity .5s cubic-bezier(0.47, 0, 0.745, 0.715);
	//         opacity: 1;
	//     }
	
	//     .fade-enter,
	//     .fade-leave {
	//         opacity: 0;
	//     }
	// </style>

/***/ },
/* 7 */
/***/ function(module, exports) {

	module.exports = "<div class=\"clock\" _v-41788505=\"\">\n        <span @click=\"show($event)\" _v-41788505=\"\">\n            <slot _v-41788505=\"\">\n                <input class=\"clock-input\" type=\"text\" v-model=\"time\" _v-41788505=\"\">\n            </slot>\n        </span>\n        <div class=\"clock-picker\" :style=\"pickerOffset\" v-show=\"showHourPanel != null\" v-blur:close=\"\" _v-41788505=\"\">\n            <div class=\"clock-display\" _v-41788505=\"\">\n                <b _v-41788505=\"\">{{pad(hour)}}:{{pad(minute)}}</b>\n            </div>\n            <div class=\"clock-panel clock-hour\" v-show=\"showHourPanel\" transition=\"fade\" _v-41788505=\"\">\n                <div class=\"clock-tick\" v-for=\"p in AMPoints\" :style=\"p\" _v-41788505=\"\">\n                    <div @click=\"select($index,'hour')\" :class=\"{active: $index == hour}\" _v-41788505=\"\">{{$index}}</div>\n                </div>\n                <div class=\"clock-tick\" v-for=\"p in PMPoints\" :style=\"p\" _v-41788505=\"\">\n                    <div @click=\"select(12 + $index,'hour')\" :class=\"{active: 12 + $index == hour}\" _v-41788505=\"\">{{$index + 12}}</div>\n                </div>\n            </div>\n            <div class=\"clock-panel clock-minute\" v-show=\"showHourPanel == false\" transition=\"fade\" _v-41788505=\"\">\n                <button class=\"clock-center\" @click=\"back\" _v-41788505=\"\">&lt;</button>\n                <div class=\"clock-tick\" v-for=\"p in minPoints\" :style=\"p\" _v-41788505=\"\">\n                    <div @click=\"select(5 * $index,'minute')\" :class=\"{active: 5 * $index == minute}\" _v-41788505=\"\">{{$index * 5}}</div>\n                </div>\n            </div>\n        </div>\n    </div>";

/***/ }
/******/ ])));
//# sourceMappingURL=vue-clock.js.map